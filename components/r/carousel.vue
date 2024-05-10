<!--
  Костомный карусель
-->

<!-- TODO: 
***
  РЕФАКТОРИТЬ КОД!!!
***
  Передать св-во для определения отступов между слайдами и плюс сделать адаптивным, как в свайпер или в слик слайдер
-->

<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core"

const props = defineProps<{
  scrollBar?: boolean // показать/скрыть скролбар
  gap?: string
  tabletGap?: string
  mobGap?: string
  innerPaddingSides?: string
  innerMobPaddingSides?: string
  paddingSides?: string
  removeMargin?: boolean
}>()

const carouselWrap = ref<HTMLElement | null>(null), // карусель
  carousel = ref<HTMLElement | null>(null), // контейнер карусель
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

  if (carousel.value && !props.removeMargin) {
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
  // вызываем функцию updateThumbPosition, если пользователь скролил нажав соечетаний клавиш "Shift + scroll"
  // вызываем функцию, чтобы обновить место положение кнопки скролбара
  carousel.value?.addEventListener("scroll", () => {
    updateThumbPosition()
  })
  // carousel на всю ширину экрана, т.е. максимум ширина 1920px
  // первоначальное положение первого слайда(отступ слева) начинается где .container, т.е. в линию по вертикали
  setMarginsToSlides()
})

const deskPaddingSides = computed(() => {
  return `${props.paddingSides}px`
})

const paddingSides = computed(() => {
  return `${props.innerPaddingSides}px`
})

const paddingMobSides = computed(() => {
  return `${props.innerMobPaddingSides}px`
})

// gaps

const dGap = computed(() => {
  return `${props.gap}px`
})
const tGap = computed(() => {
  return `${props.tabletGap}px`
})
const mGap = computed(() => {
  return `${props.mobGap}px`
})

const cursorToggle = (e: any) => {
  if (e.type !== "mouseout" && carousel.value) {
    // carousel.value.style.cursor = "none"
  }
}
</script>

<template>
  <div ref="carousel-wrap" cls="carousel">
    <div
      ref="carousel"
      cls="carousel__slider"
      @mousemove="dragging"
      @mousedown="dragStart"
      @mouseup="dragStop"
      @mouseleave="dragStop"
      @mouseover="cursorToggle"
      @mouseout="cursorToggle"
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
    gap: v-bind(dGap);
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
  &__btn {
    display: flex;
    width: 104px;
    height: 104px;
    justify-content: center;
    align-items: center;
    background: #141414;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    svg {
      font-size: 24px;
      color: var(--White);
      path {
        stroke: var(--White);
      }
    }
  }
}

@include desktop-medium {
  .carousel {
    &__slider {
      padding-left: v-bind(deskPaddingSides);
      padding-right: v-bind(deskPaddingSides);
    }
  }
}

@include tablet {
  .carousel {
    gap: 40px;
    &__slider {
      gap: v-bind(tGap);
    }
  }
}
@include tablet-small {
  .carousel {
    &__slider {
      padding-left: v-bind(paddingSides);
      padding-right: v-bind(paddingSides);
    }
  }
}
@include mobile {
  .carousel {
    gap: 32px;
    &__slider {
      gap: v-bind(mGap);
      padding-left: v-bind(paddingMobSides);
      padding-right: v-bind(paddingMobSides);
    }
  }
}
</style>
