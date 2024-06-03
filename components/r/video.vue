<script setup lang="ts">
import Player from "@vimeo/player"
import { onClickOutside, useMediaQuery } from "@vueuse/core"

const store = usePreloaderTrigger()

const isLargeScreen = useMediaQuery("(min-width: 1024px)")
interface videoLinks {
  short: string
  long: string
}
const vimeoShort = ref()
const options = {
  loop: true,
  muted: true,
  autoplay: true,
  background: true,
}
const props = defineProps<{
  vimeo?: videoLinks
}>()
const container = ref<HTMLElement | null>(null)
const overlay = ref<HTMLElement | null>(null)
const switchVideo = ref<boolean>(false)
const vimeolong = ref<HTMLElement | null>(null)

onClickOutside(vimeolong, () => (switchVideo.value = false))

const percent = computed(() => {
  if (isLargeScreen.value) {
    return 0.75
  } else {
    return 1
  }
})

const setBoundingClientRect = () => {
  if (!overlay.value) return
  overlay.value.style.zIndex = `-1`
  overlay.value.style.opacity = `0`
}

const openLongVideo = () => {
  setBoundingClientRect()
  useScrollLock(true)
  switchVideo.value = true
  setTimeout(() => {
    if (!overlay.value) return
    overlay.value.style.top = `0px`
    overlay.value.style.bottom = `0px`
    overlay.value.style.left = `0px`
    overlay.value.style.right = `0px`
    overlay.value.style.width = `100vw`
    overlay.value.style.height = `100vh`
    overlay.value.style.zIndex = `4`
    overlay.value.style.opacity = `1`
  }, 10)
}

const playVimeoLong = (state: boolean) => {
  if (props.vimeo?.long) {
    if (!vimeolong.value) return
    const bodyWidth = document.querySelector("body")?.clientWidth
    if (bodyWidth) {
      const player = new Player(vimeolong.value, {
        url: props.vimeo?.long,
        width: bodyWidth * percent.value,
      })
      if (state) {
        player.play()
      } else {
        player.play()
        player.setCurrentTime(0)
        player.pause()
      }
    }
  }
}

watch(switchVideo, (nv) => {
  if (nv) {
    playVimeoLong(nv)
  }
  if (!nv) {
    playVimeoLong(nv)
    useScrollLock(false)
    setBoundingClientRect()
  }
})
onMounted(() => {
  playVimeoLong(false)
})
const { updateType } = useMousemove()
const setCursorType = (type: string) => {
  updateType(type)
}
const onReady = () => {
  vimeoShort.value
    .play()
    .then(function () {
      "// the video was played"
    })
    .catch(function (error) {
      switch (error.name) {
        case "PasswordError":
          break
        case "PrivacyError":
          break
        default:
          "// the video was not played"
          vimeoShort.value.play()
          break
      }
    })
}
const onPlayed = () => {
  store.handlePreloader(true)
}
</script>

<template>
  <div ref="container" cls="video" class="dark-background">
    <div cls="video__wrap" @mouseover="setCursorType('video')" @mouseleave="setCursorType('')">
      <div :cls="{ shorts: true, '-show': switchVideo }" @click="openLongVideo()">
        <vimeo-player
          v-if="vimeo?.short"
          ref="vimeoShort"
          :video-url="vimeo?.short"
          :options="options"
          cls="shorts__vimeo"
          @ready="onReady"
          @play="onPlayed"
        />
        <div cls="shorts__overlay" />
      </div>
      <div cls="video__wrap-btn">
        <svgo-play />
      </div>
    </div>
    <div ref="overlay" :cls="{ overlay: true, '-scale': switchVideo }">
      <div cls="overlay__wrap">
        <div v-if="vimeo?.long" ref="vimeolong" cls="long-vimeo" />
        <r-round-button
          cls="overlay__btn-close"
          size="large"
          bg-color="white"
          @click="switchVideo = false"
        >
          <svgo-x />
        </r-round-button>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.video {
  max-width: 1920px;
  padding: 24px;
  margin: 0 auto;
  &__wrap {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
    &-btn {
      position: absolute;
      left: 32px;
      bottom: 32px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--White);
      // display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      svg {
        font-size: 17.143px;
      }
    }
  }
}
.cursor {
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  opacity: 1;
  transition-delay: 0.2s;
  position: relative;
  z-index: 1;
  &.-show {
    opacity: 0;
  }
}
.shorts {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: 100%;
  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  &__vimeo {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  &.-show {
    opacity: 0;
  }
}
.long-vimeo {
  border-radius: 24px;
  overflow: hidden;
}
.long {
  opacity: 0;
  transition: 0.3s ease-in-out;
  border-radius: 24px;
  overflow: hidden;
  &.-show {
    opacity: 1;
    width: 100% !important;
    height: 100% !important;
  }
}
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__wrap {
    position: relative;
    max-height: 100%;
  }
  &__btn-close {
    position: absolute;
    right: -100px;
    top: 0px;
  }
}
@include tablet {
  .video {
    padding: 16px;
    &__wrap {
      &-btn {
        display: flex;
      }
    }
  }
}
@include tablet-small {
  .long-vimeo,
  .short {
    border-radius: 16px;
  }
  .overlay {
    &__wrap {
      border-radius: 8px;
      position: initial;
    }
    &__btn-close {
      right: auto;
      top: auto;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
    }
    &__video {
      margin-top: auto;

      video {
        border-radius: 4px;
      }
    }
  }
  .video {
    &__wrap {
      border-radius: 16px;
      &-btn {
        left: 24px;
        bottom: 24px;
      }
    }
  }
}
@include mobile {
  .video {
    // overflow: hidden;
    // aspect-ratio: auto;
    &__wrap {
      // height: 480px;
      &-btn {
        left: 16px;
        bottom: 16px;
      }
    }
  }
  .shorts {
    display: flex;
    align-items: center;
    justify-content: center;
    iframe,
    video {
      // min-width: 853px;
    }
    &__vimeo {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .long-vimeo {
    border-radius: 0;
  }
}
</style>
