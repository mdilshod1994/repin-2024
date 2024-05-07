<script setup lang="ts">
import Player from "@vimeo/player"

interface videoLinks {
  short: string
  long: string
}

const props = defineProps<{
  video?: videoLinks
  vimeo?: videoLinks
}>()

const videoFull = ref<HTMLVideoElement | null>(null)
const container = ref<HTMLElement | null>(null)
const overlay = ref<HTMLElement | null>(null)
const switchVideo = ref<boolean>(false)

const setBoundingClientRect = () => {
  const domRect = container.value?.getBoundingClientRect()
  if (!overlay.value) return
  overlay.value.style.top = `${domRect?.top}px`
  overlay.value.style.bottom = `${domRect?.bottom}px`
  overlay.value.style.left = `${domRect?.left}px`
  overlay.value.style.right = `${domRect?.right}px`
  overlay.value.style.width = `${domRect?.width}px`
  overlay.value.style.height = `${domRect?.height}px`
  overlay.value.style.zIndex = `-1`
}

const openLongVideo = () => {
  setBoundingClientRect()
  useBodyLock(true)
  switchVideo.value = true
  setTimeout(() => {
    if (!overlay.value) return
    overlay.value.style.top = `0px`
    overlay.value.style.bottom = `0px`
    overlay.value.style.left = `0px`
    overlay.value.style.right = `0px`
    overlay.value.style.width = `100vw`
    overlay.value.style.height = `100svh`
    overlay.value.style.zIndex = `4`
    if (!videoFull.value) return
    videoFull.value.play()
  }, 200)
}

watch(switchVideo, (nv) => {
  if (!nv) {
    useBodyLock(false)
    setBoundingClientRect()
    setTimeout(() => {
      if (!videoFull.value) return
      videoFull.value.currentTime = 0
      videoFull.value.pause()
    }, 200)
  }
})

const vimeoshort = ref<HTMLElement | null>(null)
const vimeolong = ref<HTMLElement | null>(null)
onMounted(() => {
  if (props.vimeo?.short) {
    if (!vimeoshort.value) return
    const vimeoShort = new Player(vimeoshort.value, {
      background: true,
      url: props.vimeo?.short,
      muted: true,
      loop: true,
      autoplay: true,
      volume: 0,
    })
  }
})

watch(switchVideo, (nv) => {
  if (props.vimeo?.long) {
    if (!vimeolong.value) return
    const vimeoLong = new Player(vimeolong.value, {
      url: props.vimeo?.short,
    })
    if (nv) {
      vimeoLong.play()
    } else {
      vimeoLong.setCurrentTime(0)
      vimeoLong.pause()
    }
  }
})
</script>

<template>
  <div ref="container" cls="video" class="dark-background">
    <div cls="video__wrap">
      <r-cursor-follow
        cursor-type="video"
        bg-color="white"
        :cls="{ cursor: true, '-show': switchVideo }"
        @click="openLongVideo()"
      >
        <div cls="cursor-layer" />
      </r-cursor-follow>
      <div :cls="{ shorts: true, '-show': switchVideo }">
        <div v-if="vimeo?.short" ref="vimeoshort" cls="shorts__vimeo" />
        <video v-else muted autoplay loop cls="" playsinline>
          <source :src="video?.short" type="video/mp4" />
        </video>
      </div>
    </div>

    <div ref="overlay" :cls="{ overlay: true, '-scale': switchVideo }">
      <div cls="overlay__wrap">
        <div cls="overlay__video">
          <div v-if="vimeo?.long" ref="vimeolong" />
          <video
            v-else
            ref="videoFull"
            else
            controls
            :cls="{ long: true, '-show': switchVideo }"
            playsinline
          >
            <source :src="video?.long" type="video/mp4" />
          </video>
        </div>

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
  aspect-ratio: 16 / 9;
  max-width: 1920px;
  padding: 24px;
  margin: 0 auto;
  &__wrap {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
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
  &-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
.shorts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition-delay: 0.2s;
  height: 100%;
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
.long {
  opacity: 0;
  transition: 0.3s ease-in-out;

  &.-show {
    opacity: 1;
    width: 100% !important;
    height: 102% !important;
  }
}
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  transition: 0.2s ease-in-out;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrap {
    position: relative;
    aspect-ratio: 16/9;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    gap: 24px;
    min-height: 0;
    margin: 0px 24px;
  }
  &__video {
    width: 100%;
    min-height: 0;
    border-radius: 24px;
    border: 20px solid #fff;
    background: #fff;
    overflow: hidden;
    height: max-content;
    video {
      border-radius: 8px;
    }
    iframe {
      margin: 0 auto;
      border-radius: 8px;
      display: block;
    }
  }
}
@include tablet {
  .video {
    padding: 16px;
  }
}
@include tablet-small {
  .short {
    border-radius: 16px;
  }
  .overlay {
    &__wrap {
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 0 24px;
    }
    &__btn-close {
      margin-top: auto;
      margin-bottom: 40px;
    }
    &__video {
      margin-top: auto;
      border: 8px solid #fff;
      border-radius: 8px;
      video {
        border-radius: 4px;
      }
    }
  }
}
@include mobile {
  .video {
    overflow: hidden;
    aspect-ratio: auto;
    &__wrap {
      height: 480px;
    }
  }
  .shorts {
    display: flex;
    align-items: center;
    justify-content: center;
    iframe,
    video {
      min-width: 853px;
    }
    &__vimeo {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .overlay {
    &__wrap {
      padding: 0 16px;
    }
  }
}
</style>
