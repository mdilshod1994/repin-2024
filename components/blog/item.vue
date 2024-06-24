<script setup lang="ts">
import type { Blog } from "~/types/blog"

const localPath = useLocalePath()

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
defineProps<{
  blog: Blog
}>()
</script>

<template>
  <nuxt-link
    :to="localPath(`/blog/${blog.slug}`)"
    cls="card"
    @mouseover="setCursorType('link')"
    @mouseleave="setCursorType('')"
  >
    <div cls="card-content">
      <div cls="card-box">
        <div cls="card-title">
          {{ blog.title }}
        </div>
        <div cls="card-desc">
          {{ blog.description }}
        </div>
      </div>
      <div cls="card-link">
        <div v-if="blog.time" cls="card-text">{{ blog.time }}</div>
        <r-round-button size="small">
          <svgo-arrow-right />
        </r-round-button>
      </div>
    </div>
    <div cls="img">
      <img :src="blog.cover" alt="" />
    </div>
  </nuxt-link>
</template>

<style module lang="scss">
.card {
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
      svg {
        color: #fff;
      }
    }
    .card {
      &-title {
        text-decoration-color: var(--Black);
      }
    }
    .gradient-border {
      opacity: 1;
    }
    .img {
      img {
        transform: scale(1.1);
      }
    }
  }
}
.gradient-border {
  opacity: 0;
  transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
}
.img {
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
.btn {
  display: none;
}

@include tablet {
  .img {
    max-width: 408px;
    height: 272px;
    pointer-events: none;
  }
  .gradient-border {
    display: block;
  }
  .card {
    &-content {
      max-width: 380px;
      gap: 32px;
    }
    &-title {
      @include mob-h4-22-ram;
    }
  }
}
@include tablet-small {
  .card {
    &-content {
      gap: 24px;
    }
  }
  .img {
    max-width: 297px;
    height: 198px;
    min-width: 160px;
  }
}
@include mobile {
  .card {
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
  .img {
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
}
</style>
