<script setup lang="ts">
import type { reUseBlock1 } from "~/types/blockTypes"

defineProps<{
  info?: reUseBlock1
  feedbackDesc?: string
}>()
</script>

<template>
  <div :cls="{ expirience: true, '-feedback': feedbackDesc }">
    <div cls="expirience__content">
      <div cls="expirience__top">
        <div v-if="info?.title" cls="expirience__title" v-html="info.title" />
        <div v-if="info?.description" cls="expirience__text">
          {{ info.description }}
        </div>
        <div
          v-if="feedbackDesc"
          :cls="{ expirience__text: true, '-feedback': feedbackDesc }"
          v-html="feedbackDesc"
        />
      </div>
      <div v-if="info?.items" cls="expirience__ceo">
        <r-author
          v-for="(a, idx) in info.items"
          :key="idx"
          :name="a.name"
          :profession="a.status"
          :avatar="a.photo"
        />
      </div>
      <div v-if="!info?.items">
        <slot name="author" />
      </div>
    </div>
    <div v-if="info?.img" cls="expirience__img">
      <img :src="info.img" alt="" />
    </div>
  </div>
</template>

<style lang="scss" module>
.expirience {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  &__ceo {
    display: flex;
    gap: 16px;
  }
  &.-feedback {
    margin-left: 50%;
  }
  &__text {
    &.-feedback {
      p {
        &:nth-child(1) {
          margin-bottom: 24px;
          @include desctop-H3;
          span {
            @include desctop-H3-ram;
            font-style: italic;
          }
        }
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  &__top {
    display: flex;
    flex-direction: column;
    max-width: 411px;
    gap: 24px;
  }
  &__title {
    @include desctop-H3;
    span {
      @include desctop-H3-ram;
      font-style: italic;
    }
  }

  &__img {
    border-radius: 24px;
    height: 484px;
    width: 519px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
}
@include tablet {
  .expirience {
    flex-wrap: wrap;
    &__content {
      gap: 32px;
    }
    &__top {
      gap: 16px;
    }
    &__title {
      @include mob-H2;
      span {
        @include mob-H2-ram;
        font-style: italic;
      }
    }
    &__text {
      &.-feedback {
        p {
          &:nth-child(1) {
            margin-bottom: 16px;
            @include mob-H2;
            span {
              @include mob-H2-ram;
            }
          }
        }
      }
    }
    &__img {
      width: 340px;
      height: 318px;
    }
  }
}
@include mobile {
  .expirience {
    &__content {
      max-width: 100%;
    }
    &.-feedback {
      margin-left: 0;
    }
    &__img {
      display: none;
    }
    &__title {
      @include desctop-H5;
      span {
        @include mob-H5-ram;
        font-style: italic;
      }
    }
    &__text {
      &.-feedback {
        p {
          &:nth-child(1) {
            @include desctop-H5;
            span {
              @include mob-H5-ram;
            }
          }
        }
      }
    }
    &__ceo {
      flex-wrap: wrap;
    }
  }
}
</style>
