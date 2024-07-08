<script setup lang="ts">
import type { Blog } from "~/types/blog"

defineProps<{
  title: string
  pretitle: string
  linkText: string
  blogs?: Blog[]
}>()
</script>

<template>
  <div v-if="blogs" cls="stories">
    <r-title :pretitle="pretitle">
      <template #title> <div v-html="title" /></template>
      <template #addons>
        <nuxt-link to="/blog" class="underline-link" cls="stories__link">
          {{ linkText }}
        </nuxt-link>
      </template>
    </r-title>
    <lazy-delay-hydration>
      <lazy-blog-list>
        <blog-item v-for="blog in blogs" :blog="blog" />
      </lazy-blog-list>
    </lazy-delay-hydration>
    <r-button cls="stories__btn" to="/blog"> See all articles </r-button>
  </div>
</template>

<style module lang="scss">
.stories {
  display: flex;
  flex-direction: column;
  gap: 64px;
  &__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    &-content {
      max-width: 519px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-title {
      font-family: "Ramillas Trial";
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: -0.96px;
      text-decoration: underline transparent;
      transition: text-decoration 0.3s ease-in-out;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    &-desc {
      max-width: 421px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    &-link {
      display: flex;
      gap: 6px;
    }
    &-text {
      padding: 6px 16px;
      border-radius: 48px;
      background: #f5f5f5;
      white-space: nowrap;
      display: flex;
      align-items: center;
    }
    &:hover {
      :global(.hover-border) {
        &::after {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }
      :global(.round-button) {
        background: var(--Black);
        svg path {
          stroke: #fff;
        }
      }
      .stories {
        &__card {
          &-title {
            text-decoration-color: var(--Black);
          }
        }
        &__gradient-border {
          opacity: 1;
        }
        &__img {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  &__gradient-border {
    opacity: 0;
    transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
  }
  &__img {
    max-width: 519px;
    height: 336px;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      transition: transform calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
      height: 100%;
    }
  }
  &__btn {
    display: none;
  }
}

@include tablet {
  .stories {
    gap: 48px;
    &__img {
      max-width: 408px;
      height: 272px;
      pointer-events: none;
    }
    &__gradient-border {
      display: block;
    }
    &__card {
      &-content {
        max-width: 380px;
        gap: 32px;
      }
      &-title {
        @include mob-h4-22-ram;
      }
    }
  }
}
@include tablet-small {
  .stories {
    &__card {
      &-content {
        gap: 24px;
      }
    }
    &__img {
      max-width: 297px;
      height: 198px;
      min-width: 160px;
    }
  }
}
@include mobile {
  .stories {
    &__link {
      display: none;
    }
    &__card {
      gap: 16px;
      flex-wrap: wrap-reverse;
      &-content {
        max-width: 100%;
        min-width: 300px;
        flex-basis: 0;
        flex-grow: 1;
      }
      &-title {
        -webkit-line-clamp: 3;
      }
      &-desc {
        -webkit-line-clamp: 2;
      }
    }
    &__img {
      border-radius: 16px;
      flex-basis: 0;
      flex-grow: 1;
      min-width: 297px;
      max-width: 430px;
      height: 228px;
      img {
        border-radius: 16px;
      }
    }
    &__btn {
      display: flex;
      align-self: center;
    }
  }
}
</style>
