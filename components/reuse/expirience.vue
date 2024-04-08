<script setup lang="ts"></script>

<template>
  <div cls="expirience">
    <div cls="expirience__content">
      <div cls="expirience__top">
        <div cls="expirience__title">
          <span>Repin Agency &</span> <br />
          Mobicom
        </div>
        <div cls="expirience__text">
          We teamed up and significantly improved the quality of customer service. Now we can use
          all the knowledge and 20 years of experience of both companies' specialists to solve any
          issues as efficiently as possible.
        </div>
      </div>
      <div cls="expirience__ceo">
        <r-author name="Ivan Repin" profession="Founder Repin Agency">
          <img src="@/assets/images/avatar/ivan.png" alt="" />
        </r-author>
        <r-author name="Ilya Semenov " profession="CEO of Mobicom">
          <img src="@/assets/images/avatar/ilya.png" alt="" />
        </r-author>
      </div>
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
  &__ceo {
    display: flex;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  &__top {
    display: flex;
    flex-direction: column;
    max-width: 411px;
    gap: 24px;
  }
  &__title {
    @include desctop-H3;
    span {
      @include desctop-H3-ram;
      font-style: italic;
    }
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
