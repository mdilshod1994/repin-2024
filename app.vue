<script setup lang="ts">
const store = useGlobalData()
onMounted(async () => {
  await store.getMainPageInfo()
})
</script>

<template>
  <div cls="app">
    <nuxt-layout>
      <!-- <r-preloader /> -->
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
