<script setup lang="ts"></script>

<template>
  <div cls="preloader">
    <div cls="preloader__wrap">
      <div cls="preloader__texts">
        <div cls="preloader__text">Kiss my pixel</div>
        <div cls="preloader__text">Kiss my pixel</div>
      </div>
      <div cls="preloader__progess">
        <div cls="preloader__percentage">62%</div>
      </div>
    </div>
  </div>
</template>

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
  }
  &__text {
    @include desctop-H2-ram;
    font-style: italic;
    white-space: nowrap;
    &:first-child {
      position: absolute;
      color: rgba(0, 0, 0, 0.2);
    }
    &:last-child {
      color: var(--Black);
      z-index: 1;
      overflow: hidden;
      width: 50%;
      transition: 0.1s ease-in-out;
    }
  }
  &__progess {
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 4px solid var(--Black);
    width: 56%;
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
