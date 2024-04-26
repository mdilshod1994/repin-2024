<script setup lang="ts">
import { type PortfolioElement } from "~/types/globaldata"

const store = useGlobalData()

// const portfolios = computed(() => {
//   return store.globalData?.en.portfolio as PortfolioElement[]
// })
const categories = computed(() => {
  return store.globalData?.en.categories
})

defineProps<{
  portfolios?: PortfolioElement[]
}>()
</script>

<template>
  <div cls="portfolio">
    <div class="container">
      <div cls="portfolio__wrap">
        <r-title title="Our works">
          <template #addons>
            <portfolio-filters :categories="categories" cls="portfolio__filter" />
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
            :portfolio="portfolio"
            cls="portfolio__card"
          />
          <template #addons>
            <r-button> Show more </r-button>
          </template>
        </r-grid>
      </div>
    </div>
    <reuse-social-media cls="portfolio__social-media" />
  </div>
</template>

<style module lang="scss">
.portfolio {
  padding: 152px 0 160px;
  &__grid {
    padding-top: 104px;
  }
  &__card {
    &:nth-child(3n-1) {
      margin-top: -104px;
    }
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 104px;
    padding-bottom: 80px;
  }
  &__mob-filter {
    display: none;
  }
  &__social-media {
    padding: 104px 0 0;
  }
}
@include tablet {
  .portfolio {
    padding: 72px 0 88px;
    &__wrap {
      gap: 64px;
      padding-bottom: 56px;
    }
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
    &__social-media {
      padding: 72px 0 0;
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
      margin: 88px -24px 32px;
    }
    &__wrap {
      gap: 0;
    }
  }
}
@include mobile {
  .portfolio {
    &__mob-filter {
      margin: 88px -16px 32px;
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
