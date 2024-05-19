<script setup lang="ts"></script>

<template>
  <r-slider pagination style-numbers>
    <template #slides>
      <slot />
    </template>
  </r-slider>
</template>

<style lang="scss" module>
.div {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
