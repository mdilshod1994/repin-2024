<!--
TODO:
Рефакторить код...
Сократить код...
Документировать код...
-->

<script setup lang="ts">
defineProps<{
  pagination?: boolean
  slidesPerView?: number
  modified?: boolean
  styleNumbers?: boolean
}>()

const slider = ref<HTMLElement | null>(null),
  isDragging = ref(false),
  stopMoveSlideByClick = ref(false),
  startX = ref(0),
  pageX = ref(0),
  startScrollLeft = ref(0),
  cIdx = ref(0),
  transitionNumberName = ref("down")

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
const dragOut = () => {
  isDragging.value = false
  scrollIntoView(cIdx.value)
}
const scrollIntoView = (index: number) => {
  requestAnimationFrame(() => {
    if (slider.value) {
      slider.value.scrollTo({
        left: slider.value.children[0].clientWidth * index,
        behavior: "smooth",
      })
    }
  })
}
</script>

<template>
  <div cls="block">
    <div
      ref="slider"
      cls="sliders"
      @mousemove="dragging"
      @mousedown="dragStart"
      @mouseup="dragStop"
      @mouseleave="dragOut"
      @touchstart="dragStart"
      @touchmove="dragging"
      @touchend="dragStop"
    >
      <slot name="slides" />
    </div>
    <div v-if="slider" cls="pagination">
      <span v-for="(d, idx) in slider.children.length" :cls="{ '-active': idx === cIdx }" />
    </div>
  </div>
</template>

<style module lang="scss">
.block {
  padding: 24px 0;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  &__right {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__descriptions {
    max-width: 411px;
  }
  &__contents {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-item {
      @include desctop-H2-ram;
      font-style: italic;
      position: relative;
      width: max-content;
      color: rgba(0, 0, 0, 0.2);
      transition: 0.3s ease-in-out;
      &::after {
        content: "";
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(0, 0, 0, 0.2);
      }
      span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: var(--Black);
        opacity: 0;
        transition: opacity 0.08s ease-out;
      }
      &.-active {
        color: var(--Black);
        &::after {
          display: block;
        }
        span {
          opacity: 1;
        }
      }
    }
  }
  &__descriptions {
    &-block {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-text {
      @include desctop-caption-17;
      &.-bold {
        @include desctop-caption-17-med;
      }
    }
  }
}
.sliders {
  aspect-ratio: 16/9;
  max-height: 744px;
  width: 100%;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    user-select: none;
    width: 100%;
    flex-shrink: 0;
  }
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
}
.numbers {
  width: 81px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  overflow: hidden;
  z-index: 1;
  &.-styled {
    position: absolute;
    top: 56px;
    height: 40px;
    left: 56px;
    color: var(--White);
    border-radius: 48px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
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
    width: 8px;
    height: 8px;
    flex-shrink: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    transition: 0.3s ease-in-out;
    &.-active {
      background: rgba(255, 255, 255, 1);
      border: 2px solid rgba(255, 255, 255, 1);
    }
  }
}
@include tablet {
  .sliders {
    border-radius: 16px;
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
