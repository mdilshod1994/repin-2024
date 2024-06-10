<script setup lang="ts"></script>

<template>
  <div cls="scroll">
    <div cls="scroll__scrollbar">
      <div cls="scroll__thumbnail" />
    </div>
    <button cls="scroll__arrow -up">
      <svgo-arrow-up />
    </button>
    <button cls="scroll__arrow -down">
      <svgo-arrow-up />
    </button>
  </div>
</template>

<style lang="scss" module>
.scroll {
  position: relative;
  height: 85svh;
  &__scrollbar {
    height: 100%;
    width: 2px;
    position: relative;
    background: var(--gray);
  }
  &__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: var(--Black);
  }
  &__arrow {
    position: absolute;
    left: -32px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 12px;
    }
    &.-up {
      top: 0;
    }
    &.-down {
      bottom: 0;
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
