<script setup lang="ts">
const openLightbox = ref(false)

// watch(openLightbox, (val) => {})
const props = defineProps<{
  longVideo?: string
  shortVideo?: string
}>()

const hasVideo = computed(() => {
  if (props.longVideo && props.shortVideo) {
    return "both"
  } else if (props.longVideo) {
    return "full"
  } else if (props.shortVideo) {
    return "short"
  } else {
    return false
  }
})
</script>

<template>
  <div v-if="hasVideo" cls="video" class="dark-background">
    <r-cursor-follow cursor-type="video" bg-color="white" cls="video__block">
      <div cls="video__wrap">
        <r-lightbox v-model:open="openLightbox">
          <video muted autoplay loop :cls="{ video__video: true, '-open': openLightbox }">
            <source src="/files/MainComp_01.mp4" type="video/mp4" />
          </video>
        </r-lightbox>
        <div v-if="!openLightbox" cls="video__wrap-overlay" @click="openLightbox = true" />
      </div>
    </r-cursor-follow>
  </div>
</template>

<style module lang="scss">
.video {
  aspect-ratio: 16 / 9;
  max-width: 1920px;
  padding: 24px;
  margin: 0 auto;
  &__block {
    width: 100%;
    height: 100%;
  }
  &__wrap {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__btn {
    position: absolute;
    bottom: 40px;
    left: 40px;
    display: inline-flex;
    padding: 4px 24px 4px 4px;
    align-items: center;
    gap: 12px;
    border-radius: 152px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(18px);
    &-time {
      display: flex;
      align-items: center;
      gap: 8px;
      @include desctop-caption-17;
      color: #fff;
    }
    &-line {
      width: 1px;
      height: 16px;
      background: rgba(255, 255, 255, 0.1);
    }
    svg {
      font-size: 56px;
    }
  }
}
@include tablet {
  .video {
    padding: 16px;
    &__btn {
      left: 24px;
      bottom: 24px;
      svg {
        font-size: 48px;
      }
      &-time {
        @include mob-body-14;
        gap: 10px;
      }
    }
  }
}
@include tablet-small {
  .video {
    &__wrap {
      border-radius: 16px;
    }
  }
}
@include mobile {
  .video {
    height: 480px;
    width: 100%;
    &__wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__video {
      min-width: 853px;
      margin: 0 auto;
      transition: 0.5s ease-in-out;
      &.-open {
        min-width: 0px;
      }
    }
    &__btn {
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
    }
  }
}
</style>
