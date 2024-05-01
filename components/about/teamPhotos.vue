<script setup lang="ts">
defineProps<{
  img?: string
}>()
</script>

<template>
  <div cls="photos">
    <img :src="img" alt="" />
  </div>
</template>

<style lang="scss" module>
.photos {
  padding: 24px 0;
  aspect-ratio: 16/9;
  max-width: 1920px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>
