<script setup lang="ts"></script>

<template>
  <div cls="case-study">
    <div class="container">
      <div cls="case-study__banner">
        <nuxt-link to="" cls="case-study__link"> www.macurtin.ru </nuxt-link>
        <div cls="case-study__banner-wrap">
          <r-banner title="Scandinavian Airlines Nordic ">
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
        </div>
      </div>
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
      <div>before after</div>
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
    <div cls="case-study__slider">
      <r-slider />
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
    <div cls="case-study__square">
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
    <r-grid :desktop-column="2" :tablet-column="2" cls="case-study__grid">
      <div cls="case-study__grid-cart" />
      <div cls="case-study__grid-cart" />
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
    <div cls="case-study__unknow">
      <div cls="case-study__unknow-inner" />
    </div>
    <div class="container">
      <div cls="case-study__expirience">
        <div cls="case-study__expirience-content">
          <div cls="case-study__expirience-top">
            <div cls="case-study__expirience-title">Good organization of work, excellent</div>
            <div cls="case-study__expirience-text">
              "Good organization of work, excellent communication at every stage, from initiation
              and data collection, through execution and editing, and ending with the delivery of
              the finished result. Deep immersion in the tasks and goals of the project, resulted in
              an excellent result."
            </div>
          </div>
          <r-author name="Ivan Repin" profession="Art Direction" />
        </div>
        <div cls="case-study__expirience-img">
          <img
            src="https://i.vimeocdn.com/video/573150739-2be38bf1aaf4b5e60086ab76807d336b1f7d04dc31d85178b2db97434ed05754-d?f=webp"
            alt=""
          />
        </div>
      </div>
      <div cls="case-study__authors">
        <div class="line" />
        <div cls="case-study__authors-wrap">
          <div cls="case-study__authors-text">The project was made by</div>
          <r-grid
            :desktop-column="2"
            :tablet-column="2"
            :desktop-gaps="[40, 46]"
            :tablet-gaps="[24, 62]"
            :mobile-gaps="[24, 15]"
          >
            <r-author v-for="a in 6" name="Ivan Repin" profession="Art Direction" />
          </r-grid>
        </div>
      </div>
      <div cls="case-study__projects">
        <r-title pretitle="Our projects" title="Next projects" flex-start />
        <r-grid :mobile-column="1" :mobile-gaps="[40]">
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
  }
  &__wrap {
    padding: 104px 0;
  }
  &__before-after {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
    div {
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 16/9;
      height: 100%;
      @include desctop-H1;
    }
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
    &-cart {
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
    aspect-ratio: 16/9;
    margin: 0 auto;
    &-inner {
      background: rgba(0, 0, 0, 0.3);
      height: 100%;
      width: 100%;
    }
  }
  &__expirience {
    padding: 104px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    &-content {
      display: flex;
      flex-direction: column;
      gap: 64px;
      max-width: 411px;
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &-title {
      @include desctop-H3;
    }

    &-img {
      border-radius: 24px;
      height: 484px;
      width: 519px;
      flex-shrink: 0;
      background: rgba(0, 0, 0, 0.3);
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
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
}
</style>
