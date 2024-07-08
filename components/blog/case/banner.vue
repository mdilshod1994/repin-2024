<script setup lang="ts">
const store = usePreloaderTrigger()
defineProps<{
  date?: string
  min?: string
  title?: string
  tags?: string[]
  desc?: string
  subdesc?: string
}>()
onMounted(() => {
  store.handlePreloader(true)
})
</script>

<template>
  <r-grid
    desktop-column="1"
    cls="banner"
    :desktop-gaps="[13]"
    :tablet-gaps="[16]"
    :mobile-gaps="[16]"
  >
    <div cls="banner__top">
      <r-round-button size="small"><svgo-info /></r-round-button>
      <p v-if="date">{{ date }}</p>
      <span />
      <p v-if="min">{{ min }}</p>
    </div>
    <lazy-r-banner
      vertical-gap="32"
      vertical-tablet-small-gap="72"
      vertical-mobile-gap="32"
      mobile-bottom-left
      mob-gap="24"
    >
      <template v-if="title" #title>
        <div cls="banner__title">
          {{ title }}
        </div>
      </template>
      <div class="texts -column">
        <div v-if="desc" class="text -bold">
          {{ desc }}
        </div>
        <div v-if="subdesc" class="text" cls="banner__text">
          {{ subdesc }}
        </div>
      </div>
      <template v-if="tags" #bottom-left>
        <div class="tabs">
          <div v-for="t in tags" class="tab">{{ t }}</div>
        </div>
      </template>
    </lazy-r-banner>
  </r-grid>
</template>

<style module lang="scss">
.banner {
  &__top {
    display: flex;
    align-items: center;
    gap: 8px;
    @include desctop-caps;
  }
}
@include desktop-medium {
  .banner {
    &__title {
      // max-width: 610px;
    }
  }
}
@include tablet {
  .banner {
    &__title {
      max-width: 428px;
    }
  }
}
@include mobile {
  .banner {
    &__text {
      @include mob-body-16;
    }
  }
}
</style>
