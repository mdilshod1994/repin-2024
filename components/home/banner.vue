<script setup lang="ts">
import type { Page } from "~/types/home"

defineProps<{
  banner: Page
}>()

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <r-banner :scroll-to="banner.scroll_down" bottom-line cls="banner">
    <div cls="banner__top">
      <r-round-button size="large" pointer-events>
        <svgo-user-group />
      </r-round-button>
      <div cls="banner__bottom">
        <div cls="banner__desc">
          {{ banner.promo_title_about }}
        </div>
        <nuxt-link
          to="/about"
          class="underline-link"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          {{ banner.promo_about_btn }}
        </nuxt-link>
      </div>
    </div>
    <template #title>
      <div cls="title" v-html="banner.promo_title" />
    </template>
    <template #bottom-left>
      <div cls="banner__texts">
        <div cls="banner__text">{{ banner.promo_bottom_line_1 }}</div>
        <div cls="banner__text">{{ banner.promo_bottom_line_2 }}</div>
      </div>
    </template>
  </r-banner>
</template>

<style lang="scss" module>
.banner {
  &__texts {
    display: flex;
    gap: 88px;
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  &__desc {
    @include desctop-body-22;
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

@include tablet {
  .banner {
    &__top {
      gap: 24px;
    }
    &__desc {
      @include mob-body-14;
    }
    &__texts {
      flex-wrap: wrap;
      column-gap: 88px;
      row-gap: 16px;
    }
    &__bottom {
      gap: 16px;
    }
  }
}
@include tablet {
  .banner {
    &__top {
      flex-direction: row;
      gap: 72px;
    }
  }
}
</style>
