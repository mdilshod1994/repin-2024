<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import type { PortfolioElement } from "~/types/portfolio"

const store = usePortfolio()
const portfolio = ref<HTMLElement | null>(null)

const portfolios = computed(() => {
  return store.portfolio?.slice(0, 3) as PortfolioElement[]
})
onMounted(async () => {
  await store.getPortfolio("all", 0)
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".first", {
    scrollTrigger: {
      trigger: ".first",
      start: "-30% 60%",
      end: "10% 40%",
      scrub: 2,
    },
    y: -104,
    ease: "power1.inOut",
    duration: 3,
  })
  gsap.to(".second", {
    scrollTrigger: {
      trigger: ".first",
      start: "-30% 60%",
      end: "10% 40%",
      scrub: 2,
    },
    y: -208,
    ease: "power1.inOut",
    duration: 3,
  })
})
</script>

<template>
  <div v-if="portfolios" ref="portfolio" cls="projects">
    <div cls="projects__inner">
      <r-title pretitle="Our projects" title="Next projects" flex-start />
      <r-grid mobile-column="1" tablet-column="3" :mobile-gaps="[40]" button>
        <portfolio-card
          v-for="(portfolio, idx) in portfolios"
          :key="portfolio.id"
          :portfolio="portfolio"
          cls="project"
          :class="`${idx === 1 ? 'first' : ''} ${idx === 2 ? 'second' : ''} `"
        />
      </r-grid>
    </div>
  </div>
</template>

<style module lang="scss">
.projects {
  padding: 72px 0 88px;
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
}
.project {
  &:nth-child(2) {
    margin-top: 104px;
  }
  &:nth-child(3) {
    margin-top: 208px;
  }
}
</style>
