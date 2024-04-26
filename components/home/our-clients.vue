<script lang="ts" setup>
import { type En } from "~/types/globaldata"

defineProps<{
  en?: En
}>()
</script>

<template>
  <div cls="clients">
    <r-title :pretitle="en?.page.reviews_subtitle" :title="en?.page.reviews_title" />
    <r-cursor-follow cursor-type="carousel">
      <r-carousel scroll-bar gap="48">
        <div v-for="review in en?.page.reviews" cls="clients-card">
          <div cls="clients-card__logo">
            <img :src="review.logo" alt="" />
          </div>
          <div cls="clients-card__content">
            <div cls="clients-card__title">{{ review.name }}</div>
            <div cls="clients-card__text">
              {{ review.text }}
            </div>
          </div>
        </div>
      </r-carousel>
    </r-cursor-follow>
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
      gap: 16px;
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
