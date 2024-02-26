<script setup lang="ts"></script>

<template>
  <div cls="stories">
    <r-title pretitle="Blog" title="Stories" italic-title="& User Cases">
      <template #addons>
        <nuxt-link to="" class="underline-link"> See all articles </nuxt-link>
      </template>
    </r-title>
    <div cls="stories__list">
      <nuxt-link v-for="c in 3" to="" cls="stories__card">
        <div cls="stories__card-content">
          <div cls="stories__card-box">
            <div cls="stories__card-title">
              A site with an extensive portfolio of apartments, penthouses, townhouses,
            </div>
            <div cls="stories__card-desc">
              Я помогаю предпринимателям найти баланс между работой и личной жизнью благодаря
              системному подходу к достижению личных и бизнес целей.
            </div>
          </div>
          <div cls="stories__card-link">
            <div cls="stories__card-text">5 min read</div>
            <r-round-button size="small" />
          </div>
        </div>
        <div cls="stories__img" class="hover-border">
          <img src="@/assets/images/tempImages/story.png" alt="" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style module lang="scss">
.stories {
  display: flex;
  flex-direction: column;
  gap: 64px;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    &-content {
      max-width: 519px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-title {
      font-family: "Ramillas Trial";
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: -0.96px;
      text-decoration: underline transparent;
      transition: text-decoration 0.3s ease-in-out;
    }
    &-desc {
      max-width: 421px;
    }
    &-link {
      display: flex;
      gap: 6px;
    }
    &-text {
      padding: 6px 16px;
      border-radius: 48px;
      background: #f5f5f5;
    }
    &:hover {
      :global(.hover-border) {
        &::after {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }
      :global(.round-button) {
        background: var(--Black);
        svg path {
          stroke: #fff;
        }
      }
      .stories {
        &__card {
          &-title {
            text-decoration-color: var(--Black);
          }
        }
      }
    }
  }
  &__img {
    max-width: 519px;
    height: 336px;
    border-radius: 24px;
    img {
      border-radius: 24px;
    }
  }
}

@include tablet {
  .stories {
    gap: 32px;
    &__img {
      max-width: 408px;
      height: 272px;
    }
    &__card {
      &-content {
        gap: 32px;
      }
      &-title {
        @include mob-h4-22-ram;
      }
    }
  }
}
</style>
