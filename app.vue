<script setup lang="ts">
import Lenis from "lenis"

const { locale } = useI18n()
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

// const nuxtApp = useNuxtApp()

// nuxtApp.hook("page:start", () => {
//   _store.handlePreloader()
// })
const renderKey = ref(0)
watch(locale, () => {
  renderKey.value++
})
</script>

<template>
  <div :key="renderKey" cls="app">
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
  opacity: 0;
  filter: blur(1rem);
}
.page-leave-to {
  transform: translateY(100px);
  opacity: 0;
  filter: blur(1rem);
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
