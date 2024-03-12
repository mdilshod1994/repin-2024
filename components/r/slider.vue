<script setup lang="ts">
defineProps<{
  pagination?: boolean
}>()

const { data: products } = await useFetch("https://fakestoreapi.com/products?limit=10")
const slider = ref<HTMLElement | null>(null)
const slide = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const pageX = ref(0)
const cIdx = ref(0)
const transitionSliderName = ref("left")
const transitionNumberName = ref("down")

const dragging = (e: any) => {
  if (slider.value && isDragging.value && slide.value) {
    pageX.value = e.type === "mousemove" ? e.pageX : e.touches[0].pageX
    slide.value.style.transform = `translateX(${pageX.value - startX.value}px)`
  }
}

const dragStart = (e: any) => {
  isDragging.value = true
  startX.value = e.type === "mousedown" ? e.pageX : e.touches[0].pageX
}
const dragStop = () => {
  isDragging.value = false
  // to left
  if (pageX.value - startX.value > 10 && !isDragging.value && slide.value && cIdx.value > 0) {
    transitionSliderName.value = "right"
    transitionNumberName.value = "up"
    cIdx.value--
    slide.value.style.transform = `translateX(${pageX.value - startX.value}px)`
  }
  // to left
  else if (pageX.value - startX.value < -10 && !isDragging.value && 5 - 1 > cIdx.value) {
    transitionSliderName.value = "left"
    transitionNumberName.value = "down"
    cIdx.value++
    slide.value.style.transform = `translateX(${pageX.value - startX.value}px)`
  } else {
    if (!slide.value) return
    slide.value.style.transform = `translateX(0px)`
  }
}
</script>

<template>
  <div v-if="products" cls="block">
    <div cls="numbers">
      <transition :name="`slide-${transitionNumberName}`" tag="div" mode="out-in">
        <div v-if="true" :key="cIdx">{{ cIdx + 1 }}</div>
      </transition>
      /
      <div>
        {{ 5 }}
      </div>
    </div>
    <div
      ref="slider"
      cls="sliders"
      @mousemove="dragging"
      @mousedown="dragStart"
      @mouseup="dragStop"
      @mouseleave="isDragging = false"
      @touchstart="dragStart"
      @touchmove="dragging"
      @touchend="dragStop"
      @touchcancel="dragStop"
    >
      <transition :name="`slide-${transitionSliderName}`" tag="div">
        <div
          v-if="true"
          :key="cIdx"
          ref="slide"
          :cls="{ sliders__item: true, '-default-state': !isDragging }"
        >
          <!-- <img :src="products[cIdx].image" alt="" draggable="false" /> -->
          <img
            src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg"
            alt=""
            draggable="false"
          />
        </div>
      </transition>
    </div>
    <div cls="pagination">
      <span v-for="(d, idx) in 5" :cls="{ '-active': idx === cIdx }" />
    </div>
  </div>
</template>

<style module lang="scss">
.block {
  padding: 24px;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.sliders {
  aspect-ratio: 16/9;
  max-height: 744px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__item {
    height: 100%;
    border-radius: 24px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    border-radius: 24px;
    img {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
  }
}
.numbers {
  position: absolute;
  top: 56px;
  left: 56px;
  display: inline-flex;
  height: 40px;
  width: 81px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--White);
  border-radius: 48px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  gap: 8px;
  overflow: hidden;
  z-index: 1;
  div {
    width: 14.5px;
    display: flex;
    justify-content: center;
  }
}
.pagination {
  display: flex;
  gap: 6px;
  position: absolute;
  left: 50%;
  bottom: 56px;
  transform: translateX(-50%);
  span {
    display: block;
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid transparent;
    transition: 0.3s ease-in-out;
    &.-active {
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }
}
@include tablet {
  .block {
    padding: 16px;
  }
  .sliders {
    &__item {
      border-radius: 16px;
    }
  }
  .numbers {
    width: 75px;
    height: 32px;
    top: 32px;
    left: 32px;
    @include mob-body-14;
  }
  .pagination {
    bottom: 40px;
    span {
      width: 6px;
      height: 6px;
    }
  }
}
@include mobile {
  .sliders {
    height: 480px;
  }
}
</style>

<style>
/* right */
.slide-left-enter-active,
.slide-right-enter-active {
  transition: 0.3s ease-in-out;
}
.slide-left-leave-active,
.slide-right-leave-active {
  position: absolute;
  transition: 0.3s ease-in-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-100%, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(100%, 0) !important;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100%, 0) !important;
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease-in-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translate(0, 20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translate(0, -20px);
}
.slide-down-enter-from {
  opacity: 0;
  transform: translate(0, -20px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translate(0, 20px);
}
</style>
