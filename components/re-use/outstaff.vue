<script setup lang="ts">
defineProps<{
  pretitle?: string
  title?: string
  linkOrBtn?: {
    text: string
    link: string
  }
}>()
</script>

<template>
  <div cls="outstaff" class="dark-background">
    <div class="container">
      <r-grid
        desktop-column="1"
        :desktop-gaps="[80]"
        :tablet-gaps="[64]"
        :mobile-gaps="[56]"
        cls="outstaff__wrap"
      >
        <r-grid
          desktop-column="1"
          :desktop-gaps="[104]"
          :tablet-gaps="[80]"
          :mobile-gaps="[56]"
          cls="outstaff__content"
        >
          <r-title :pretitle="pretitle" text-align="center" :title="title" color-white>
            <template #title>
              <slot name="title" />
            </template>
          </r-title>
          <div cls="outstaff__list">
            <slot />
          </div>
        </r-grid>
        <r-button v-if="linkOrBtn" bg-color="white" :to="linkOrBtn?.link" cls="outstaff__btn">
          {{ linkOrBtn?.text }}
        </r-button>
      </r-grid>
    </div>

    <div cls="outstaff__bg">
      <div cls="outstaff__gradient" />
      <img src="@/assets/images/about/bg.webp" alt="" />
    </div>
  </div>
</template>

<style module lang="scss">
.outstaff {
  background: var(--Black);
  margin: 24px 0;
  &__wrap {
    padding: 160px 0 0;
    max-width: 1920px;
    margin: 0 auto;
  }

  &__btn {
    max-width: max-content;
    margin: 0 auto;
  }
  &__bg {
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      max-height: 1187px;
    }
  }
  &__gradient {
    background: linear-gradient(
      180deg,
      #141414 14.18%,
      rgba(20, 20, 20, 0.83) 43.37%,
      rgba(20, 20, 20, 0) 100%
    );
    width: 100%;
    height: 421px;
    position: absolute;
    left: 0;
    top: 0;
  }
}
@include tablet {
  .outstaff {
    &__wrap {
      padding: 104px 0 0;
    }
    &__card {
      padding: 32px 16px;
      border-radius: 8px;
    }
    &__gradient {
      height: 221px;
    }
  }
}
@include tablet-small {
  .outstaff {
    &__card {
      &-icon {
        width: 48px;
        height: 48px;
      }
      &:nth-child(1),
      &:nth-child(4),
      &:nth-child(2) {
        svg {
          font-size: 21px;
          width: 21px;
        }
      }
      &:nth-child(3) {
        svg {
          font-size: 36px;
        }
      }
    }
  }
}
@include mobile {
  .outstaff {
    margin: 16px 0;
    &__gradient {
      height: 157px;
    }
    &__card {
      padding: 24px 16px;
    }
  }
}
</style>
