<script setup lang="ts">
import type { PortfolioElement } from "~/types/portfolio"

import PageImpl from "./../index_.vue"

const { locale } = useI18n()

const store = usePortfolio()
const _store = useGlobalData()

const page = ref<number>(0)
const portfolios = computed(() => {
  return store.portfolio as PortfolioElement[]
})

const categories = computed(() => {
  if (locale.value === "en") {
    return _store.home?.en.categories
  } else {
    return _store.home?.ru.categories
  }
})
const activeSlug = computed(() => {
  return store.categoryPortfolio
})

const totalPage = ref<number>()

onMounted(async () => {
  const totalLoadedProjects = window.sessionStorage.getItem("totalLoadedProjects")
  if (totalLoadedProjects) {
    totalPage.value = Math.ceil((JSON.parse(totalLoadedProjects) + 6) / 6)
    for (let i = 0; i < totalPage.value; i++) {
      await store.getPortfolio(activeSlug.value, page.value)
      page.value += 6
    }
  } else {
    await store.getPortfolio(activeSlug.value, 0)
  }
})
</script>

<template>
  <page-impl
    v-if="portfolios && categories"
    :portfolios="portfolios"
    :categories="categories"
    :active-slug="activeSlug"
  />
</template>

<style lang="scss" module></style>
