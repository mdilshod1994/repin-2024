<script setup lang="ts">
defineProps<{
  // скролл на ID секции
  scrollTo?: string
  // заголовок баннера в начале страницы
  // поумолчанию стоит desktop-H1
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div cls="banner">
    <div cls="banner__top">
      <div cls="banner__left">
        <div v-if="title || $slots.title" cls="banner__title">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div cls="banner__right">
        <div cls="banner__desc">
          <slot />
          <div v-if="$slots['description-link']" cls="banner__desc-link" class="underline-link">
            <slot name="description-link" />
          </div>
        </div>
        <!-- тут будет дом врапперы -->
      </div>
    </div>
    <div v-if="scrollTo || $slots['bottom-left']" cls="banner__bottom">
      <div class="line" />
      <div cls="banner__bottom-wrap">
        <slot name="bottom-left" />
        <a v-if="scrollTo" :href="`#${scrollTo}`" cls="banner__scroll-to"
          >Scroll down<svgo-arrow-down filled
        /></a>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.banner {
  display: flex;
  flex-direction: column;
  gap: 128px;
  &__top {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
  &__left {
    max-width: 729px;
  }
  &__right {
    padding-top: 16px;
    max-width: 411px;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__title {
    @include desctop-H1;
    span {
      font-family: "Ramillas Trial";
      font-style: italic;
    }
  }
  &__scroll-to {
    @include desctop-caption-17;
    display: flex;
    padding: 8px 12px 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 32px;
    border: 1px solid #b6a2e0;
    svg {
      font-size: 16px;
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

@include tablet {
  .banner {
    gap: 88px;
    &__title {
      @include mob-H1;
      span {
        @include mob-H1-ram;
        font-style: italic;
      }
    }
    &__right {
      padding-top: 8px;
      gap: 24px;
      max-width: 301px;
    }
    &__desc {
      gap: 16px;
    }
    &__bottom {
      gap: 12px;
    }
    &__scroll-to {
      @include mob-body-14;
    }
  }
}
</style>
