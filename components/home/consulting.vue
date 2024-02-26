<template>
  <div cls="consulting">
    <div cls="consulting__bg">
      <img src="@/assets/images/tempImages/consulting.png" alt="" />
    </div>
    <div cls="consulting__content">
      <div cls="consulting__box">
        <div cls="consulting__pretitle">Digital Transformation</div>
        <div cls="consulting__title">Consulting</div>
        <div cls="consulting__desc">
          Our team will provide you with expert knowledge and guidance on digital strategy, process
          optimisation, and implementing innovative technologies into your business.
        </div>
      </div>
      <r-button bg-color="white">Discover the programs</r-button>
    </div>
  </div>
</template>

<style module lang="scss">
.consulting {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 72px;
    max-width: 485px;
    color: var(--White);
    text-align: center;
  }
  &__box {
    display: flex;
    flex-direction: column;
  }
  &__pretitle {
    @include desctop-H5-ram;
  }
  &__title {
    @include desctop-H1;
    margin: 32px 0 16px;
  }
  &__desc {
    @include desctop-caption-17;
  }
}
@include tablet {
  .consulting {
    &__content {
      gap: 48px;
      max-width: 395px;
    }
    &__title {
      margin: 24px 0 16px;
      @include mob-H1;
    }
    &__pretitle {
      @include mob-sub-16;
    }
  }
}
</style>
