<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  img: string
  link: string
  textLink: string
}>()
</script>

<template>
  <div cls="start" class="dark-background" :style="`background: url(${img});`">
    <div cls="start__content">
      <div cls="start__title" v-html="title" />
      <div cls="start__desc">
        {{ desc }}
      </div>
    </div>
    <r-button v-if="link" cls="start__btn" bg-color="white"> {{ textLink }} </r-button>
  </div>
</template>

<style lang="scss" module>
.start {
  display: flex;
  padding: 144px 96px;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  border-radius: 32px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    color: var(--White);
    align-items: center;
  }
  &__title {
    @include desctop-H2;
    span {
      @include desctop-H2-ram;
      font-style: italic;
    }
  }
  &__desc {
    max-width: 644px;
  }
}
@include desktop-medium {
  .start {
    padding: 96px;
  }
}
@include tablet {
  .start {
    padding: 72px 96px;
    gap: 32px;
    &__content {
      gap: 16px;
    }
    &__title {
      @include mob-H1;
      span {
        @include mob-H1-ram;
        font-style: italic;
      }
    }
  }
}
@include mobile {
  .start {
    padding: 80px 40px;
    &__content {
      gap: 32px;
    }
    &__title {
      @include mob-H2;
      span {
        @include mob-H2-ram;
        font-style: italic;
      }
    }
  }
}
</style>
