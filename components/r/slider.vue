<script setup lang="ts"></script>

<template>
  <div cls="slider">
    <div cls="slider__wrap">Slider</div>
  </div>
</template>

<style module lang="scss">
.slider {
  padding: 24px;
  max-width: 1920px;
  aspect-ratio: 16/9;
  margin: 0 auto;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    @include desctop-H1;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    border-radius: 24px;
  }
}
</style>
