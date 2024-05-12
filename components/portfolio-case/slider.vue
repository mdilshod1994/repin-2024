<script setup lang="ts"></script>

<template>
  <r-cursor-follow cursor-type="carousel" bg-color="white">
    <r-slider pagination style-numbers>
      <template #slides>
        <slot />
      </template>
    </r-slider>
  </r-cursor-follow>
</template>

<style lang="scss" module>
.div {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
