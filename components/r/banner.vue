<script setup lang="ts">
defineProps<{
  // скролл на ID секции
  scrollTo?: string
  // заголовок баннера в начале страницы
  // поумолчанию стоит desktop-H1
  title?: string
  subtitle?: string
  // текст напротив "title"
  description?: string
  // приходиться костылить с gap-ом, т.к. везде почти по разному
  gap?: string
}>()
</script>

<template>
  <div cls="banner" :style="`gap: ${gap}px`">
    <div cls="banner__top">
      <div cls="banner__left">
        <div v-if="title || $slots.title" cls="banner__title">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div :cls="{ banner__right: true, '-align-bottom': $slots['bottom-right'] }">
        <template v-if="$slots['top-right']">
          <slot name="top-right" />
        </template>
        <div v-if="description" cls="banner__desc">
          {{ description }}
          <div v-if="$slots['description-link']" cls="banner__desc-link">
            <slot name="description-link" />
          </div>
        </div>
        <template v-if="$slots['bottom-right']">
          <slot name="bottom-right" />
        </template>
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
  &__top {
    display: flex;
    justify-content: space-between;
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
    &-link {
      width: max-content;
      @include desctop-caption-17-med;
      border-bottom: 1.5px solid var(--Black);
    }
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
    gap: 8px;
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
</style>
