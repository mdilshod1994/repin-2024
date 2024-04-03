<script setup lang="ts"></script>

<template>
  <div cls="case-study">
    <div class="container">
      <r-grid
        desktop-column="1"
        tablet-column="1"
        mobile-column="1"
        :desktop-gaps="[16]"
        :tablet-gaps="[16]"
        :mobile-gaps="[24]"
        cls="case-study__banner"
      >
        <nuxt-link to="" cls="case-study__link"> www.macurtin.ru </nuxt-link>
        <r-banner mobile-bottom-left>
          <template #title>
            <div cls="case-study__banner-title">Scandinavian Airlines Nordic</div>
          </template>
          <div class="texts -column">
            <div class="text">
              Design and production of curtains and accessories for home and office. Moscow and
              Moscow region.
            </div>
            <div class="text">
              The client turned to the Studio for a complete repackaging of the brand. Previously,
              the company was called "Isabelle". We have developed a new naming, a website with a
              catalog of curtains and accessories, and the main elements of corporate identity.
            </div>
          </div>
          <template #bottom-left>
            <div class="tabs">
              <div v-for="t in 6" class="tab">Website</div>
            </div>
          </template>
        </r-banner>
      </r-grid>
    </div>
    <div cls="case-study__video">
      <r-video />
    </div>
    <div class="container">
      <div cls="case-study__wrap">
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
    <div cls="case-study__before-after">
      <r-before-after />
    </div>
    <div class="container">
      <div cls="case-study__wrap">
        <r-title pretitle="About" align-position="start">
          <template #addons>
            <div cls="case-study__desc">
              Агентство Ивана Репина — это команда экспертов, менеджеров, дизайнеров и
              разработчиков, влюбленных в digital и современные IT-решения для бизнеса. Агентство
              Ивана Репина — это команда экспертов, менеджероd
            </div>
          </template>
        </r-title>
      </div>
    </div>
    <div cls="case-study__slider" data-cursor="appear" class="dark-background">
      <r-slider pagination style-numbers>
        <template #slides>
          <div v-for="s in 5" cls="case-study__slide">
            <img
              src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg"
              alt=""
            />
          </div>
        </template>
      </r-slider>
      <r-cursor-follow bg-color="white" />
    </div>
    <div class="container">
      <div cls="case-study__wrap">
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
    </div>
    <div cls="case-study__square" class="dark-background">
      <div cls="case-study__square-wrap" />
    </div>
    <div class="container">
      <div cls="case-study__wrap">
        <div cls="case-study__texts">
          <div cls="case-study__texts-title">
            Агентство Ивана Репина — это команда экспертов, менеджеров, дизайнеров и разработчиков,
            влюбленных в digital и современные IT-решения
          </div>
          <div cls="case-study__texts-text">
            For 5 years we have completed 200 projects and are well versed in different business
            models. Our experience goes far beyond “just making a website”, which is why we are
            launching a business accelerator.
          </div>
        </div>
      </div>
    </div>
    <r-grid desktop-column="2" tablet-column="2" cls="case-study__grid">
      <div cls="case-study__grid-card" />
      <div cls="case-study__grid-card" />
    </r-grid>
    <div class="container">
      <div cls="case-study__wrap">
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
    <div cls="case-study__unknow" class="dark-background">
      <div cls="case-study__unknow-inner" />
    </div>
    <div class="container">
      <div cls="case-study__expirience">
        <reuse-expirience />
      </div>
      <div cls="case-study__authors">
        <div class="line" />
        <div cls="case-study__authors-wrap">
          <div cls="case-study__authors-text">The project was made by</div>
          <div cls="case-study__authors-block">
            <r-grid
              desktop-column="2"
              tablet-column="2"
              :desktop-gaps="[40, 46]"
              :tablet-gaps="[24, 62]"
              :mobile-gaps="[24, 15]"
            >
              <r-author v-for="a in 6" name="Ivan Repin" profession="Art Direction" />
            </r-grid>
          </div>
        </div>
      </div>
      <div cls="case-study__projects">
        <r-title pretitle="Our projects" title="Next projects" flex-start />
        <r-grid mobile-column="1" :mobile-gaps="[40]" button>
          <portfolio-card v-for="p in 3" cls="case-study__project" />
        </r-grid>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.case-study {
  padding-top: 152px;
  &__banner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 8px;
    &-title {
      max-width: 730px;
    }
  }
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
    max-width: 1920px;
    padding: 24px;
    margin: 0 auto;
    &-wrap {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      height: 0;
      padding-bottom: 92%;
      border-radius: 24px;
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
    max-width: 1920px;
    margin: 0 auto;
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
    display: flex;
    flex-direction: column;
    gap: 64px;
    padding: 72px 0 88px;
  }
  &__project {
    &:nth-child(2) {
      margin-top: 104px;
    }
    &:last-child {
      margin-top: 208px;
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
  .case-study {
    padding-top: 72px;
  }
}
@include tablet {
  .case-study {
    padding-top: 56px;
    &__banner {
      &-title {
        max-width: 356px;
      }
    }
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
      padding: 16px;
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
  .case-study {
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
      gap: 48px;
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
