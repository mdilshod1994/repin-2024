<script setup lang="ts"></script>

<template>
  <div cls="home">
    <div class="container">
      <div cls="home__top">
        <!-- <r-banner v-if="en" :scroll-to="en.page.scroll_down" bottom-line cls="home__banner">
          <div cls="home__banner-top">
            <r-round-button size="large" pointer-events>
              <svgo-user-group />
            </r-round-button>
            <div cls="home__banner-bottom">
              <div cls="home__banner-desc">
                {{ en.page.promo_title_about }}
              </div>
              <nuxt-link to="/about" class="underline-link">
                {{ en.page.promo_about_btn }}
              </nuxt-link>
            </div>
          </div>
          <template #title>
            <div cls="title" v-html="en.page.promo_title" />
          </template>
          <template #bottom-left>
            <div cls="home__banner-texts">
              <div cls="home__banner-text">{{ en.page.promo_bottom_line_1 }}</div>
              <div cls="home__banner-text">{{ en.page.promo_bottom_line_2 }}</div>
            </div>
          </template>
        </r-banner> -->
      </div>
    </div>
    <div id="video">
      <r-video />
    </div>
    <div class="container">
      <div cls="home__portfolio">
        <home-portfolio />
      </div>
    </div>
    <!-- Скрыт временно -->
    <div v-if="false" cls="home__consulting">
      <home-consulting />
    </div>
    <div cls="home__clients">
      <!-- <home-our-clients :en="en" /> -->
    </div>
    <!-- Скрыт временно -->
    <div v-if="false" class="container">
      <div cls="home__stories">
        <home-stories />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.home {
  padding-top: 152px;
  &__top {
    padding-bottom: 8px;
  }
  &__banner {
    &-texts {
      display: flex;
      gap: 88px;
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
    &-desc {
      @include desctop-body-22;
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
  &__portfolio {
    padding: 104px 0;
  }
  &__consulting {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
  &__clients {
    padding: 88px 0;
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
  }
  &__stories {
    padding: 104px 0 160px;
  }
  &__lightbox {
    padding: 100px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
}
.title {
  max-width: 579px;
}

@include tablet {
  .home {
    padding-top: 80px;
    &__portfolio {
      padding: 72px 0;
    }
    &__consulting {
      padding: 16px 0;
    }
    &__clients {
      padding: 72px 0 56px;
    }
    &__stories {
      padding: 72px 0 88px;
    }
    &__banner {
      &-top {
        gap: 24px;
      }
      &-desc {
        @include mob-body-14;
      }
      &-texts {
        flex-wrap: wrap;
        column-gap: 88px;
        row-gap: 16px;
      }
      &-bottom {
        gap: 16px;
      }
    }
  }

  .title {
    max-width: 304px;
  }
}
@include tablet-small {
  .home {
    padding-top: 72px;
  }
}
@include mobile {
  .home {
    &__banner {
      &-top {
        flex-direction: row;
        gap: 72px;
      }
    }
    &__top {
      padding-bottom: 24px;
    }
    &__clients {
      padding: 56px 0;
    }
  }
}
</style>
