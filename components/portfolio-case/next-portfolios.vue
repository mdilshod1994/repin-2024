<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import type { Portfolio, PortfolioElement } from "~/types/portfolio"

const { locale } = useI18n()

gsap.registerPlugin(ScrollTrigger)

const { id } = useRoute().params

const { data: portfolios } = await useFetch<Portfolio>(
  "https://repin.agency/wp-json/api/v1/projects-all/all/0/",
  {
    lazy: true,
    server: false,
  },
)

const sortedPortfolios = ref<PortfolioElement[]>()

watch(portfolios, (nv) => {
  if (nv) {
    let portfolio
    if (locale.value === "en") {
      portfolio = nv.en.portfolio
    } else {
      portfolio = nv.ru.portfolio
    }
    sortedPortfolios.value = portfolio
      .filter((x) => {
        if (x.slug !== id) {
          return x
        }
      })
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, 3)
  }
})
const container = ref()
const setGSAP = () => {
  const mm = gsap.matchMedia()
  mm.add("(min-width: 768px)", () => {
    gsap.to(".first", {
      scrollTrigger: {
        trigger: ".first",
        start: "-10% 100%",
        end: "40% 70%",
        scrub: 2,
      },
      marginTop: 0,
      ease: "power1.inOut",
      duration: 3,
    })
    gsap.to(".second", {
      scrollTrigger: {
        trigger: ".first",
        start: "-10% 100%",
        end: "40% 70%",
        scrub: 2,
      },
      marginTop: 0,
      ease: "power1.inOut",
      duration: 3,
    })
  })
}
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setGSAP()
    }
  })
  observer.observe(container.value)
})
</script>

<template>
  <div ref="container" cls="projects">
    <div cls="projects__inner">
      <r-title pretitle="Our projects" title="Next projects" mobile-center flex-start />
      <r-grid mobile-column="1" tablet-column="3" :mobile-gaps="[40]" button>
        <portfolio-card
          v-for="(portfolio, idx) in sortedPortfolios"
          :key="portfolio.id"
          :portfolio="portfolio"
          mob-title-font-size
          cls="project"
          class="project"
          :class="`${idx === 1 ? 'first' : ''} ${idx === 2 ? 'second' : ''} `"
        />
      </r-grid>
    </div>
  </div>
</template>

<style module lang="scss">
.projects {
  padding: 104px 0 160px;

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
@include mobile {
  .project {
    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 0;
    }
  }
  .projects {
    padding: 72px 0 88px;
  }
}
</style>
