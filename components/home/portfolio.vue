<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core"

import type { Category } from "~/types/home"
import type { PortfolioElement } from "~/types/portfolio"

const localePath = useLocalePath()

const { $gsap } = useNuxtApp()

const { locale } = useI18n()
defineProps<{
  title: string
  subtitle: string
  categories: Category[]
  portfolioBtn: string
}>()

const store = usePortfolio()
const portfolios = computed(() => {
  return store.portfolio?.slice(0, 6) as PortfolioElement[]
})
const activeSlug = computed(() => {
  return store.categoryPortfolio
})
const slug = defineModel<string>("slug")

const _getPortfolio = async (slug?: string) => {
  if (slug) {
    await store.getPortfolio(slug, 0)
  }
}

const screenWidth = useMediaQuery(`(max-width: 1280px`)
const marginTopPaddingTop = ref("")
const _marginTopPaddingTop = ref("")

const portfolioHome = ref()
watchEffect(() => {
  if (portfolioHome.value) {
    const mm = $gsap.matchMedia()
    mm.add("(min-width: 768px)", () => {
      $gsap.to(portfolioHome.value, {
        scrollTrigger: {
          trigger: portfolioHome.value,
          start: "top 70%",
          end: "top 10%",
          scrub: 2,
          onUpdate: (self) => {
            if (screenWidth.value) {
              marginTopPaddingTop.value = `${120 - 120 * self.progress}px`
              _marginTopPaddingTop.value = `${-120 + 120 * self.progress}px`
            } else {
              marginTopPaddingTop.value = `${104 - 104 * self.progress}px`
              _marginTopPaddingTop.value = `${-104 + 104 * self.progress}px`
            }
          },
        },
      })
    })
  }
})
onMounted(() => {
  _getPortfolio(activeSlug.value)
  window.sessionStorage.removeItem("totalLoadedProjects")
  if (screenWidth.value) {
    marginTopPaddingTop.value = "120px"
    _marginTopPaddingTop.value = "-120px"
  } else {
    marginTopPaddingTop.value = "104px"
    _marginTopPaddingTop.value = "-104px"
  }
})

watch(slug, async (newSlug) => {
  if (newSlug) {
    await _getPortfolio(newSlug)
  }
})

watch(portfolios, (nv) => {
  if (nv) {
    const arrows = document.querySelectorAll(".filter-arrow")
    const first = document.querySelector(".first") as Element
    const last = document.querySelector(".last")
    nextTick(() => {
      if (first) {
        observer.observe(first)
      }
      if (last) {
        observer.observe(last)
      }
    })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ob) => {
          if (ob.target.classList.contains("first")) {
            arrows[0].style.display = ob.isIntersecting ? "none" : "flex"
          }
          if (ob.target.classList.contains("last")) {
            arrows[1].style.display = ob.isIntersecting ? "none" : "flex"
          }
        })
      },
      {
        threshold: 0.8,
      },
    )
  }
})
</script>

<template>
  <div v-if="categories && portfolios" cls="portfolio">
    <r-title :pretitle="subtitle" :title="title">
      <template #addons>
        <div cls="portfolio__filter">
          <portfolio-filters
            v-model:slug="slug"
            :active-slug="activeSlug"
            :categories="categories"
          />
        </div>
      </template>
    </r-title>
    <div cls="portfolio__mob-filter">
      <div cls="portfolio__mob-filter-arrow -left" class="filter-arrow">
        <svgo-arrow-right />
      </div>
      <div cls="portfolio__mob-filter-arrow -right" class="filter-arrow">
        <svgo-arrow-right />
      </div>
      <r-carousel gap="8" tablet-gap="8" mob-gap="8">
        <div
          :class="{ tab: true, '-active': activeSlug === 'all', first: true }"
          @click="_getPortfolio('all')"
          @click.prevent="$router.push({ path: `${localePath('/portfolio')}` })"
        >
          <span v-if="locale === 'en'">All</span>
          <span v-if="locale === 'en'">All</span>
          <span v-if="locale === 'ru'">Все</span>
          <span v-if="locale === 'ru'">Все</span>
        </div>
        <div
          v-for="(category, idx) in categories"
          :class="{
            tab: true,
            '-active': activeSlug === category.slug,
            last: idx === categories.length - 1,
          }"
          @click="_getPortfolio(category.slug)"
          @click.prevent="$router.push({ path: `${localePath('/portfolio')}` })"
        >
          <span>{{ category.name }}</span>
          <span>{{ category.name }}</span>
        </div>
      </r-carousel>
    </div>

    <div ref="portfolioHome">
      <r-grid
        tablet-column="2"
        :desktop-gaps="[60, 24]"
        :tablet-gaps="[48, 20]"
        :mobile-gaps="[32, 8]"
        cls="portfolio__grid"
      >
        <portfolio-card
          v-for="portfolio in portfolios"
          :key="portfolio.id"
          :portfolio="portfolio"
          cls="portfolio__card"
        />
        <template #addons>
          <r-button to="/portfolio"> {{ portfolioBtn }} </r-button>
        </template>
      </r-grid>
    </div>
  </div>
</template>

<style module lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  gap: 104px;
  &__mob-filter {
    display: none;
  }
  &__grid {
    padding-top: v-bind(marginTopPaddingTop);
  }
  &__card {
    &:nth-child(3n-1) {
      margin-top: v-bind(_marginTopPaddingTop);
    }
  }
}
@include tablet {
  .portfolio {
    gap: 64px;
    &__grid {
      padding-top: v-bind(marginTopPaddingTop);
    }
    &__card {
      &:nth-child(3n-1) {
        margin-top: 0;
      }
      &:nth-child(2n-1) {
        margin-top: v-bind(_marginTopPaddingTop);
      }
    }
  }
}
@include tablet-small {
  .portfolio {
    &__filter {
      display: none;
    }
    &__mob-filter {
      display: block;
      margin: 0 -40px;
    }
  }
}
@include mobile {
  .portfolio {
    gap: 0;
    &__mob-filter {
      margin: 56px -16px 32px;
      position: relative;
      &-arrow {
        position: absolute;
        top: 0px;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        &.-left {
          display: none;
          left: 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0)
          );
          svg {
            transform: rotate(-180deg);
          }
        }
        &.-right {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0)
          );
        }
        svg {
          font-size: 12px;
          color: #000;
        }
      }
    }
    &__grid {
      padding-top: 40px;
    }
    &__card {
      &:nth-child(2n-1) {
        margin-top: -40px;
      }
    }
  }
}
</style>
