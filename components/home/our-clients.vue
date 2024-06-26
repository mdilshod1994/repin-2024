<script lang="ts" setup>
import type { Review } from "~/types/home"

defineProps<{
  reviews: Review[]
  title: string
  subtitle: string
}>()
const { updateType } = useMousemove()
const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div v-if="reviews" cls="clients">
    <r-title :pretitle="subtitle" :title="title" />
    <r-carousel
      scroll-bar
      gap="56"
      tablet-gap="48"
      mob-gap="41"
      @mouseover="setCursorType('carousel')"
      @mouseleave="setCursorType('')"
    >
      <div v-for="review in reviews" cls="clients-card">
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
      max-height: 60px;
      img {
        height: 100%;
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
      &__title {
        @include mob-sub-16;
      }
      &__logo {
        max-height: 48px;
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
