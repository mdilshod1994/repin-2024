<script setup lang="ts">
import { type Category } from "~/types"

const filterBtns = ref<HTMLElement | null>(null)

const widthFirstBtn = computed(() => {
  if (!filterBtns.value) return
  return `${Math.ceil(filterBtns.value?.children[0].clientWidth)}px`
})

const width = computed(() => {
  if (!filterBtns.value) return
  return `${filterBtns.value?.scrollWidth}px`
})

onMounted(() => {
  console.log()
})

defineProps<{
  categories?: Category[]
}>()

const show = ref(false)
const showFilters = () => {
  show.value = !show.value
}
</script>

<template>
  <div v-if="categories" cls="filter">
    <button cls="filter__slider" @click="showFilters">
      <svgo-sliders />
    </button>
    <div ref="filterBtns" :cls="{ filter__btns: true, '-show': show }">
      <button :cls="{ filter__btn: true, '-active': true }"><span>All</span></button>
      <button
        v-for="category in categories"
        :cls="{ filter__btn: true, '-active': false, '-show': show }"
      >
        <span> {{ category.name }}</span>
      </button>
    </div>
  </div>
</template>

<style module lang="scss">
.filter {
  display: inline-flex;
  padding: 8px 8px 8px 32px;
  align-items: center;
  gap: 24px;
  border-radius: 108px;
  background: var(--Black);
  backdrop-filter: blur(14px);
  height: max-content;
  overflow: hidden;
  transition: 1s ease-in-out;
  &__slider {
    display: flex;
    svg {
      font-size: 24px;
    }
  }
  &__btns {
    display: flex;
    gap: 8px;
    width: v-bind(widthFirstBtn);
    transition: 0.3s ease-in-out;
    &.-show {
      gap: 8px;
      width: v-bind(width);
    }
  }
  &__btn {
    height: 52px;
    display: flex;
    padding: 0 28px;
    justify-content: center;
    align-items: center;
    border-radius: 98px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s ease-in-out;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    flex-shrink: 0;
    &:not(:first-child) {
      &:nth-child(2) {
        transform: translateY(-100px);
      }
      &:nth-child(3) {
        transform: translateY(100px);
        transition-delay: 0.1s;
      }
      &:nth-child(4) {
        transform: translateY(-100px);
        transition-delay: 0.2s;
      }
    }
    &.-active {
      background: #fff;
      border: 1px solid rgba(255, 255, 255, 0.8);
      color: #000;
    }
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      span {
        animation:
          MoveScaleUpInitial 0.3s forwards,
          MoveScaleUpEnd 0.3s forwards 0.3s;
      }
    }
    &.-show {
      transform: translateY(0) !important;
    }
    @keyframes MoveScaleUpInitial {
      100% {
        transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
        opacity: 0;
      }
    }
    @keyframes MoveScaleUpEnd {
      0% {
        transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
        opacity: 0;
      }
      100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
}

@include tablet {
  .filter {
    padding: 4px 4px 4px 24px;
    gap: 16px;
    &__slider {
      svg {
        font-size: 20px;
      }
    }
    &__btn {
      height: 48px;
      padding: 0 24px;
      @include mob-body-14-med;
    }
  }
}
</style>
