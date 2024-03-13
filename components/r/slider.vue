<!--
TODO:
Объеденить карусель с слайдером
-->

<script setup lang="ts">
defineProps<{
  pagination?: boolean
}>()

const { data: products } = await useFetch("https://fakestoreapi.com/products?limit=10")
const slider = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const stopMoveSlideByClick = ref(false)
const startX = ref(0)
const pageX = ref(0)
const startScrollLeft = ref(0)
const cIdx = ref(0)
const transitionNumberName = ref("down")

const dragging = (e: any) => {
  if (slider.value && isDragging.value) {
    stopMoveSlideByClick.value = true
    pageX.value = e.type === "mousemove" ? e.pageX : e.touches[0].pageX
    slider.value.scrollLeft = startScrollLeft.value - (pageX.value - startX.value)
  }
}

const dragStart = (e: any) => {
  isDragging.value = true
  stopMoveSlideByClick.value = false
  startX.value = e.type === "mousedown" ? e.pageX : e.touches[0].pageX
  if (slider.value) startScrollLeft.value = slider.value.scrollLeft
}
const dragStop = () => {
  isDragging.value = false
  if (slider.value && stopMoveSlideByClick.value) {
    if (pageX.value - startX.value > 70 && cIdx.value > 0) {
      transitionNumberName.value = "up"
      cIdx.value--
      scrollIntoView(cIdx.value)
    } else if (pageX.value - startX.value < -70 && slider.value.children.length - 1 > cIdx.value) {
      transitionNumberName.value = "down"
      cIdx.value++
      scrollIntoView(cIdx.value)
    } else {
      scrollIntoView(cIdx.value)
    }
  }
}

const scrollIntoView = (index: number) => {
  if (slider.value) {
    slider.value.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
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
    >
      <div cls="sliders__item">
        <img
          src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg"
          alt=""
        />
      </div>
      <div cls="sliders__item">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2022/09/greg-rutkowski-dragon-cave-1920.jpg?resize=854,569"
          alt=""
        />
      </div>
      <div cls="sliders__item">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2022/09/greg-rutkowski-dragon-cave-1920.jpg?resize=854,569"
          alt=""
        />
      </div>
      <div cls="sliders__item">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2022/09/greg-rutkowski-dragon-cave-1920.jpg?resize=854,569"
          alt=""
        />
      </div>
      <div cls="sliders__item">
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2022/09/greg-rutkowski-dragon-cave-1920.jpg?resize=854,569"
          alt=""
        />
      </div>
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
  position: relative;
}

.sliders {
  aspect-ratio: 16/9;
  max-height: 744px;
  width: 100%;
  display: inline-flex;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
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
    flex-shrink: 0;
    img {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
      pointer-events: none;
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
