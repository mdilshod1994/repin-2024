<script setup lang="ts"></script>

<template>
  <div cls="video">
    <div cls="video__wrap">
      <video muted autoplay loop>
        <source src="/files/MainComp_01.mp4" type="video/mp4" />
      </video>
      <button cls="video__btn">
        <svgo-play filled />
        <div cls="video__btn-time">
          Showreel
          <div cls="video__btn-line" />
          00:45
        </div>
      </button>
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
}
</style>
