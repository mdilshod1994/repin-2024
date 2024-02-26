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
        <r-banner :description="temporaryText" gap="128" scroll-to="test">
          <template #title>
            <div cls="title">
              <span> Your partner </span><br />
              in the digital world
            </div>
          </template>
          <template #top-right>
            <r-round-button>
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
        <r-title pretitle="Portfolio" title="Our works">
          <template #addons>
            <portfolio-filters />
          </template>
        </r-title>
        <portfolio-grid />
      </div>
    </div>
    <!-- CONSULTING -->
    <div cls="home__consulting">
      <home-consulting />
    </div>
    <!-- OUR CLIENTS -->
    <!-- STORIES & USER CASES -->
    <div class="container">
      <div cls="home__clients">
        <home-our-clients />
      </div>
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
    display: flex;
    flex-direction: column;
    gap: 104px;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &-titles {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    &-title {
      color: var(--Black);
      @include desctop-H2;
      &.-small {
        @include desctop-H5-ram;
      }
    }
  }
  &__consulting {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
  &__clients {
    padding: 88px 0;
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
}
</style>
