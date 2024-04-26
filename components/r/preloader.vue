<script setup lang="ts">
const test = ref(true)
const text = ref(false)

const intervalTest = 2 // секунда автоплэй

const percentageOfLine = ref(0)
const timerCount = ref(0)
const timerId = ref<any>(null) // для определения ID setInterval

const intervalFn = () => {
  return setInterval(
    () => {
      timerCount.value++

      if (timerCount.value === intervalTest * (intervalTest * 10)) {
        timerCount.value = 0
      }
      percentageOfLine.value = (timerCount.value / (intervalTest * (intervalTest * 10))) * 100
    },
    1000 / (intervalTest * 10),
  )
}

onMounted(() => {
  timerId.value = intervalFn()
  text.value = true
})

const percentVal = computed(() => {
  return `${percentageOfLine.value}%`
})

watch(
  () => percentageOfLine.value,
  (n) => {
    if (+n.toFixed() >= 95) {
      percentageOfLine.value = 100
      clearInterval(timerId.value)
      setTimeout(() => {
        test.value = false
        percentageOfLine.value = 0
        text.value = false
      }, 1000)
    }
  },
)

onBeforeMount(() => {
  clearInterval(timerId.value)
})
</script>

<template>
  <transition name="fade-loader">
    <div v-if="test" cls="preloader">
      <div cls="preloader__wrap">
        <div cls="preloader__texts">
          <div cls="preloader__text">Kiss my pixel</div>
          <div v-show="text" cls="preloader__text">Kiss my pixel</div>
        </div>
        <div cls="preloader__progess">
          <div cls="preloader__percentage">{{ percentageOfLine.toFixed() }}%</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-loader-enter-active,
.fade-loader-leave-active {
  transition: opacity 0.5s ease;
}

.fade-loader-enter-from,
.fade-loader-leave-to {
  opacity: 0;
}
</style>

<style module lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--White);
  z-index: 9;
  &__wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__texts {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__text {
    @include desctop-H2-ram;
    font-style: italic;
    white-space: nowrap;
    &:first-child {
      color: rgba(0, 0, 0, 0.2) !important;
    }
    &:last-child {
      color: var(--Black);
      z-index: 1;
      overflow: hidden;
      width: v-bind(percentVal);
      transition: 0.1s ease-in-out;
      position: absolute !important;
      left: 0 !important;
    }
  }
  &__progess {
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 4px solid var(--Black);
    width: v-bind(percentVal);
    display: flex;
    transition: 0.1s ease-in-out;
    justify-content: flex-end;
  }
  &__percentage {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
}
</style>
