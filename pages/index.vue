<script setup lang="ts">
const store = useGlobalData()

const home = computed(() => {
  return store.home
})

onMounted(async () => {
  await store.getMainPageInfo()
})
</script>

<template>
  <div v-if="home" cls="home">
    <div class="container">
      <div cls="home__top">
        <home-banner :banner="home.page" />
      </div>
    </div>
    <div v-if="home.page.promo_video_short || home.page.promo_video_long" id="video">
      <r-video :video="{ short: home.page.promo_video_short, long: home.page.promo_video_long }" />
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
      <home-our-clients />
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
    &__top {
      padding-bottom: 24px;
    }
    &__clients {
      padding: 56px 0;
    }
  }
}
</style>
