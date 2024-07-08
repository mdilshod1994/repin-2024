<script setup lang="ts"></script>

<template>
  <r-grid desktop-column="1" :desktop-gaps="[144]" cls="invest">
    <div cls="invest__top">
      <div cls="invest__top-left">
        <span>Invest in your future</span> — <br />
        choose the tariff that suits you best
      </div>
      <div cls="invest__top-right">
        <div cls="invest__top-icon">
          <svgo-info />
        </div>
        <div cls="invest__top-text " class="text">
          Each employee of Repin Agency is an expert in his field, who independently makes
          responsible decisions and can always count on the support of the team. For quick
          introduction to the position, we provide regulations and instructions.
        </div>
      </div>
    </div>
    <r-grid desktop-column="3" :desktop-gaps="[23.5]">
      <div cls="invest__item">
        <div cls="invest__item-bg" />
        <div cls="invest__item-wrap">
          <div cls="invest__item-top">
            <div cls="invest__item-top-title">Popcorn</div>
            <div cls="invest__item-top-text">
              We have developed convenient work formats for everyone: popcorn for those who like to
              immerse themselves in learning
            </div>
          </div>
          <div cls="invest__item-center">
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">workload</div>
              <div cls="invest__item-center-text">10 video lessons + materials</div>
            </div>
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">format</div>
              <div cls="invest__item-center-text">Theory + Practice</div>
            </div>
          </div>
          <div cls="invest__item-btm">
            <div cls="invest__item-btm-price">215 $</div>
            <r-button> Buy </r-button>
          </div>
        </div>
      </div>
      <div cls="invest__item">
        <div cls="invest__item-bg" />
        <div cls="invest__item-wrap">
          <div cls="invest__item-top">
            <div cls="invest__item-top-title">Flow</div>
            <div cls="invest__item-top-text">
              We have developed convenient work formats for everyone: popcorn for those who like to
              immerse themselves in learning
            </div>
          </div>
          <div cls="invest__item-center">
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">workload</div>
              <div cls="invest__item-center-text">10 video lessons + materials</div>
            </div>
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">format</div>
              <div cls="invest__item-center-text">Theory + Practice</div>
            </div>
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">preceptor</div>
              <div cls="invest__item-center-text">+2 hours of personal work with Ivan via Zoom</div>
            </div>
          </div>
          <div cls="invest__item-btm">
            <div cls="invest__item-btm-price">440 $</div>
            <r-button> Buy </r-button>
          </div>
        </div>
      </div>
      <div cls="invest__item">
        <div cls="invest__item-bg" />
        <div cls="invest__item-wrap">
          <div cls="invest__item-top">
            <div cls="invest__item-top-title">Implementation</div>
            <div cls="invest__item-top-text">
              We have developed convenient work formats for everyone: popcorn for those who like to
              immerse themselves in learning
            </div>
          </div>
          <div cls="invest__item-center">
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">workload</div>
              <div cls="invest__item-center-text">10 video lessons + materials</div>
            </div>
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">format</div>
              <div cls="invest__item-center-text">Theory + Practice</div>
            </div>
            <div cls="invest__item-center-box">
              <div cls="invest__item-center-title">preceptor</div>
              <div cls="invest__item-center-text">
                We will do everything for you and record video instructions for employees
              </div>
            </div>
          </div>
          <div cls="invest__item-btm">
            <div cls="invest__item-btm-price">6 200 $</div>
            <r-button> Buy </r-button>
          </div>
        </div>
      </div>
    </r-grid>
  </r-grid>
</template>

<style lang="scss" module>
.invest {
  &__top {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    &-left {
      max-width: 665px;
      @include desctop-H2;
      span {
        @include desctop-H2-ram;
        font-style: italic;
      }
    }
    &-right {
      display: flex;
      padding-top: 8px;
      flex-direction: column;
      gap: 16px;
    }
    &-icon {
      display: flex;
      width: 32px;
      height: 32px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: var(--gray);
      svg {
        font-size: 14px;
      }
    }
  }
  &__item {
    border-radius: 24px;
    background: var(--Gradient);
    position: relative;
    overflow: hidden;
    &-wrap {
      display: flex;
      padding: 32px;
      flex-direction: column;
      gap: 48px;
      z-index: 1;
      position: relative;
      height: 100%;
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: 24px;
      &-title {
        @include desctop-H3-ram;
        font-style: italic;
      }
    }
    &-top-text,
    &-center-text {
    }
    &-center {
      display: flex;
      flex-direction: column;
      gap: 16px;
      &-box {
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-self: stretch;
      }
      &-title {
        @include desctop-caps;
        opacity: 0.4;
      }
    }
    &-btm {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 26px;
      margin-top: auto;
      &-price {
        @include desctop-H4-ram;
      }
    }
    &-bg {
      background: linear-gradient(
        to bottom,
        rgba(245, 245, 245, 0),
        rgba(245, 245, 245, 0.1),
        rgba(245, 245, 245, 0.2),
        rgba(245, 245, 245, 0.3),
        rgba(245, 245, 245, 0.4),
        rgba(245, 245, 245, 0.5),
        rgba(245, 245, 245, 0.6),
        rgba(245, 245, 245, 0.7),
        rgba(245, 245, 245, 0.8),
        rgba(245, 245, 245, 0.9),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1)
      );
      position: absolute;
      width: 100%;
      height: 200%;
      top: -100%;
      left: 0;
      transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover &-bg {
      transform: translateY(100%);
    }
  }
}
</style>
