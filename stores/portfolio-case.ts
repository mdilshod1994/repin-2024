import { defineStore } from "pinia"

import type { PortfolioCase } from "~/types/portfolio-case"

export const usePortfolioCase = defineStore("portfolio-case", () => {
  const portfolio = ref<PortfolioCase>()

  const getPortfolioCase = async (slug: string) => {
    try {
      portfolio.value = await $fetch(`https://repin.agency/wp-json/api/v1/project/${slug}`)
    } catch (error) {}
  }
  return {
    getPortfolioCase,
    portfolio,
  }
})
