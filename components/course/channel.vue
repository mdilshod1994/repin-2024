<script setup lang="ts"></script>

<template>
  <div cls="channel">
    <div cls="channel__wrap">
      <div cls="channel__top">
        <div cls="channel__title">
          Comments on <br />
          <span> my YouTube channel </span>
        </div>
        <div cls="channel__desc">
          People often comment on my YouTube videos, saying that I have a talent for explaining
          complex things in simple terms without any fluff.
        </div>
      </div>
      <div cls="channel__bottom">
        <r-carousel>
          <div cls="channel__slider">
            <div cls="channel__slider-box">
              <div v-for="slider in 10" cls="channel__card">
                <div cls="channel__card-img">
                  <img src="@/assets/images/tempImages/t-ava.png" alt="" />
                </div>
                <div cls="channel__card-wrap">
                  <div cls="channel__card-box">
                    <div cls="channel__card-name">Дмитрий Ufatov</div>
                    <div cls="channel__card-date">5 месяцев назад</div>
                  </div>
                  <div cls="channel__card-comment">
                    Классный материал! Все системно и четко разожено! Удачи в развитии канала. Лайк
                    и подписка в колокол
                  </div>
                </div>
              </div>
            </div>
            <div cls="channel__slider-box">
              <div v-for="slider in 10" cls="channel__card">
                <div cls="channel__card-img">
                  <img src="@/assets/images/tempImages/t-ava.png" alt="" />
                </div>
                <div cls="channel__card-wrap">
                  <div cls="channel__card-box">
                    <div cls="channel__card-name">Дмитрий Ufatov</div>
                    <div cls="channel__card-date">5 месяцев назад</div>
                  </div>
                  <div cls="channel__card-comment">
                    Классный материал! Все системно и четко разожено! Удачи в развитии канала. Лайк
                    и подписка в колокол
                  </div>
                </div>
              </div>
            </div>
          </div>
        </r-carousel>

        <r-button bg-color="white"> Go on Youtube </r-button>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.channel {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  &__wrap {
    padding: 128px 0;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;
  }
  &__title {
    @include desctop-H2;
    span {
      @include desctop-H2-ram;
      font-style: italic;
    }
  }
  &__desc {
    @include desctop-body-22;
    max-width: 575px;
  }
}
</style>
