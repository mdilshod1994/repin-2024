<script setup lang="ts"></script>

<template>
  <div cls="card">
    <div cls="card__img" class="hover-border">
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
    img {
      height: 100%;
      border-radius: 24px;
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
    text-decoration: underline transparent;
    transition: text-decoration 0.3s ease-in-out;
  }
  &:hover {
    .card {
      &__btn {
        &:global(.round-button) {
          background: var(--Black);
          svg path {
            stroke: #fff;
          }
        }
      }
      &__title {
        text-decoration-color: var(--Black);
      }
    }
  }
}

@include desktop-medium {
  .card {
    &__img {
      height: 488px;
    }
  }
}
@include tablet {
  .card {
    gap: 12px;
    &:nth-child(3n-1) {
      margin-top: auto;
    }
    &:nth-child(2n-1) {
      margin-top: -120px;
    }
    &__img {
      height: 548px;
      img {
        width: 100%;
        height: 100%;
        object-position: center;
      }
    }
    &__title {
      @include mob-h4-22-ram;
    }
  }
}
</style>
