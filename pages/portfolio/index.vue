<!-- 
todo:
show more function
slug by click change category
save categories global
to set total project 
hide button show more

-->
<script setup lang="ts">
import { type PortfolioElement } from "~/types/portfolio"

const store = useCategory()

const { locale } = useI18n()

useSeoMeta({
  title: () => "Repin Agency | Our works",
  ogTitle: () => "Repin Agency | Our works",
})

const portfolios = ref<PortfolioElement[]>([])

const initialPage = ref(0)

const totalPortfolios = ref(0)

const fetchPortfolios = async (category: string, page: number) => {
  const { data } = await useFetch(`/api/projects/${category}/${page}`)

  if (!data.value) return

  if (initialPage.value > 0) {
    portfolios.value.push(...data.value.en.portfolio)
  } else {
    portfolios.value = data.value.en.portfolio
    totalPortfolios.value = data.value.en.portfolio_count
  }
}

await fetchPortfolios(store.activeCategory, initialPage.value)

// const categories = computed(() => {
//   if (locale.value === "en") {
//     return _store.home?.en.categories
//   } else {
//     return _store.home?.ru.categories
//   }
// })

const activeSlug = computed(() => {
  return ""
})

const hideBtn = computed(() => {
  return false
})
// const slug = defineModel<string>("slug")
// const _getPortfolio = async (slug?: string) => {
//   if (slug) {
//     await store.getPortfolio(slug, 0)
//   }
// }

onMounted(async () => {
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
})
</script>

<template>
  <div v-if="portfolios" cls="portfolio">
    <div class="container">
      <div cls="portfolio__wrap">
        <r-title cls="portfolio__wrap-addons" mobile-center>
          <template #title>
            <div v-if="locale === 'en'" cls="portfolio__wrap-title">Our works</div>
            <div v-else cls="portfolio__wrap-title">Наши работы</div>
          </template>
          <template #addons>
            <!-- <portfolio-filters
                v-model:slug="slug"
                :active-slug="activeSlug"
                :categories="categories"
                cls="portfolio__filter"
              /> -->
          </template>
          <template #title_addons>
            <div cls="portfolio__wrap-addons">({{ totalPortfolios }})</div>
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
            <div :class="{ tab: true, '-active': activeSlug === 'all', first: true }">
              <span v-if="locale === 'en'">All</span>
              <span v-if="locale === 'en'">All</span>
              <span v-if="locale === 'ru'">Все</span>
              <span v-if="locale === 'ru'">Все</span>
            </div>
            <!-- <div
                v-for="(category, idx) in categories"
                :class="{
                  tab: true,
                  '-active': activeSlug === category.slug,
                  last: idx === categories.length - 1,
                }"
                @click="_getPortfolio(category.slug)"
              >
                <span>{{ category.name }}</span>
                <span>{{ category.name }}</span>
              </div> -->
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
            <r-button v-if="hideBtn"> Show more </r-button>
          </template>
        </r-grid>
      </div>
    </div>
    <!-- <re-use-social-media cls="portfolio__social-media" /> -->
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
        z-index: 1;
        &.-left {
          left: 0;
          display: none;
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
