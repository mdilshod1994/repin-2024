<script setup lang="ts">
const props = defineProps<{
  progress?: number
  showHideScrollbar: boolean
}>()

const curIdx = ref(0)

const progressPercent = computed(() => `${props.progress}%`)

const scrollToBlock = (v) => {
  const blocks = document.querySelectorAll(".block")
  const totalIdx = blocks.length - 1
  if (curIdx.value > 0 && v === "-") {
    curIdx.value--
    const scrollToSection = blocks[curIdx.value].offsetTop
    window.scrollTo({
      top: scrollToSection - 100,
      behavior: "smooth",
    })
  }
  if (curIdx.value < totalIdx && v === "+") {
    curIdx.value++
    const scrollToSection = blocks[curIdx.value].offsetTop
    window.scrollTo({
      top: scrollToSection - 40,
      behavior: "smooth",
    })
  }
}

onMounted(() => {
  const blocks = document.querySelectorAll(".block")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          curIdx.value = entry.target.dataset.idx
        }
      })
    },
    {
      threshold: 0.2,
    },
  )

  blocks.forEach((item, idx) => {
    item.setAttribute("data-idx", `${idx}`)
    observer.observe(item)
  })

  // const wrapBlog = document.querySelector(".wrap-blog")

  // const observerScnd = new IntersectionObserver((entries) => {
  //   if (entries[0].isIntersecting) {
  //     showHideScrollbar.value = true
  //   } else {
  //     showHideScrollbar.value = false
  //   }
  // })
  // if (!wrapBlog) return
  // observerScnd.observe(wrapBlog)
})
</script>

<template>
  <div :cls="{ scroll: true, '-show': showHideScrollbar }">
    <div cls="scroll__wrap">
      <button cls="scroll__arrow -up" @click="scrollToBlock('-')">
        <svgo-arrow-up />
      </button>
      <div cls="scroll__scrollbar">
        <div cls="scroll__thumbnail" />
      </div>
      <button cls="scroll__arrow -down" @click="scrollToBlock('+')">
        <svgo-arrow-up />
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.scroll {
  position: sticky;
  top: 100px;
  height: 85svh;
  width: 84px;
  z-index: 1;
  &__wrap {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  &__scrollbar {
    height: 100%;
    width: 2px;
    position: relative;
    background: var(--gray);
  }
  &__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--Black);
    height: v-bind(progressPercent);
  }
  &__arrow {
    position: absolute;
    right: 10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 12px;
    }
    &.-up {
      top: 0;
    }
    &.-down {
      bottom: 0;
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
@include tablet {
  .scroll {
    width: 64px;
  }
}
@include mobile {
  .scroll {
    position: fixed;
    bottom: 16px;
    left: 50%;
    top: auto;
    right: auto;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    padding: 0 28px;
    opacity: 0;
    transition: 0.3s ease-in-out;
    &.-show {
      opacity: 1;
    }
    &__wrap {
      justify-content: space-between;
      align-items: center;
    }
    &__arrow {
      position: relative;
      top: auto;
      left: auto;
      bottom: auto;
      right: auto;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 16px);
        height: calc(100% + 16px);
        border-radius: 50%;
        border: 0.5px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 3.3px 22.191px 0px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(18.06315803527832px);
        z-index: -1;
      }
    }
    &__scrollbar {
      width: 50%;
      height: 2px;
      background: var(--White);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 40px);
        padding: 19px 0;
        border-radius: 200px;
        border: 0.5px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 3.3px 22.191px 0px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(18.06315803527832px);
        z-index: -1;
      }
    }
    &__thumbnail {
      width: v-bind(progressPercent);
      height: 2px;
      background: var(--Black);
    }
  }
}
</style>
