<script setup lang="ts">
defineProps<{
  progress?: number
}>()

const curIdx = ref(0)

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
})
</script>

<template>
  <div cls="scroll">
    <div cls="scroll__wrap">
      <div cls="scroll__scrollbar">
        <div cls="scroll__thumbnail" :style="`height: ${progress}%`" />
      </div>
      <button cls="scroll__arrow -up" @click="scrollToBlock('-')">
        <svgo-arrow-up />
      </button>
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
  &__wrap {
    position: relative;
    height: 100%;
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
  }
  &__arrow {
    position: absolute;
    left: -32px;
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
</style>
