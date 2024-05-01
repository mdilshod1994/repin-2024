<script setup lang="ts">
import type { PortfolioElement } from "~/types/portfolio"

const store = usePortfolio()
const marginTop = ref<number>(104)
const portfolio = ref<HTMLElement | null>(null)

const portfolios = computed(() => {
  return store.portfolio?.slice(0, 3) as PortfolioElement[]
})

const setMarginFirstEl = computed(() => {
  return `${marginTop.value}px`
})
const setMarginScndEl = computed(() => {
  return `${marginTop.value * 2}px`
})
onMounted(async () => {
  await store.getPortfolio("all", 0)

  function setMargin() {
    const htmlElement = document.documentElement
    if (!portfolio.value) return
    const topPosition = portfolio.value?.offsetTop
    const scrolledFromTop = htmlElement.scrollTop
    const topStart = portfolio.value.offsetHeight - window.screen.height
    const topEnd = htmlElement.scrollTop - portfolio.value.offsetTop
    const per = (topEnd / topStart) * 100
    if (topPosition <= scrolledFromTop && per <= 100) {
      marginTop.value = 104 - (104 * Math.ceil(per)) / 100
    }
  }
  window.addEventListener("resize", setMargin)
  window.addEventListener("scroll", setMargin)
  window.addEventListener("DOMContentLoaded", setMargin)
})
</script>

<template>
  <div v-if="portfolios" ref="portfolio" cls="projects">
    <div cls="projects__inner">
      <r-title pretitle="Our projects" title="Next projects" flex-start />
      <r-grid mobile-column="1" tablet-column="3" :mobile-gaps="[40]" button>
        <portfolio-card
          v-for="portfolio in portfolios"
          :key="portfolio.id"
          :portfolio="portfolio"
          cls="project"
        />
      </r-grid>
    </div>
  </div>
</template>

<style module lang="scss">
.projects {
  padding: 72px 0 88px;
  height: 180svh;
  &__inner {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
}
.project {
  &:nth-child(2) {
    margin-top: v-bind(setMarginFirstEl);
  }
  &:last-child {
    margin-top: v-bind(setMarginScndEl);
  }
}
@include mobile {
  .projects {
    height: auto;
  }
  .project {
    &:last-child,
    &:nth-child(2) {
      margin-top: 0;
    }
  }
}
</style>
