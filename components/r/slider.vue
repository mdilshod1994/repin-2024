<!--
TODO:
Рефакторить код...
Сократить код...
Документировать код...
-->

<script setup lang="ts">
const props = defineProps<{
  pagination?: boolean
  slidesPerView?: number
  styleNumbers?: boolean
  modified?: boolean
  products?: []
}>()

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
  resetTimer()
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
  reseumeTimer(cIdx.value)
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

const loopSlides = () => {
  if (!props.products) return
  if (cIdx.value < props.products.length - 1) {
    cIdx.value++
  } else {
    cIdx.value = 0
  }
}

const cT = ref(0)

const interval = ref()

const funcInterval = () => {
  return setInterval(() => {
    cT.value += 0.05
    if (cT.value < 4) {
    } else {
      cT.value = 0
      loopSlides()
      scrollIntoView(cIdx.value)
    }
  }, 50)
}

onMounted(() => {
  interval.value = funcInterval()
})
const pauseTimer = (idx: number) => {
  if (idx === cIdx.value) {
    clearInterval(interval.value)
  }
}
const reseumeTimer = (idx: number) => {
  if (idx === cIdx.value) {
    interval.value = funcInterval()
  }
}
const resetTimer = () => {
  clearInterval(interval.value)
  cT.value = 0
}
const toCurrSlide = (idx: number) => {
  cIdx.value = idx
  scrollIntoView(idx)
  reseumeTimer(idx)
  resetTimer()
}
</script>

<template>
  <div :cls="{ block: true, '-modified': modified }">
    <div cls="block__right">
      <div cls="block__right-box">
        <div v-if="slider" :cls="{ numbers: true, '-styled': styleNumbers }">
          <transition :name="`slide-${transitionNumberName}`" tag="div" mode="out-in">
            <div v-if="true" :key="cIdx">{{ cIdx + 1 }}</div>
          </transition>
          /
          <div>
            {{ slider.children.length }}
          </div>
        </div>
        <div v-if="products" cls="block__contents">
          <div
            v-for="(c, idx) in products"
            :cls="{ 'block__contents-item': true, '-active': idx === cIdx }"
            @mousemove="pauseTimer(idx)"
            @mouseleave="reseumeTimer(idx)"
            @click="toCurrSlide(idx)"
          >
            {{ c.price }} <span />
          </div>
        </div>
      </div>
      <transition
        v-if="products?.length"
        :name="`slide-${transitionNumberName}`"
        tag="div"
        cls="block__descriptions"
        mode="out-in"
      >
        <div v-if="cIdx + 1" :key="cIdx" cls="block__descriptions-block">
          <div cls="block__descriptions-text">
            {{ products[cIdx].title }}
          </div>
          <div cls="block__descriptions-text -bold">
            {{ products[cIdx].description }}
          </div>
        </div>
      </transition>
    </div>
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

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to {
  transform: translateY(30px);
}
</style>

<style module lang="scss">
.block {
  padding: 24px;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  &__right {
    max-width: 411px;
    flex-direction: column;
    justify-content: space-between;
    &-box {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
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
      cursor: pointer;
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
      }
      @keyframes fullexpand {
        0% {
          width: 0%;
        }
        20% {
          width: 20%;
        }
        40% {
          width: 40%;
        }
        60% {
          width: 60%;
        }
        80% {
          width: 80%;
        }
        100% {
          width: 100%;
        }
      }

      &.-active {
        &:hover {
          span {
            animation-play-state: paused;
          }
        }
        color: var(--Black);
        &::after {
          display: block;
        }
        span {
          animation: fullexpand 4s linear forwards;
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
      &.-bold {
        @include desctop-caption-17-med;
      }
    }
  }
  &.-modified {
    display: flex;
    justify-content: space-between;
    padding: 0;
    .block {
      &__right {
        display: flex;
      }
    }
    .sliders {
      max-width: 599px;
      height: 714px;
      img {
        height: 100%;
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
  height: 40px;
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
  .block {
    padding: 16px;
    &.-modified {
      display: flex;
      justify-content: space-between;
      .sliders {
        max-width: 502px;
        height: 414px;
        border-radius: 0px;
        img {
          height: 100%;
        }
      }
    }
    &__right {
      &-box {
        gap: 24px;
      }
    }
    &__contents {
      gap: 12px;
      &-item {
        @include mob-H2-ram;
        font-style: italic;
        &.-active {
          &:hover {
            span {
              animation-play-state: running;
            }
          }
        }
      }
    }
    &__descriptions {
      &-text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        &.-bold {
          @include mob-body-14-db;
        }
      }
    }
  }
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
@include tablet-small {
  .block {
    &.-modified {
      gap: 24px;
      .block {
        &__right {
          max-width: 350px;
        }
      }
    }
  }
}
@include mobile {
  .sliders {
    height: 480px;
  }
  .block {
    &.-modified {
      .sliders {
        display: none;
      }
      .block {
        &__right {
          gap: 56px;
          max-width: 100%;
        }
      }
    }
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
