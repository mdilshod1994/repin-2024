<script setup lang="ts"></script>

<template>
  <div cls="card">
    <div cls="card__img">
      <img src="@/assets/images/tempImages/card.png" alt="" />
    </div>
    <div cls="card__content">
      <div cls="card__top">
        <div cls="card__title">Capital Luxary</div>
        <r-round-button cls="card__btn" size="small" />
      </div>
      <div cls="card__desc">
        A site with an extensive portfolio of apartments, penthouses, townhouses, luxury villas and
        more.
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.card {
  &:nth-child(3n-1) {
    margin-top: -104px;
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  &__img {
    height: 604px;
    border-radius: 24px;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    padding: 4px;
    position: relative;
    img {
      border-radius: 24px;
      position: relative;
      height: 100%;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0.99);
      opacity: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #b6a2e0, #4e4cb5, #d7d7d1);
      transition: 0.3s ease-in-out;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  &__title {
    @include desctop-H5-ram;
  }
  &:hover {
    .card {
      &__img {
        &::after {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }
      &__btn {
        &:global(.round-button) {
          background: var(--Black);
          svg path {
            stroke: #fff;
          }
        }
      }
    }
  }
}
</style>
