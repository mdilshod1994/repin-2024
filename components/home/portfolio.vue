<script setup lang="ts">
import type { Category } from "~/types/home"
import type { PortfolioElement } from "~/types/portfolio"

const { locale } = useI18n()

defineProps<{
  title: string
  subtitle: string
  categories: Category[]
  portfolio_btn: string
}>()

const store = usePortfolio()
const leftArrow = ref<HTMLElement | null>()
const rightArrow = ref<HTMLElement | null>()
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

onMounted(() => {
  _getPortfolio(activeSlug.value)
  window.sessionStorage.removeItem("totalLoadedProjects")
})

watch(slug, async (newSlug) => {
  if (newSlug) {
    await _getPortfolio(newSlug)
  }
})

const handleArrows = () => {
  const tabs = document.querySelectorAll(".tab")
  const firstCatObserver = new IntersectionObserver(
    (entries) => {
      if (!leftArrow.value) return
      leftArrow.value.style.display = entries[0].isIntersecting ? "none" : "flex"
    },
    {
      threshold: 0.8,
    },
  )
  const firstCat = tabs[0]
  firstCatObserver.observe(firstCat)
  const lastCatObserver = new IntersectionObserver(
    (entries) => {
      if (!rightArrow.value) return
      rightArrow.value.style.display = entries[0].isIntersecting ? "none" : "flex"
    },
    {
      threshold: 0.8,
    },
  )
  const lastCat = tabs.length - 1
  lastCatObserver.observe(tabs[lastCat])
}
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
    <div cls="portfolio__mob-filter" @touchmove="handleArrows">
      <div ref="leftArrow" cls="portfolio__mob-filter-arrow -left">
        <svgo-arrow-right />
      </div>
      <div ref="rightArrow" cls="portfolio__mob-filter-arrow -right">
        <svgo-arrow-right />
      </div>
      <r-carousel gap="8" tablet-gap="8" mob-gap="8">
        <div :class="{ tab: true, '-active': activeSlug === 'all' }" @click="_getPortfolio('all')">
          <span v-if="locale === 'en'">All</span>
          <span v-if="locale === 'en'">All</span>
          <span v-if="locale === 'ru'">Все</span>
          <span v-if="locale === 'ru'">Все</span>
        </div>
        <div
          v-for="category in categories"
          :class="{ tab: true, '-active': activeSlug === category.slug }"
          @click="_getPortfolio(category.slug)"
        >
          <span>{{ category.name }}</span>
          <span>{{ category.name }}</span>
        </div>
      </r-carousel>
    </div>
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
        <r-button to="/portfolio"> {{ portfolio_btn }} </r-button>
      </template>
    </r-grid>
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
    padding-top: 104px;
  }
  &__card {
    &:nth-child(3n-1) {
      margin-top: -104px;
    }
  }
}
@include tablet {
  .portfolio {
    gap: 64px;
    &__grid {
      padding-top: 120px;
    }
    &__card {
      &:nth-child(3n-1) {
        margin-top: auto;
      }
      &:nth-child(2n-1) {
        margin-top: -120px;
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
      margin: 0 -24px;
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
