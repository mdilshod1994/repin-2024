<script setup lang="ts">
import type { ItemsB2 } from "~/types/about"

defineProps<{
  fullCycle?: ItemsB2[]
  title?: string
  description?: string
}>()
</script>

<template>
  <div cls="full-cycle">
    <r-grid
      cls="full-cycle__wrap"
      desktop-column="1"
      :desktop-gaps="[157]"
      :tablet-gaps="[80]"
      :mobile-gaps="[80]"
    >
      <div class="container">
        <div cls="full-cycle__block">
          <div cls="full-cycle__title">{{ title }}</div>
          <div cls="full-cycle__desc" v-html="description" />
        </div>
      </div>
      <div cls="full-cycle__carousel">
        <r-carousel
          remove-margin
          gap="24"
          tablet-gap="20"
          mob-gap="20"
          padding-sides="24"
          inner-padding-sides="16"
          inner-mob-padding-sides="16"
          destroy-carousel="450"
        >
          <div cls="full-cycle__item">
            <div cls="full-cycle__box">
              <div cls="full-cycle__box-wrap">
                <div cls="full-cycle__qnty">10</div>
                <div cls="full-cycle__text -first">Countries where we launched our apps</div>
              </div>
              <img
                src="@/assets/images/about/graphic.svg"
                alt=""
                cls="full-cycle__box-graphic"
                loading="lazy"
              />
            </div>
          </div>
          <div cls="full-cycle__item">
            <div cls="full-cycle__box">
              <div cls="full-cycle__box-wrap">
                <div cls="full-cycle__qnty">22</div>
                <div cls="full-cycle__text">
                  Strong specialists with experience of UX/UI Design and Development
                </div>
              </div>
              <div cls="full-cycle__box-avatars">
                <img src="@/assets/images/about/ivan.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/tanya.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/ilya.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/katya.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/vadim.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/vladiz.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/dil.webp" alt="" srcset="" loading="lazy" />
                <img src="@/assets/images/about/ieroglif.svg" alt="" srcset="" loading="lazy" />
              </div>
            </div>
          </div>
          <div cls="full-cycle__item">
            <div cls="full-cycle__box">
              <div cls="full-cycle__box-wrap">
                <div cls="full-cycle__qnty">250+</div>
                <div cls="full-cycle__text">
                  Completed projects and <br />
                  satisfied customers
                </div>
              </div>
              <div cls="full-cycle__box-btn">Top-rated apps</div>
            </div>
            <img
              src="@/assets/images/about/phone.webp"
              alt=""
              cls="full-cycle__item-img"
              loading="lazy"
            />
          </div>
        </r-carousel>
      </div>
    </r-grid>
  </div>
</template>

<style lang="scss" module>
.full-cycle {
  width: 100%;
  margin: 0 auto;
  &__wrap {
    border-radius: 24px;
    padding: 144px 0 0;
    color: var(--Black);
  }
  &__block {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    padding: 0 24px;
    margin: 0 auto;
  }
  &__title {
    @include desctop-H5-ram;
  }
  &__desc {
    @include desctop-H3;
    max-width: 730px;
    span {
      @include desctop-H3-ram;
      font-style: italic !important;
    }
  }
  &__item {
    width: 33.33%;
    border-radius: 24px;
    background: #f5f5f5;
    height: 272px;
    overflow: hidden;
    padding: 28px 32px 32px;
    position: relative;
    min-width: 448px;
    &-img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 219px;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    &-graphic {
      position: absolute;
      right: 0;
      bottom: -40px;
      width: 384px;
      height: 192px;
    }
    &-avatars {
      display: flex;
      padding-left: 18px;
      img {
        margin-left: -18px;
        width: 64px;
        height: 64px;
      }
    }
    &-btn {
      padding: 8px 16px;
      border-radius: 48px;
      background: #fff;
      width: max-content;
    }
  }
  &__qnty {
    @include desctop-H3;
  }
  &__text {
    color: #000;
    max-width: 256px;
  }
  &__carousel {
    max-width: 1440px;
    padding: 0 24px;
    margin: 0 auto;
  }
}
@include desktop-medium {
  .full-cycle {
    padding: 24px 0;
    &__carousel {
      max-width: 100%;
      overflow: hidden;
      padding: 0;
    }
    &__block {
      max-width: 100%;
      padding: 0;
    }
  }
}
@include tablet {
  .full-cycle {
    padding: 16px 0;

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
      padding: 104px 0 0;
      border-radius: 16px;
      overflow: hidden;
    }
    &__qnty {
      @include mob-H2;
    }
  }
}
@include tablet-small {
  .full-cycle {
    &__carousel {
      padding: 0;
      overflow: hidden;
      margin: 0;
    }
    &__wrap {
      width: auto;
      padding: 72px 0;
    }
    &__qnty {
      @include mob-H3;
    }
    &__item {
      min-width: 390px;
      height: 220px;
      padding: 16px 24px 24px;
      border-radius: 16px;
      &-img {
        width: 185px;
      }
    }
    &__box {
      &-avatars {
        img {
          height: 56px;
          width: 56px;
        }
      }
    }
  }
}
@include mobile {
  .full-cycle {
    padding: 16px 0;
    &__desc {
      max-width: 100%;
    }
    &__block {
      flex-direction: column;
      gap: 16px;
    }
    &__qnty,
    &__text {
      position: initial;
    }
    &__item {
      height: 180px;
      padding: 16px;
      min-width: 320px;
      &-img {
        width: 130px;
      }
    }
    &__box {
      &-wrap {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      &-graphic {
        width: 100%;
        height: auto;
      }
      &-avatars {
        img {
          width: 48px;
          height: 48px;
          margin-left: -16px;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .full-cycle {
    &__item {
      min-width: 100%;
      max-width: 100%;
      height: 208px;
      padding: 22px 24px 24px;
      &-img {
        width: 174px;
        right: -14px;
      }
    }
    &__qnty {
      font-size: 34.433px;
      font-style: normal;
      font-weight: 500;
      line-height: 41.32px;
      letter-spacing: -1.033px;
    }
    &__text {
      &.-first {
        max-width: 146px;
      }
    }
  }
}
</style>
