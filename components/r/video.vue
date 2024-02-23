<script setup lang="ts"></script>

<template>
  <div cls="video">
    <div cls="video__wrap">
      <img src="@/assets/images/tempImages/image 2.png" alt="" />
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
    position: relative;
    border-radius: 24px;
    overflow: hidden;
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
</style>
