<script setup lang="ts"></script>

<template>
  <r-slider pagination style-numbers>
    <template #slides>
      <div v-for="s in 5" :key="s" cls="slide">
        <img
          src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg"
          alt=""
        />
      </div>
    </template>
  </r-slider>
</template>

<style lang="scss" module>
.slide {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
