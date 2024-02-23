<script setup lang="ts"></script>

<template>
  <div cls="filter">
    <button cls="filter__slider">
      <svgo-sliders />
    </button>
    <div cls="filter__btns">
      <button :cls="{ filter__btn: true, '-active': true }">All</button>
      <button cls="filter__btn">Mobile</button>
      <button cls="filter__btn">Web Site</button>
      <button cls="filter__btn">Branding</button>
      <button cls="filter__btn">Crypto</button>
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
  &__slider {
    display: flex;
    svg {
      font-size: 24px;
    }
  }
  &__btns {
    display: flex;
    gap: 8px;
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
    &.-active {
      background: #fff;
      border: 1px solid rgba(255, 255, 255, 0.8);
      color: #000;
    }
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
