<script setup lang="ts">
import type { PortfolioElement } from "~/types/portfolio"

const store = usePortfolio()
const _store = useGlobalData()

const portfolios = computed(() => {
  return store.portfolio?.slice(0, 6) as PortfolioElement[]
})
const categories = computed(() => {
  return _store.home?.categories
})
const activeSlug = computed(() => {
  return store.categoryPortfolio
})
const info = computed(() => {
  return _store.home?.page
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
</script>

<template>
  <div v-if="categories && portfolios" cls="portfolio">
    <r-title :pretitle="info?.portfolio_subtitle" :title="info?.portfolio_title">
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
      <r-carousel gap="8">
        <div :class="{ tab: true, '-active': activeSlug === 'all' }" @click="_getPortfolio('all')">
          All
        </div>
        <div
          v-for="category in categories"
          :class="{ tab: true, '-active': activeSlug === category.slug }"
          @click="_getPortfolio(category.slug)"
        >
          {{ category.name }}
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
        <r-button to="/portfolio"> {{ info?.portfolio_btn }} </r-button>
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
