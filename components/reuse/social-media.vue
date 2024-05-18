<script setup lang="ts">
import Player from "@vimeo/player"

import type { SocialMedia } from "~/types/contacts"

defineProps<{
  socialMedia: SocialMedia
}>()
onMounted(() => {
  document.querySelectorAll("#videowrap").forEach((el) => {
    const vv = new Player(el, {
      background: true,
      loop: true,
      muted: true,
      height: 410,
      playsinline: true,
    })
    vv.on("play", () => {
      const parent = el.parentElement
      if (!parent) return
      parent.style.width = `${el.clientWidth}px`
    })
  })
})

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div cls="carousel">
    <div class="container">
      <r-title :pretitle="socialMedia.subtitle" :title="socialMedia.title" flex-start />
    </div>
    <r-carousel gap="24" tablet-gap="20" mob-gap="16">
      <div
        v-for="soc in socialMedia.items"
        :cls="{ carousel__social: true, [`-${soc.rounding}`]: true }"
        class="hover-border"
      >
        <div cls="carousel__social-overlay" />
        <div
          id="videowrap"
          :data-vimeo-url="soc.video_vimeo"
          data-vimeo-defer
          cls="carousel__social-video"
        />
        <img :src="soc.img" alt="" cls="carousel__social-img" />
        <a
          :href="soc.link"
          cls="carousel__social-link"
          target="_blank"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          <div v-if="soc['web-service-name_icon']" cls="carousel__social-icon">
            <img :src="soc['web-service-name_icon']" alt="" />
          </div>
          <span> {{ soc["web-service"] }} </span>
        </a>
      </div>
    </r-carousel>
  </div>
</template>

<style module lang="scss">
.carousel {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 84px;
  &__social {
    width: 410px;
    height: 410px;
    border-radius: 24px;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    &-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    &.-hard {
      width: 302px;
      border-radius: 256px;
      img {
        border-radius: 256px;
      }
    }
    &-link {
      position: absolute;
      left: 50%;
      bottom: 24px;
      transform: translateX(-50%);
      height: 48px;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      z-index: 3;
      border-radius: 48px;
      border: 0.5px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.06);
      backdrop-filter: blur(18px);
      span {
        color: var(--White);
        @include desctop-caption-17-db;
      }
    }
    &-icon {
      display: flex;
      width: 24px;
      height: 24px;
      padding: 1px;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 24px;
        color: var(--White);
      }
    }
    &-video {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: max-content;
      z-index: 1;
    }
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 24px;
      transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
      iframe,
      video {
        transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
}
@include tablet {
  .carousel {
    gap: 64px;
    &__social {
      width: 342px;
      height: 342px;
      border-radius: 16px;
      &.-hard {
        width: 221px;
      }
      &-link {
        padding: 8px 12px;
        span {
          @include mob-body-14;
        }
      }
    }
  }
}
@include mobile {
  .carousel {
    &__social {
      width: 183px;
      height: 183px;
      &.-hard {
        width: 128px;
      }
      &-link {
        border-radius: 50%;
        padding: 10px;
        bottom: 16px;
        span {
          display: none;
        }
      }
      &-icon {
        padding: 3.333px 1.112px 3.333px 1.11px;
        width: 20px;
        height: 20px;
        svg {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
