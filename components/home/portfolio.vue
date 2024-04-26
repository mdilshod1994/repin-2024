<script setup lang="ts">
import type { Category, En, PortfolioElement } from "~/types/globaldata"

const store = useGlobalData()
defineProps<{
  en?: En
  categories?: Category[]
}>()

const portfolios = computed(() => {
  return store.globalData?.en.portfolio as PortfolioElement[]
})
</script>

<template>
  <div cls="portfolio">
    <r-title :pretitle="en?.page.portfolio_subtitle" :title="en?.page.portfolio_title">
      <template #addons>
        <div cls="portfolio__filter">
          <portfolio-filters :categories="categories" />
        </div>
      </template>
    </r-title>
    <div cls="portfolio__mob-filter">
      <r-carousel gap="8">
        <div class="tab -active">All</div>
        <div v-for="category in categories" class="tab">{{ category.name }}</div>
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
        <r-button to="/portfolio"> Show more </r-button>
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
