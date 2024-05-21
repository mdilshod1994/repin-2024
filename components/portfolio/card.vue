<script setup lang="ts">
import Player from "@vimeo/player"
import gsap from "gsap"

import type { PortfolioElement } from "~/types/portfolio"

const props = defineProps<{
  portfolio: PortfolioElement
}>()
const videowrap = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!videowrap.value) return
  if (props.portfolio.anons_vimeo) {
    new Player(videowrap.value, {
      url: props.portfolio.anons_vimeo,
      autoplay: true,
      background: true,
      loop: true,
    })
  }
})

const beforeEnter = (el) => {
  gsap.from(el, {
    duration: 0.5,
    opacity: 0,
    scale: 0.7,
  })
}
const enter = (el) => {
  gsap.to(el, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
  })
}
const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <transition appear name="t-card" @before-enter="beforeEnter" @enter="enter">
    <nuxt-link
      v-show="portfolio"
      :to="`/portfolio/${'all'}/${portfolio.slug}`"
      :cls="{ card: true, '-video': portfolio.anons_vimeo }"
      class="p-card"
      @mouseover="setCursorType('link')"
      @mouseleave="setCursorType('')"
    >
      <div cls="card__img">
        <r-gradient-border cls="card__gradient-border" />
        <img :src="portfolio.cover" alt="" />
        <div v-if="portfolio.anons_vimeo" ref="videowrap" />
      </div>
      <div cls="card__content">
        <div cls="card__top">
          <div cls="card__title">{{ portfolio.title }}</div>
          <r-round-button cls="card__btn" size="small">
            <svgo-arrow-right />
          </r-round-button>
        </div>
        <div cls="card__desc">
          {{ portfolio.description }}
        </div>
      </div>
    </nuxt-link>
  </transition>
</template>

<style module lang="scss">
.card-wrap {
  width: 100%;
  height: 100%;
  position: relative !important;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__img {
    position: relative;
    padding-bottom: 123.1%;
    height: 0;
    border-radius: 24px;
    overflow: hidden;
    img,
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: transform calc(1s * 1.9) cubic-bezier(0.19, 1, 0.22, 1);
    }
    iframe {
      opacity: 0;
      visibility: hidden;
    }
  }
  &__gradient-border {
    opacity: 0;
    transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  &__title {
    @include desctop-H5-ram;
    text-decoration: underline transparent;
    transition: text-decoration 0.3s ease-in-out;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  &__desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  &.-video {
    &:hover {
      .card {
        &__img {
          img {
            opacity: 0;
            transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
          }
          iframe {
            opacity: 1;
            transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
            visibility: visible;
          }
        }
      }
    }
  }
  &:not(.-video) {
    &:hover {
      .card {
        &__img {
          img {
            transform: scale(1.09);
          }
        }
      }
    }
  }
  &:hover {
    .card {
      &__btn {
        &:global(.round-button) {
          background: var(--Black);
        }
        svg {
          color: var(--White);
        }
      }
      &__title {
        text-decoration-color: var(--Black);
      }
    }
  }
}
@include tablet {
  .card {
    gap: 12px;

    &__title {
      @include mob-h4-22-ram;
    }
    &__gradient-border {
      display: none;
    }
    &__img {
      pointer-events: none;
    }
  }
}
@include tablet-small {
  .card {
    &__img {
      border-radius: 16px;
      img {
        border-radius: 16px;
      }
    }
  }
}
@include mobile {
  .card {
    gap: clamp(8px, 2vw, 16px);

    &__desc {
      height: 40px;
    }
    &__title {
      // @include mob-body-14-ram;
      font-size: clamp(14px, 4vw, 24px);
    }
    &__btn {
      width: 24px !important;
      height: 24px !important;
      svg {
        font-size: 10px !important;
      }
    }
  }
}
</style>
