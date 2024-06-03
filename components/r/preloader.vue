<script setup lang="ts">
const store = usePreloaderTrigger()
const progess = ref<HTMLElement | null>(null)
const progessText = ref<HTMLElement | null>(null)
const i = computed(() => {
  return store.i
})
const width = computed(() => {
  return store.width
})
const count = computed(() => {
  return store.count
})
</script>

<template>
  <transition :name="`${count ? 'fade-loader' : ''}`">
    <div v-if="i" cls="preloader">
      <div cls="preloader__wrap">
        <div cls="preloader__texts">
          <div cls="preloader__text">Kiss my pixel</div>
          <div ref="progessText" cls="preloader__text" :style="`width: ${width}%`">
            Kiss my pixel
          </div>
        </div>
        <div ref="progess" cls="preloader__progess" :style="`width: ${width}%`">
          <div cls="preloader__percentage">{{ width }}%</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-loader-enter-active,
.fade-loader-leave-active {
  transition: 0.7s ease-in-out;
}
.fade-loader-enter-active {
  transition-delay: 0.3s;
}
.fade-loader-enter-from {
  transform: translateY(-100px);
  opacity: 0;
}
.fade-loader-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.fade-loader-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

<style module lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background: var(--White);
  z-index: 9;
  overflow: hidden;
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
      width: 0%;
      position: absolute !important;
      left: 0 !important;
      transition: 0.2s ease-in-out;
    }
  }
  &__progess {
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 4px solid var(--Black);
    display: flex;
    justify-content: flex-end;
    transition: 0.2s ease-in-out;
  }
  &__percentage {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
}
@include mobile {
  .preloader {
    &__text {
      font-size: 40px;
      font-style: italic;
      font-weight: 400;
      line-height: 48px;
      letter-spacing: -1.2px;
    }
  }
}
</style>
