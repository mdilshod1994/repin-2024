<script setup lang="ts">
import Player from "@vimeo/player"

const { locale } = useI18n()

const store = useGlobalData()
const contactSoc = computed(() => {
  if (locale.value === "en") {
    return store.contacts?.en.page.social_media
  } else {
    return store.contacts?.ru.page.social_media
  }
})

onMounted(async () => {
  await store.getContactPageInfo()
  setTimeout(() => {
    document.querySelectorAll("#videowrap").forEach((el) => {
      if (el) {
        const player = new Player(el, {
          url: el.dataset.url,
          background: true,
          height: el.clientHeight,
        })
        player.on("play", () => {
          const parent = el.parentElement
          if (!parent) return
          parent.style.width = `${el.clientWidth}px`
        })
      }
    })
  }, 2000)
})

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div v-if="contactSoc" cls="carousel">
    <div class="container">
      <r-title :pretitle="contactSoc?.subtitle" :title="contactSoc?.title" flex-start />
    </div>
    <r-carousel gap="24" tablet-gap="20" mob-gap="16">
      <div
        v-for="soc in contactSoc?.items"
        :cls="{ carousel__social: true, [`-${soc.rounding}`]: true }"
        class="hover-border"
      >
        <div cls="carousel__social-overlay" />
        <div
          v-if="soc.video_vimeo"
          id="videowrap"
          :data-url="soc.video_vimeo"
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
          <div cls="carousel__social-icon">
            <div
              v-if="soc['web-service'].toLowerCase() === 'behance'"
              cls="carousel__social-icon-wrap"
            >
              <svgo-behance />
              <svgo-behance-active filled />
            </div>
            <div
              v-else-if="soc['web-service'].toLowerCase() === 'instagram'"
              cls="carousel__social-icon-wrap"
            >
              <svgo-ins />
              <svgo-ins-active filled />
            </div>
            <div
              v-else-if="soc['web-service'].toLowerCase() === 'twitter'"
              cls="carousel__social-icon-wrap"
            >
              <svgo-tw />
              <svgo-tw-active filled />
            </div>
            <div
              v-else-if="soc['web-service'].toLowerCase() === 'youtube'"
              cls="carousel__social-icon-wrap"
            >
              <svgo-youtube />
              <svgo-youtube-active filled />
            </div>
            <div
              v-else-if="soc['web-service'].toLowerCase() === 'dribbble'"
              cls="carousel__social-icon-wrap"
            >
              <svgo-dirble />
              <svgo-dirble-active filled />
            </div>
            <div v-else cls="carousel__social-icon-wrap">
              <svgo-link />
              <svgo-link-active cls="-black" />
            </div>
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
        transition: 0.3s ease-in-out;
      }
    }
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &-wrap {
        display: flex;
        width: 24px;
        height: 24px;
        justify-content: center;
        flex-shrink: 0;
        align-items: center;
        svg {
          position: absolute;
          font-size: 24px;
          transition: 0.3s ease-in-out;
          &:nth-child(1) {
            color: #fff;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &.-black {
            color: #000;
          }
        }
      }
    }
    &-video {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: max-content;
      z-index: 1;
      height: 100%;
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
    &:hover &-icon {
      svg {
        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      }
    }
    &:hover &-link {
      background: rgba(255, 255, 255, 1);
      span {
        color: var(--Black);
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
      height: 220px;
      &.-hard {
        width: 128px;
      }
      &-link {
        border-radius: 50%;
        bottom: 16px;
        padding: 0;
        height: auto;
        span {
          display: none;
        }
      }
      &-icon {
        width: 40px;
        height: 40px;
        &-wrap {
          width: 16px;
          height: 16px;
          svg {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
