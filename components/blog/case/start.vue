<script setup lang="ts"></script>

<template>
  <div cls="start">
    <div cls="start__content">
      <div cls="start__title">
        <span>I want to try,</span> <br />
        where do I start?
      </div>
      <div cls="start__desc">
        You can take a couple of easy tasks that do not require any special skills. And if you want
        to choose a specific specialization, first it is better to get professional skills in it.
        For example, take a freelance designer course from Skillbox: it will teach you not only the
        basics of design, but also how to find clients and build relationships with them.
      </div>
    </div>
    <r-button cls="start__btn" bg-color="white"> Start a cource </r-button>
  </div>
</template>

<style lang="scss" module>
.start {
  display: flex;
  padding: 144px 96px;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  background: url("@/assets/images/tempImages/bg-blog.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 32px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    color: var(--White);
  }
  &__title {
    @include desctop-H2;
    span {
      @include desctop-H2-ram;
      font-style: italic;
    }
  }
  &__desc {
    max-width: 644px;
  }
}
@include desktop-medium {
  .start {
    padding: 96px;
  }
}
@include tablet {
  .start {
    padding: 72px 96px;
    gap: 32px;
    &__content {
      gap: 16px;
    }
    &__title {
      @include mob-H1;
      span {
        @include mob-H1-ram;
        font-style: italic;
      }
    }
  }
}
@include mobile {
  .start {
    padding: 80px 40px;
    &__content {
      gap: 32px;
    }
    &__title {
      @include mob-H2;
      span {
        @include mob-H2-ram;
        font-style: italic;
      }
    }
  }
}
</style>
