import { defineStore } from "pinia"

import type { Category, Portfolio, PortfolioElement } from "~/types/portfolio"

export const usePortfolio = defineStore("portfolio", () => {
  const categories = ref<Category[]>()
  const _portfolio = ref<PortfolioElement[]>()
  const portfolio = ref<PortfolioElement[]>()
  const _slug = ref<string | undefined>()
  const _page = ref<number | undefined>()
  const totalProjects = ref<number>()

  const currentPageNumber = computed(() => {
    const pageNumberFromStorage = window.sessionStorage.getItem("page-number")
    if (_page.value || _page.value === 0) {
      return _page.value
    } else if (pageNumberFromStorage) {
      return JSON.parse(pageNumberFromStorage)
    } else {
      return 0
    }
  })
  const categoryPortfolio = computed(() => {
    const categoryPortfolioFromStorage = window.sessionStorage.getItem("slug")
    if (_slug.value) {
      return _slug.value
    } else if (categoryPortfolioFromStorage) {
      return JSON.parse(categoryPortfolioFromStorage)
    } else {
      return "all"
    }
  })

  watch(
    [_portfolio, _slug, _page],
    ([newPortfolio]) => {
      if (newPortfolio) {
        portfolio.value = newPortfolio
        window.sessionStorage.setItem("portfolio", JSON.stringify(newPortfolio))
      }
    },
    {
      deep: true,
    },
  )

  onMounted(() => {
    const _fromStorage = window.sessionStorage.getItem("portfolio")
    if (_fromStorage && !portfolio.value) {
      portfolio.value = JSON.parse(_fromStorage)
    }
  })

  const getPortfolio = async (slug: string, page: number) => {
    _slug.value = slug
    _page.value = page
    try {
      const { en } = await $fetch<Portfolio>(
        `https://repin.agency/wp-json/api/v1/projects/${_slug.value}/${_page.value}`,
      )
      if (!en) return
      totalProjects.value = en.portfolio_count
      categories.value = en.categories
      if (page === 0 || page === undefined) {
        _portfolio.value = en.portfolio
      } else {
        _portfolio.value?.push(...en.portfolio)
      }
    } catch (error) {
      console.log(error)
    } finally {
      window.sessionStorage.setItem("slug", JSON.stringify(_slug.value))
      window.sessionStorage.setItem("page-number", JSON.stringify(_page.value))
    }
  }

  const getPortfolioCase = async (slug: string, id: number) => {
    try {
    } catch (error) {}
  }

  return {
    getPortfolio,
    categories,
    portfolio,
    currentPageNumber,
    categoryPortfolio,
    totalProjects,
  }
})
