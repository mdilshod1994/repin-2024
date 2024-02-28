<!--
  Костомный карусель
-->

<!-- TODO: 
***
  РЕФАКТОРИТЬ КОД!!!
***
  придумать как задать отступы по бокам внутри врапера 
  паддинг не вариант, кнопка скролбара работает не правильно,
  маргин снаружи тоже не вариант, обрезается по бокам (не по фигме)
  Варианты:
  можно задать маргины первому элементому и последнему, но через css не получиться,
  нужно НАКОСТЫЛЯТЬ через JS (DONE)
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
  gap?: string
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
  setMarginsToSlides()
})

// максимальный скролл влево
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

const setMarginsToSlides = () => {
  const globalContainer = document.querySelector(".container") as HTMLElement
  const paddingX = parseFloat(getComputedStyle(globalContainer).paddingLeft) * 2
  const containerWidth = globalContainer ? globalContainer.clientWidth - paddingX : 1920 - paddingX
  const screenWidth = window.screen.width > 1920 ? 1920 : window.screen.width
  const marginSide = (screenWidth - containerWidth) / 2

  if (carousel.value) {
    for (let index = 0; index < carousel.value.children.length; index++) {
      const firstChild = carousel.value.children[0] as HTMLElement
      const lastChild = carousel.value.children[carousel.value.children.length - 1] as HTMLElement
      firstChild.style.marginLeft = `${marginSide}px`
      lastChild.style.marginRight = `${marginSide}px`
    }
  }
}

onMounted(() => {
  // задаем ширину кнопке скроллбара
  if (thumb.value && carousel.value) {
    thumb.value.style.width = `${carousel.value.clientWidth / carousel.value.children.length}px`
  }
  // вызываем функцию updateThumbPosition, если пользователь скролил нажав соечетаний клавиш "Shift + scroll"(в деск версии)
  // и в моб версии, хотя он скрыт.
  // вызываем функцию, чтобы обновить место положение кнопки скролбара
  carousel.value?.addEventListener("scroll", () => {
    updateThumbPosition()
  })
  // carousel на всю ширину экрана, т.е. максимум ширина 1920px
  // первоначальное положение первого слайда(отступ слева) начинается где .container, т.е. в линию по вертикали
  setMarginsToSlides()
})
</script>

<template>
  <div cls="carousel">
    <div
      ref="carousel"
      cls="carousel__slider"
      :style="`gap:${gap}px`"
      @mousemove="dragging"
      @mousedown="dragStart"
      @mouseup="dragStop"
      @mouseleave="dragStop"
    >
      <slot />
    </div>
    <div v-if="scrollBar" class="container">
      <div cls="carousel__scrollbar">
        <div ref="scrollbar" cls="carousel__scrollbar-track">
          <div ref="thumb" cls="carousel__scrollbar-thumb" />
        </div>
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
    a,
    img,
    div {
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
      user-select: none;
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
  }
}
@include mobile {
  .carousel {
    gap: 32px;
  }
}
</style>
