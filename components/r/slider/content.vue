<script setup lang="ts">
import type { Slide } from "~/types/about"

const props = defineProps<{
  styleNumbers?: boolean
  contents: Slide[]
}>()

const cIdx = ref(0),
  transitionNumberName = ref("down"),
  timerCount = ref(0),
  timerId = ref<any>(null),
  setKeyframe = ref(false),
  keyToRestartInterval = ref(0)

// цикл слайдера
const loopSlides = () => {
  if (!props.contents) return
  if (cIdx.value < props.contents.length - 1) {
    cIdx.value++
  } else {
    cIdx.value = 0
  }
}

const currentPreviewIdx = computed(() => {
  return cIdx.value + 1
})

// к определенному слайду по клику
const toCurrSlide = (idx: number) => {
  cIdx.value = idx
  keyToRestartInterval.value++
  timerCount.value = 0
}
// интервал для слайдера, и можно сказать автоплэй

const intervalTest = 4 // секунда автоплэй

const percentageOfLine = ref(0)

const intervalFn = () => {
  return setInterval(
    () => {
      timerCount.value++
      if (timerCount.value === intervalTest * (intervalTest * 10)) {
        loopSlides()
        timerCount.value = 0
      }
      percentageOfLine.value = (timerCount.value / (intervalTest * (intervalTest * 10))) * 100
    },
    1000 / (intervalTest * 10),
  )
}

watch(
  () => keyToRestartInterval.value,
  () => {
    timerCount.value = 0
    clearInterval(timerId.value)
    timerId.value = intervalFn()
  },
)

const pause = (idx: number, e: MouseEvent | TouchEvent) => {
  if (idx === cIdx.value && e.type === "mousemove") {
    clearInterval(timerId.value)
  }
}
const play = () => {
  clearInterval(timerId.value)
  timerId.value = intervalFn()
}

onMounted(() => {
  timerId.value = intervalFn()
  setKeyframe.value = true
})
</script>

<template>
  <div v-if="contents?.length" cls="block">
    <!-- <r-slider-pagination-number v-model:cIdx="currentPreviewIdx" :qnty-slides="contents.length" /> -->
    <div cls="block__right">
      <div cls="block__right-box">
        <div v-if="contents" cls="block__contents">
          <div
            v-for="(c, idx) in contents"
            :cls="{ 'block__contents-item': true, '-active': idx === cIdx && setKeyframe }"
            @click="toCurrSlide(idx)"
            @mousemove="pause(idx, $event)"
            @touchstart="pause(idx, $event)"
            @mouseleave="play"
          >
            {{ c.name }} <span :style="`width: ${percentageOfLine}%`" />
          </div>
        </div>
      </div>
      <transition
        :name="`slide-${transitionNumberName}`"
        tag="div"
        cls="block__descriptions"
        mode="out-in"
      >
        <div v-if="currentPreviewIdx" :key="cIdx" cls="block__descriptions-block">
          <div cls="block__descriptions-text" v-html="contents[cIdx].text" />
        </div>
      </transition>
    </div>
  </div>
</template>

<style module lang="scss">
.block {
  padding: 24px;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 72px;
  &__right {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
      max-width: 411px;
    }
    &-text {
      display: flex;
      flex-direction: column;
      gap: 16px;
      @include desctop-caption-17;
      &.-bold {
        @include desctop-caption-17-med;
      }
    }
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

@include tablet {
  .numbers {
    width: 75px;
    height: 32px;
    top: 32px;
    left: 32px;
    @include mob-body-14;
  }
}

@include tablet-small {
  .block {
    gap: 32px;
    &__contents {
      gap: 14px;
      &-item {
        @include mob-H2-ram;
        font-style: italic;
      }
    }
    &__descriptions {
      &-text {
        @include mob-body-14;
        &.-bold {
          @include mob-body-14-db;
        }
      }
    }
  }
}

@include mobile {
  .block {
    &__right {
      gap: 56px;
      max-width: 100%;
      flex-direction: column;
    }
    &__descriptions {
      &-block {
        max-width: 100%;
      }
      &-text {
        gap: 8px;
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
