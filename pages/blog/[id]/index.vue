<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const store = usePreloaderTrigger()
const block = ref()
const progress = ref(0)

onMounted(() => {
  $gsap.registerPlugin($ScrollTrigger)
  store.handlePreloader(true)
  if (!block.value) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      $ScrollTrigger.create({
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
      <lazy-delay-hydration>
        <lazy-blog-case-banner />
      </lazy-delay-hydration>
    </div>
    <r-video :vimeo="{ short: 'https://vimeo.com/955895016' }" cls="blog__video" />
    <div class="container">
      <div cls="blog__wrap">
        <div cls="blog__share">
          <lazy-blog-case-share />
        </div>
        <div cls="blog__wrap-inner">
          <div ref="block" cls="blog__wrap-box">
            <lazy-blog-case-blocks />
          </div>
          <div cls="blog__progress-bar">
            <lazy-blog-case-progress-bar :progress="progress" />
          </div>
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
  padding: 130px 0 280px;
  &__video {
    margin-top: 24px;
  }
  &__wrap {
    padding: 96px 0 0;
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
@include desktop-medium {
  .blog {
    &__wrap {
      &-inner {
        max-width: 945px;
      }
      &-box {
        max-width: 845px;
      }
    }
  }
}
@include tablet {
  .blog {
    padding: 56px 0 96px;
    &__wrap {
      padding: 72px 0 0;
      &-inner {
        max-width: 783px;
      }
    }
    &__start {
      padding: 16px 0;
    }
    &__progress-bar,
    &__share {
      padding-bottom: 44px;
    }
  }
}
@include mobile {
  .blog {
    padding: 72px 0 88px;
    // &__progress-bar{

    // }
    &__share {
      display: none;
    }
    &__wrap {
      padding: 72px 0 0;
    }
    &__related {
      padding: 72px 0 0;
    }
  }
}
</style>
