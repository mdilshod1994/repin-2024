<script setup lang="ts"></script>

<template>
  <div cls="portfolio">
    <div class="container">
      <div cls="portfolio__wrap">
        <r-title title="Our works">
          <template #addons>
            <portfolio-filters cls="portfolio__filter" />
          </template>
        </r-title>
        <div cls="portfolio__mob-filter">
          <r-carousel gap="8">
            <div class="tab -active">All</div>
            <div class="tab">Mobile</div>
            <div class="tab">Web Site</div>
            <div class="tab">Branding</div>
            <div class="tab">Crypto</div>
          </r-carousel>
        </div>
        <r-grid button :tablet-column="2" cls="portfolio__grid">
          <portfolio-card v-for="c in 6" cls="portfolio__card" />
        </r-grid>
      </div>
    </div>
    <div cls="portfolio__carousel">
      <div class="container">
        <r-title pretitle="We're online" title="Social Media" flex-start />
      </div>
      <r-carousel gap="24">
        <div v-for="s in 10" cls="portfolio__social" class="hover-border">
          <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="portfolio__social-img" />
          <a href="" cls="portfolio__social-link">
            <div cls="portfolio__social-icon">
              <svgo-youtube filled />
            </div>
            <span> Instagram </span>
          </a>
        </div>
      </r-carousel>
    </div>
  </div>
</template>

<style module lang="scss">
.portfolio {
  padding: 152px 0 160px;
  &__grid {
    padding-top: 104px;
  }
  &__card {
    &:nth-child(3n-1) {
      margin-top: -104px;
    }
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 104px;
    padding-bottom: 80px;
  }
  &__social {
    width: 410px;
    height: 410px;
    border-radius: 24px;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    &-link {
      position: absolute;
      left: 50%;
      bottom: 24px;
      transform: translateX(-50%);
      padding: 12px 16px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 48px;
      border: 0.5px solid transparent;
      z-index: 1;
      background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.15) 17.44%,
          rgba(255, 255, 255, 0) 134.25%
        ),
        rgba(255, 255, 255, 0.15);
      box-shadow: 0px 3.3px 22.191px 0px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(18.06315803527832px);
      span {
        color: var(--White);
        @include desctop-caption-17;
      }
    }
    &-icon {
      display: flex;
      width: 24px;
      height: 24px;
      padding: 4px 1.335px 4px 1.332px;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 16px;
      }
    }
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 24px;
    }
    &:first-child,
    &:nth-child(3) {
      width: 302px;
      border-radius: 256px;
      img {
        border-radius: 256px;
      }
    }
  }
  &__carousel {
    max-width: 1920px;
    margin: 0 auto;
    padding: 104px 0 0;
    display: flex;
    flex-direction: column;
    gap: 84px;
  }
  &__mob-filter {
    display: none;
  }
}
@include tablet {
  .portfolio {
    padding: 72px 0 88px;
    &__wrap {
      gap: 64px;
      padding-bottom: 56px;
    }
    &__grid {
      padding-top: 120px;
    }
    &__card {
      &:nth-child(3n-1) {
        margin-top: auto;
      }
      &:nth-child(2n-1) {
        margin-top: -120px;
      }
    }
    &__carousel {
      padding: 72px 0 0;
      gap: 64px;
    }
    &__social {
      width: 342px;
      height: 342px;
      border-radius: 16px;
      &:first-child,
      &:nth-child(3) {
        width: 221px;
      }
      &-link {
        padding: 8px 12px;
        span {
          @include mob-body-14;
        }
      }
    }
  }
}
@include tablet-small {
  .portfolio {
    &__filter {
      display: none;
    }
    &__mob-filter {
      display: block;
      margin: 88px -24px 32px;
    }
    &__wrap {
      gap: 0;
    }
  }
}
@include mobile {
  .portfolio {
    &__mob-filter {
      margin: 88px -16px 32px;
    }
    &__social {
      width: 183px;
      height: 183px;
      &:first-child,
      &:nth-child(3) {
        width: 128px;
      }
      &-link {
        border-radius: 50%;
        padding: 10px;
        bottom: 16px;
        span {
          display: none;
        }
      }
      &-icon {
        padding: 3.333px 1.112px 3.333px 1.11px;
        width: 20px;
        height: 20px;
        svg {
          font-size: 17px;
        }
      }
    }
    &__grid {
      padding-top: 40px;
    }
    &__card {
      &:nth-child(2n-1) {
        margin-top: -40px;
      }
    }
  }
}
</style>
