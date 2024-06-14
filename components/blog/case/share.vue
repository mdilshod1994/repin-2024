<!-- 
TODO: 
икноки поставить 
-->

<script setup lang="ts"></script>

<template>
  <div cls="share">
    <div cls="share__title">Share this story</div>
    <div cls="share__line" />
    <div cls="share__list">
      <div cls="share__link">tw</div>
      <div cls="share__link">tg</div>
      <div cls="share__link">vk</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.share {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 84px;
  height: max-content;
  position: sticky;
  top: 100px;
  z-index: 1;
  &__title {
    text-align: center;
  }
  &__line {
    width: 3px;
    height: 1px;
    background: var(--gray);
  }
  &__list {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
  }
  &__link {
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 28px;
      color: var(--Black);
    }
  }
}
@include tablet {
  .share {
    gap: 16px;
    &__link {
      width: 48px;
      height: 48px;
    }
  }
}
@include mobile {
  .share {
    width: max-content;
    gap: 12px;
    &__line {
      display: none;
    }
    &__list {
      gap: 12px;
      flex-direction: row;
    }
    &__link {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
