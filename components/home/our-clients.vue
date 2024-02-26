<template>
  <div cls="clients">
    <r-title pretitle="Reviews" title="Our clients" />
    <r-carousel scroll-bar>
      <div v-for="s in 10" cls="clients-card">
        <div cls="clients-card__logo">
          <svgo-pavel />
        </div>
        <div cls="clients-card__content">
          <div cls="clients-card__title">Pavel Rakov</div>
          <div cls="clients-card__text">
            Я помогаю предпринимателям найти баланс между работой и личной жизнью благодаря
            системному подходу к достижению личных и бизнес целей.
          </div>
        </div>
      </div>
    </r-carousel>
  </div>
</template>

<style module lang="scss">
.clients {
  display: flex;
  flex-direction: column;
  gap: 128px;
  &-card {
    max-width: 362px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    &__logo {
      height: 60px;
      svg {
        height: 100%;
        width: auto;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__title {
      @include desctop-H5-ram;
    }
  }
}
@include tablet {
  .clients {
    gap: 80px;
    &-card {
      gap: 32px;
      max-width: 256px;
      &__content {
        gap: 8px;
      }
      &__logo {
        height: 48px;
      }
      &__title {
        @include mob-sub-16;
      }
    }
  }
}
</style>
