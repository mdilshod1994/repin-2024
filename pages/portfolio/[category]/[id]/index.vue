<!--
TODO: разделить на компоненты
-->

<script setup lang="ts">
import type { PortfolioElement } from "~/types/portfolio"

const store = usePortfolio()
const route = useRoute()
const openLightbox = ref(false)
const portfolio = ref<HTMLElement | null>(null)
const marginTop = ref<number>(104)

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

  function setScrollVar() {
    const htmlElement = document.documentElement
    if (!portfolio.value) return
    const topPosition = portfolio.value?.offsetTop
    const scrolledFromTop = htmlElement.scrollTop
    const topPerc = portfolio.value.offsetHeight - window.screen.height
    const topPercscr = htmlElement.scrollTop - portfolio.value.offsetTop
    const per = (topPercscr / topPerc) * 100
    if (topPosition <= scrolledFromTop && per <= 100) {
      marginTop.value = 104 - (104 * Math.ceil(per)) / 100
    }
  }
  window.addEventListener("resize", setScrollVar)
  window.addEventListener("scroll", setScrollVar)
  window.addEventListener("DOMContentLoaded", setScrollVar)
})
</script>

<template>
  <div cls="case">
    <div class="container">
      <portfolio-case-banner />
    </div>
    <div cls="case__video">
      <r-video />
    </div>
    <div class="container">
      <div cls="case__wrap">
        <r-title title="Project Overview" align-position="start">
          <template #addons>
            <div class="texts">
              <div class="text">
                The client turned to the Studio for a complete repackaging of the brand. Previously,
                the company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.
              </div>
            </div>
          </template>
        </r-title>
      </div>
    </div>
    <div cls="case__before-after">
      <r-before-after />
    </div>
    <div class="container">
      <div cls="case__wrap">
        <r-title pretitle="About" align-position="start">
          <template #addons>
            <div cls="case__desc">
              Агентство Ивана Репина — это команда экспертов, менеджеров, дизайнеров и
              разработчиков, влюбленных в digital и современные IT-решения для бизнеса. Агентство
              Ивана Репина — это команда экспертов, менеджероd
            </div>
          </template>
        </r-title>
      </div>
      <div cls="case__slider" data-cursor="appear" class="dark-background">
        <r-slider pagination style-numbers>
          <template #slides>
            <div v-for="s in 5" :key="s" cls="case__slide">
              <img
                src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg"
                alt=""
              />
            </div>
          </template>
        </r-slider>
      </div>
      <div cls="case__wrap">
        <r-title pretitle="About" align-position="start">
          <template #addons>
            <div class="texts">
              <div class="text">
                The client turned to the Studio for a complete repackaging of the brand. Previously,
                the company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.The
                client turned to the Studio for a complete repackaging of the brand. Previously, the
                company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.
              </div>
              <div class="text">
                The client turned to the Studio for a complete repackaging of the brand. Previously,
                the company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.
              </div>
            </div>
          </template>
        </r-title>
      </div>
      <div cls="case__square" class="dark-background">
        <div cls="case__square-wrap">
          <div cls="case__square-inner">
            <r-lightbox v-model:open="openLightbox" white-bg>
              <img
                src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/grecale/my22/mna/LIPMAN_JL16928_V3.jpg?$1920x2000$&fit=constrain"
                alt=""
                @click="openLightbox = !openLightbox"
              />
            </r-lightbox>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div cls="case__wrap">
        <div cls="case__texts">
          <div cls="case__texts-title">
            Агентство Ивана Репина — это команда экспертов, менеджеров, дизайнеров и разработчиков,
            влюбленных в digital и современные IT-решения
          </div>
          <div cls="case__texts-text">
            For 5 years we have completed 200 projects and are well versed in different business
            models. Our experience goes far beyond “just making a website”, which is why we are
            launching a business accelerator.
          </div>
        </div>
      </div>
      <r-grid desktop-column="2" tablet-column="2" cls="case__grid">
        <div cls="case__grid-card" />
        <div cls="case__grid-card" />
      </r-grid>
    </div>

    <div class="container">
      <div cls="case__wrap">
        <r-title title="Project Overview" align-position="start">
          <template #addons>
            <div class="texts">
              <div class="text">
                The client turned to the Studio for a complete repackaging of the brand. Previously,
                the company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.
              </div>
            </div>
          </template>
        </r-title>
      </div>
    </div>
    <div cls="case__unknow" class="dark-background">
      <div cls="case__unknow-inner" />
    </div>
    <div class="container">
      <div cls="case__expirience">
        <reuse-expirience />
      </div>
      <div cls="case__authors">
        <div class="line" />
        <div cls="case__authors-wrap">
          <div cls="case__authors-text">The project was made by</div>
          <div cls="case__authors-block">
            <r-grid
              desktop-column="2"
              tablet-column="2"
              :desktop-gaps="[40, 46]"
              :tablet-gaps="[24, 62]"
              :mobile-gaps="[24, 15]"
            >
              <r-author v-for="a in 6" :key="a" name="Ivan Repin" profession="Art Direction" />
            </r-grid>
          </div>
        </div>
      </div>
      <div v-if="portfolios" ref="portfolio" cls="case__projects">
        <div cls="case__projects-inner">
          <r-title pretitle="Our projects" title="Next projects" flex-start />
          <r-grid mobile-column="1" tablet-column="3" :mobile-gaps="[40]" button>
            <portfolio-card
              v-for="portfolio in portfolios"
              :key="portfolio.id"
              :portfolio="portfolio"
              cls="case__project"
            />
          </r-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.case {
  padding-top: 152px;
  &__wrap {
    padding: 104px 0;
  }
  &__before-after {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
  &__desc {
    @include desctop-H3;
  }
  &__square {
    padding: 24px 0;
    &-wrap {
      width: 100%;
      height: 0;
      padding-bottom: 84.212%;
      border-radius: 24px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  &__texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 32px;
    max-width: 894px;
    text-align: center;
    &-title {
      @include desctop-H3;
    }
    &-text {
      max-width: 458px;
    }
  }
  &__grid {
    padding: 24px;
    &-card {
      height: 0;
      padding-bottom: 108.23%;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 24px;
      &:last-child {
        margin-top: 160px;
      }
    }
  }
  &__unknow {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
    &-inner {
      background: rgba(0, 0, 0, 0.3);
      aspect-ratio: 16/9;
    }
  }
  &__expirience {
    padding: 104px 0;
  }
  &__authors {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
    &-wrap {
      display: flex;
      justify-content: space-between;
    }
    &-text {
      max-width: 136px;
    }
  }
  &__projects {
    padding: 72px 0 88px;
    height: 180svh;
    &-inner {
      position: sticky;
      top: 0px;
      display: flex;
      flex-direction: column;
      gap: 64px;
    }
  }
  &__project {
    &:nth-child(2) {
      margin-top: v-bind(setMarginFirstEl);
    }
    &:last-child {
      margin-top: v-bind(setMarginScndEl);
    }
  }
  &__slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@include desktop-medium {
  .case {
    padding-top: 72px;
  }
}
@include tablet {
  .case {
    padding-top: 56px;

    &__square {
      &-wrap {
        border-radius: 16px;
      }
    }
    &__texts {
      gap: 24px;
      &-title {
        @include mob-H3;
        max-width: 662px;
      }
      &-text {
        max-width: 404px;
      }
    }
    &__wrap {
      padding: 72px 0;
      :global(.texts) {
        max-width: 623px;
      }
    }
    &__authors {
      padding: 56px 0;
      &-wrap {
        flex-wrap: wrap;
        gap: 48px;
      }
      &-text {
        max-width: 104px;
      }
    }
    &__desc {
      @include mob-H3;
      max-width: 623px;
    }
    &__grid,
    &__square {
      padding: 16px 0;
    }
    &__grid {
      &-card {
        border-radius: 16px;
        &:last-child {
          margin-top: 104px;
        }
      }
    }
    &__expirience {
      padding: 72px 0;
    }
  }
}
@include mobile {
  .case {
    padding-top: 72px;
    &__expirience {
      padding: 72px 0 56px;
    }
    &__authors {
      &-block {
        margin: 0 -16px;
        overflow-x: auto;
        padding: 0 16px;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    &__grid {
      &-card {
        &:last-child {
          margin-top: 56px;
        }
      }
    }
    &__projects {
      height: auto;
    }
    &__project {
      &:last-child,
      &:nth-child(2) {
        margin-top: 0;
      }
    }
  }
}
</style>
