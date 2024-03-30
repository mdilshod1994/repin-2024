<script setup lang="ts"></script>

<template>
  <div cls="full-cycle">
    <r-grid
      cls="full-cycle__wrap"
      desktop-column="1"
      :desktop-gaps="[160]"
      :tablet-gaps="[80]"
      :mobile-gaps="[80]"
    >
      <div cls="full-cycle__block">
        <div cls="full-cycle__title">About</div>
        <div cls="full-cycle__desc">
          Full-cycle agency for creating unique digital products
          <span> from scratch and enhancing existing features </span>of your web projects
        </div>
      </div>
      <div cls="full-cycle__carousel">
        <r-carousel
          remove-margin
          gap="24"
          tablet-gap="20"
          mob-gap="12"
          inner-padding-sides="32"
          inner-mob-padding-sides="16"
          hide-cursor-follow
        >
          <div v-for="s in 4" cls="full-cycle__item">
            <div cls="full-cycle__box">
              <div cls="full-cycle__qnty">10+</div>
              <div cls="full-cycle__text">Countries where we launched our solutions</div>
            </div>
          </div>
        </r-carousel>
      </div>
    </r-grid>
  </div>
</template>

<style lang="scss" module>
.full-cycle {
  max-width: 1920px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  &__wrap {
    border-radius: 24px;
    padding: 160px 56px;
    background: var(--Black);
    color: var(--White);
  }
  &__block {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    @include desctop-H5-ram;
  }
  &__desc {
    @include desctop-H3;
    max-width: 628px;
    span {
      @include desctop-H3-ram;
      font-style: italic;
    }
  }
  &__item {
    width: 25%;
    border-radius: 12px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background: rgba(144, 144, 144, 0.1);
  }
  &__box {
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }
  &__qnty {
    @include desctop-H2-ram;
    position: absolute;
    left: 20px;
    top: 16px;
    font-style: italic;
  }
  &__text {
    color: rgba(255, 255, 255, 0.8);
    max-width: 200px;
    position: absolute;
    bottom: 24px;
    left: 24px;
  }
}
@include tablet {
  .full-cycle {
    padding: 16px;
    &__title {
      @include mob-sub-16;
    }
    &__desc {
      max-width: 454px;
      @include mob-H3;
      span {
        @include mob-H3-ram;
      }
    }
    &__wrap {
      padding: 104px 32px 120px 32px;
    }
    &__qnty {
      @include mob-H2-ram;
      font-style: italic;
    }
  }
}
@include tablet-small {
  .full-cycle {
    &__carousel {
      overflow: hidden;
      margin: 0 -32px;
    }
    &__item {
      width: 216px;
      flex-shrink: 0;
      height: 188px;
    }
    &__box {
      padding-bottom: 0;
      height: 100%;
    }
  }
}
@include mobile {
  .full-cycle {
    padding: 16px 0;
    &__wrap {
      padding: 104px 16px 120px;
    }
    &__desc {
      max-width: 100%;
    }
    &__block {
      flex-direction: column;
      gap: 16px;
    }
    &__carousel {
      margin: 0 -16px;
    }
    &__box {
      display: flex;
      flex-direction: column;
      gap: 56px;
      padding: 20px 24px 24px;
    }
    &__qnty,
    &__text {
      position: initial;
    }
  }
}
</style>
