<!--
  Костомный карусель
-->

<!-- TODO: 
  придумать как задать отступы по бокам внутри врапера 
  паддинг не вариант, кнопка скролбара работает не справно,
  маргин снаружи тоже не вариант, обрезается по бокам (не по фигме)
  Варианты:
  можно задать маргины первому элементому и последнему
***
  передать св-во для определения отступов между слайдами и плюс сделать адаптивным, как в свайпер или в слик слайдер
***
  СПРОСИТЬ: 
  крутим ли мы карусель при передвежении кнопки скролбара
-->

<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core"

defineProps<{
  scrollBar?: boolean // показать/скрыть скролбар
}>()

const carousel = ref<HTMLElement | null>(null), // контейнер карусель
  scrollbar = ref<HTMLElement | null>(null), // скролбар
  thumb = ref<HTMLElement | null>(null), // кнопка скролбара
  isDragging = ref(false),
  startX = ref(0),
  startScrollLeft = ref(0),
  scrollPosition = ref(0),
  carouselWidth = ref(0)

useResizeObserver(carousel, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  carouselWidth.value = width
})

const maxScrollLeft = computed(() => {
  if (carousel.value) return carousel.value?.scrollWidth - carouselWidth.value
})

const dragging = (e: any) => {
  if (carousel.value && isDragging.value) {
    carousel.value.scrollLeft = startScrollLeft.value - (e.pageX - startX.value)
  }
  updateThumbPosition()
}

const dragStart = (e: any) => {
  isDragging.value = true
  startX.value = e.pageX
  if (carousel.value) startScrollLeft.value = carousel.value.scrollLeft
}

const dragStop = () => {
  isDragging.value = false
}

const updateThumbPosition = () => {
  if (scrollbar.value && thumb.value && carousel.value && maxScrollLeft.value) {
    scrollPosition.value = carousel.value.scrollLeft
    thumb.value.style.left = `${
      (scrollPosition.value / maxScrollLeft.value) *
      (scrollbar.value.clientWidth - thumb.value.offsetWidth)
    }px`
  }
}

onMounted(() => {
  if (thumb.value && carousel.value) {
    thumb.value.style.width = `${carousel.value.clientWidth / carousel.value.children.length}px`
  }
  // вызываем функцию updateThumbPosition, если пользователь скролил нажав соечетаний клавиш "Shift + scroll" и в моб версии, хотя он скрыт
  carousel.value?.addEventListener("scroll", () => {
    updateThumbPosition()
  })
})
</script>

<template>
  <div cls="carousel">
    <div
      ref="carousel"
      cls="carousel__slider"
      @mousemove="dragging"
      @mousedown="dragStart"
      @mouseup="dragStop"
      @mouseleave="dragStop"
    >
      <slot />
    </div>
    <div v-if="scrollBar" cls="carousel__scrollbar">
      <div ref="scrollbar" cls="carousel__scrollbar-track">
        <div ref="thumb" cls="carousel__scrollbar-thumb" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.carousel {
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  margin: 0 auto;
  &__slider {
    display: flex;
    align-self: stretch;
    gap: 56px;
    overflow: auto;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    user-select: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__scrollbar {
    max-width: 1520px;
    width: 100%;
    margin: 0 auto;
    &-track {
      width: 100%;
      display: flex;
      align-items: center;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      position: relative;
    }
    &-thumb {
      height: 1px;
      background: #141414;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
@include tablet {
  .carousel {
    gap: 40px;
    &__slider {
      gap: 48px;
    }
  }
}
</style>
