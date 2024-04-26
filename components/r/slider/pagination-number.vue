<script setup lang="ts">
defineProps<{
  qntySlides?: number
  styleNumbers?: boolean
}>()
const transitionNumberName = ref("down")
const cIdx = defineModel<number>("cIdx")
</script>

<template>
  <div :cls="{ numbers: true, '-styled': styleNumbers }">
    <transition :name="`slide-${transitionNumberName}`" tag="div" mode="out-in">
      <div v-if="cIdx" :key="cIdx">{{ cIdx }}</div>
    </transition>
    /
    <div>
      {{ qntySlides }}
    </div>
  </div>
</template>

<style module lang="scss">
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
