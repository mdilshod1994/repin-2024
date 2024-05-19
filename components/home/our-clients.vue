<script lang="ts" setup>
import type { Page } from "~/types/home"

const store = useGlobalData()

const reviews = computed(() => {
  return store.home?.page as Page
})
const { updateType } = useMousemove()
const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div v-if="reviews" cls="clients">
    <r-title :pretitle="reviews.reviews_subtitle" :title="reviews.reviews_title" />
    <r-carousel
      scroll-bar
      gap="56"
      tablet-gap="48"
      mob-gap="41"
      @mouseover="setCursorType('carousel')"
      @mouseleave="setCursorType('')"
    >
      <div v-for="review in reviews.reviews" cls="clients-card">
        <div cls="clients-card__logo">
          <img v-if="review.logo" :src="review.logo" alt="" />
        </div>
        <div cls="clients-card__content">
          <r-author :name="review.name" :profession="review.position" :avatar="review.photo" />
          <div cls="clients-card__text">
            {{ review.text }}
          </div>
        </div>
      </div>
    </r-carousel>
  </div>
</template>

<style module lang="scss">
.clients {
  display: flex;
  flex-direction: column;
  gap: 128px;
  &-card {
    max-width: 362px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    &__logo {
      height: 60px;
      svg {
        height: 100%;
        width: auto;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__title {
      @include desctop-H5-ram;
    }
  }
}
@include tablet {
  .clients {
    gap: 80px;
    &-card {
      gap: 32px;
      max-width: 256px;
      &__content {
        gap: 8px;
      }
      &__logo {
        height: 48px;
      }
      &__title {
        @include mob-sub-16;
      }
    }
  }
}
@include mobile {
  .clients {
    &-card {
      max-width: 228px;
    }
  }
}
</style>
