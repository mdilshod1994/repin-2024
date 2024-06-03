<script setup lang="ts">
const store = useGlobalData()
const _store = usePreloaderTrigger()
onMounted(async () => {
  await store.getMainPageInfo()
  _store.handlePreloader()
})

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:start", () => {
  _store.handlePreloader()
})
</script>

<template>
  <div cls="app">
    <r-preloader />
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: 1s ease-in-out;
}

.page-enter-from {
  transform: translateY(-100px);
}
.page-leave-to {
  transform: translateY(100px);
}
</style>
