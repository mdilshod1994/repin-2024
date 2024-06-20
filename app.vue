<script setup lang="ts">
import Lenis from "lenis"

const { $gsap, $ScrollTrigger } = useNuxtApp()

const store = useGlobalData()
const _store = usePreloaderTrigger()
onMounted(async () => {
  await store.getMainPageInfo()
  _store.handlePreloader()
  const lenis = new Lenis({
    lerp: 0.07,
  })

  lenis.on("scroll", $ScrollTrigger.update)

  $gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
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

<style lang="scss">
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
.lenis {
  &.lenis-smooth {
    scroll-behavior: auto;

    [data-lenis-prevent] {
      overscroll-behavior: contain;
    }
  }

  &.lenis-stopped {
    overflow: hidden;
  }

  &.lenis-scrolling iframe {
    pointer-events: none;
  }
}
</style>
