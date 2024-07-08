<script setup lang="ts"></script>

<template>
  <r-grid cls="stats" desktop-column="4" :desktop-gaps="[24]">
    <div cls="stats__item">
      <div cls="stats__num">200+</div>
      <div cls="stats__text">Completed projects and satisfied customers</div>
      <img src="@/assets/images/about/graphic.svg" alt="" />
    </div>
    <div cls="stats__item">
      <div cls="stats__num">5 years</div>
      <div cls="stats__text">He has been living and traveling across Asian countries</div>
      <img src="@/assets/images/tempImages/Vector.svg" alt="" />
    </div>
    <div cls="stats__item">
      <div cls="stats__num">15</div>
      <div cls="stats__text">Strong specialists in their field</div>
      <img src="@/assets/images/tempImages/team.png" alt="" />
    </div>
    <div cls="stats__item">
      <div cls="stats__num">200+</div>
      <div cls="stats__text">Completed projects and satisfied customers</div>
      <img src="@/assets/images/about/graphic.svg" alt="" />
    </div>
  </r-grid>
</template>

<style lang="scss" module>
.stats {
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    padding: 32px 24px 24px;
    height: 302px;
    border-radius: 16px;
    background: var(--gray);
    img {
      position: absolute;
      bottom: 0;
    }
    &:nth-child(1),
    &:nth-child(4) {
      img {
        width: calc(100% - 48px);
        height: 132px;
      }
    }
    &:nth-child(2) {
      img {
        right: 0;
      }
    }
    &:nth-child(3) {
      img {
        left: 0;
        width: calc(100% - 24px);
      }
    }
  }
  &__num {
    @include desctop-H3-ram;
    font-style: italic;
  }
}
</style>
