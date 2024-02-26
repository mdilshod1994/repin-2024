<script setup lang="ts">
// пока сервак не готов
const temporaryText = ref(
  "We build cloud-based web and mobile apps for existing products and startups. Using AI technologies, we aim to quickly turn your idea into a successful solution.",
)
</script>

<template>
  <div cls="home">
    <!-- BANNER -->
    <div class="container">
      <div cls="home__top">
        <r-banner :description="temporaryText" scroll-to="test">
          <template #title>
            <div cls="title" class="desktop-only">
              <span> Your partner </span><br />
              in the digital world
            </div>
            <div cls="title" class="tablet-mobile-only">
              Your partner <br />
              <span> in the digital world </span>
            </div>
          </template>
          <template #top-right>
            <r-round-button size="large">
              <svgo-user-group />
            </r-round-button>
          </template>
          <template #description-link>
            <nuxt-link to="/portfolio"> More about us </nuxt-link>
          </template>
          <template #bottom-left>
            <div cls="home__banner">
              <div cls="home__banner-text">Digital products from scratch</div>
              <div cls="home__banner-text">Go-to-market strategy and consulting</div>
            </div>
          </template>
        </r-banner>
      </div>
    </div>
    <!-- VIDEO -->
    <r-video />
    <!-- OUR WORKS -->
    <div class="container">
      <div cls="home__portfolio">
        <home-portfolio />
      </div>
    </div>
    <!-- CONSULTING -->
    <div cls="home__consulting">
      <home-consulting />
    </div>
    <!-- OUR CLIENTS -->
    <div cls="home__clients">
      <home-our-clients />
    </div>
    <!-- STORIES & USER CASES -->
    <div class="container">
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
    display: flex;
    gap: 88px;
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
  }
  &__stories {
    padding: 104px 0 160px;
  }
}
.title {
  max-width: 579px;
}

@include tablet {
  .home {
    padding-top: 64px;
    &__portfolio {
      padding: 80px 0;
      gap: 64px;
    }
    &__consulting {
      padding: 16px 0;
    }
    &__clients {
      padding: 56px 0;
    }
    &__stories {
      padding: 80px 0 120px;
    }
  }

  .title {
    max-width: 304px;
  }
}
</style>
