<script setup lang="ts">
import type { SocialMedia } from "~/types/contacts"
import { type Category } from "~/types/home"
import { type PortfolioElement } from "~/types/portfolio"

const props = defineProps<{
  portfolios: PortfolioElement[]
  categories: Category[]
  activeSlug?: string
  socialMedia?: SocialMedia
}>()
const firstPage = ref<number>(0)
const leftArrow = ref<HTMLElement | null>()
const rightArrow = ref<HTMLElement | null>()
const store = usePortfolio()

const showMore = async () => {
  const currentPage = store.currentPageNumber + 6
  const currentSlug = store.categoryPortfolio
  await store.getPortfolio(currentSlug, currentPage)
  window.sessionStorage.setItem("totalLoadedProjects", JSON.stringify(currentPage))
}

const hideBtn = computed(() => {
  if (!store.totalProjects) return
  return store.totalProjects > props.portfolios.length
})

const slug = defineModel<string>("slug")
const _getPortfolio = async (slug?: string) => {
  if (slug) {
    await store.getPortfolio(slug, 0)
  }
}
watch(slug, (newSlug) => {
  if (newSlug) {
    store.getPortfolio(newSlug, firstPage.value)
    window.sessionStorage.removeItem("totalLoadedProjects")
  }
})

onMounted(() => {
  const firstTab = document.querySelector(".tab")

  const obserber = new IntersectionObserver(
    (entries) => {
      if (!leftArrow.value) return
      leftArrow.value.style.display = entries[0].isIntersecting ? "none" : "flex"
    },
    {
      threshold: 0.8,
    },
  )
  if (!firstTab) return
  obserber.observe(firstTab)
  handleArrows()
})

const handleArrows = () => {
  const tabs = document.querySelectorAll(".tab")
  const obserber = new IntersectionObserver(
    (entries) => {
      if (!rightArrow.value) return
      rightArrow.value.style.display = entries[0].isIntersecting ? "none" : "flex"
    },
    {
      threshold: 0.8,
    },
  )
  const lastItem = tabs.length - 1
  obserber.observe(tabs[lastItem])
}
</script>

<template>
  <div cls="portfolio">
    <div class="container">
      <div cls="portfolio__wrap">
        <r-title cls="portfolio__wrap-addons" mobile-center>
          <template #title>
            <div cls="portfolio__wrap-title">Our works</div>
          </template>
          <template #addons>
            <portfolio-filters
              v-model:slug="slug"
              :active-slug="activeSlug"
              :categories="categories"
              cls="portfolio__filter"
            />
          </template>
          <template #title_addons> <div cls="portfolio__wrap-addons">(14)</div> </template>
        </r-title>
        <div cls="portfolio__mob-filter" @touchmove="handleArrows">
          <div ref="leftArrow" cls="portfolio__mob-filter-arrow -left">
            <svgo-arrow-right />
          </div>
          <div ref="rightArrow" cls="portfolio__mob-filter-arrow -right">
            <svgo-arrow-right />
          </div>
          <r-carousel gap="8" tablet-gap="8" mob-gap="8">
            <div
              :class="{ tab: true, '-active': activeSlug === 'all' }"
              @click="_getPortfolio('all')"
            >
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
            <r-button v-if="hideBtn" @click="showMore"> Show more </r-button>
          </template>
        </r-grid>
      </div>
    </div>
    <re-use-social-media
      v-if="socialMedia"
      cls="portfolio__social-media"
      :social-media="socialMedia"
    />
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
    &-title {
      color: var(--Black);
      font-size: 104px;
      font-style: normal;
      font-weight: 500;
      line-height: 112px;
      letter-spacing: -5.2px;
    }
    &-addons {
      @include desctop-caption-17;
      letter-spacing: normal;
    }
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
      &-addons {
        @include mob-body-14;
      }
      &-title {
        @include mob-H1;
      }
    }
  }
}
@include mobile {
  .portfolio {
    &__mob-filter {
      margin: 88px -16px 32px;
      position: relative;
      &-arrow {
        position: absolute;
        top: 0px;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4;
        &.-left {
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
