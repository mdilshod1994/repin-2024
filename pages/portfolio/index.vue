<script setup lang="ts">
import { type PortfolioElement } from "~/types/globaldata"

import PageImpl from "./index_.vue"

const store = useGlobalData()

const portfolios = computed(() => {
  return store.globalData?.en.portfolio as PortfolioElement[]
})
</script>

<template>
  <page-impl v-if="portfolios" :portfolios="portfolios" />
</template>

<style module lang="scss"></style>
