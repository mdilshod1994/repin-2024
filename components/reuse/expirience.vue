<script setup lang="ts"></script>

<template>
  <div cls="expirience">
    <div cls="expirience__content">
      <div cls="expirience__top">
        <div cls="expirience__title">Good organization of work, excellent</div>
        <div cls="expirience__text">
          "Good organization of work, excellent communication at every stage, from initiation and
          data collection, through execution and editing, and ending with the delivery of the
          finished result. Deep immersion in the tasks and goals of the project, resulted in an
          excellent result."
        </div>
      </div>
      <r-author name="Ivan Repin" profession="Art Direction" />
    </div>
    <div cls="expirience__img">
      <img
        src="https://i.vimeocdn.com/video/573150739-2be38bf1aaf4b5e60086ab76807d336b1f7d04dc31d85178b2db97434ed05754-d?f=webp"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.expirience {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 411px;
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__title {
    @include desctop-H3;
  }

  &__img {
    border-radius: 24px;
    height: 484px;
    width: 519px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
}
@include tablet {
  .expirience {
    &__content {
      gap: 32px;
    }
    &__top {
      gap: 16px;
    }
    &__title {
      @include mob-H2;
    }
    &__img {
      width: 340px;
      height: 318px;
    }
  }
}
@include mobile {
  .expirience {
    &__content {
      max-width: 100%;
    }
    &__img {
      display: none;
    }
    &__title {
      @include mob-h4-22;
    }
  }
}
</style>
