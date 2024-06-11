<script setup lang="ts">
const nuxtApp = useNuxtApp()

const store = usePreloaderTrigger()
const block = ref()
const progress = ref(0)
onMounted(() => {
  watchEffect(() => {
    const gsap = nuxtApp.$gsap
    const ScrollTrigger = nuxtApp.$ScrollTrigger
    if (gsap && block.value && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
    }
  })
  store.handlePreloader(true)
  if (!block.value) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      ScrollTrigger.create({
        trigger: document.body,
        start: block.value.offsetTop,
        end: block.value.offsetHeight + block.value.offsetTop,
        onUpdate: (self) => {
          progress.value = self.progress * 100
        },
      })
    }
  })
  observer.observe(block.value)
})
</script>

<template>
  <div cls="blog">
    <div class="container">
      <blog-case-banner />
    </div>
    <r-video :vimeo="{ short: 'https://vimeo.com/955895016' }" />
    <div class="container">
      <div cls="blog__wrap">
        <lazy-blog-case-share />
        <div cls="blog__wrap-inner">
          <div ref="block">
            <lazy-blog-case-blocks />
          </div>
          <lazy-blog-case-progress-bar :progress="progress" />
        </div>
      </div>
      <div cls="blog__start">
        <lazy-blog-case-start />
      </div>
      <div cls="blog__related">
        <lazy-blog-case-related />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.blog {
  padding: 136px 0 280px;
  &__wrap {
    padding: 96px 0;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    &-inner {
      display: flex;
      width: 100%;
      max-width: 1134px;
      justify-content: space-between;
    }
  }
  &__start {
    padding: 32px 0;
  }
  &__related {
    padding-top: 96px;
  }
}
</style>
