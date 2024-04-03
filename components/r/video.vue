<script setup lang="ts">
const isActive = ref(false)
</script>

<template>
  <div cls="video" class="dark-background">
    <div cls="video__wrap">
      <video muted autoplay loop>
        <source src="/files/MainComp_01.mp4" type="video/mp4" />
      </video>
      <button cls="video__btn" @click="isActive = true">
        <svgo-play filled />
        <div cls="video__btn-time">
          Showreel
          <div cls="video__btn-line" />
          00:45
        </div>
      </button>
    </div>
  </div>
  <r-modal v-model:active="isActive">
    <div cls="video-modal">
      <div cls="video-modal__wrap">
        <video controls>
          <source src="/files/MainComp_01.mp4" type="video/mp4" />
        </video>
      </div>
      <r-round-button
        cls="video-modal__btn-close"
        size="large"
        bg-color="white"
        @click="isActive = false"
      >
        <svgo-x />
      </r-round-button>
    </div>
  </r-modal>
</template>

<style module lang="scss">
.video {
  aspect-ratio: 16 / 9;
  max-width: 1920px;
  padding: 24px;
  margin: 0 auto;
  &__wrap {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    img {
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
.video-modal {
  position: relative;
  padding: 0 80px;
  margin: 0 24px;
  &__wrap {
    max-width: 1400px;
    aspect-ratio: 16/9;
    border-radius: 8px;
    overflow: hidden;
    video,
    iframe {
      border-radius: 8px;
    }
  }
  &__btn-close {
    position: absolute;
    right: 0;
    top: 0;
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
  .video-modal {
    padding: 0 60px;
    margin: 0 16px;
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
    &__wrap {
      height: 480px;
      display: flex;
      align-items: center;
      justify-content: center;
      video {
        transform: scale(1.5);
      }
    }
    &__btn {
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
    }
  }
  .video-modal {
    padding: 0;
    margin: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    &__btn-close {
      position: absolute;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
      top: auto;
      bottom: 40px;
    }
  }
}
</style>
