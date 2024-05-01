<!--
TODO: разделить на компоненты
-->

<script setup lang="ts">
const store = usePortfolioCase()
const { id } = useRoute().params

const portfolio = computed(() => {
  return store.portfolio
})

const openLightbox = ref(false)

onMounted(async () => {
  await store.getPortfolioCase(`${id}`)
})
</script>

<template>
  <div v-if="portfolio" cls="case">
    <div class="container">
      <portfolio-case-banner :banner="portfolio" />
    </div>
    <div cls="case__video">
      <r-video
        :short-video="portfolio.block_1.video_first"
        :long-video="portfolio.block_1.video_first_full"
      />
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
      <div cls="case__slider" class="dark-background">
        <portfolio-case-slider />
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
        <!-- <reuse-expirience /> -->
      </div>
      <portfolio-case-authors />
      <portfolio-case-next-portfolios />
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
    &__grid {
      &-card {
        &:last-child {
          margin-top: 56px;
        }
      }
    }
  }
}
</style>
