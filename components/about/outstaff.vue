<script setup lang="ts">
import type { EnPage, ItemsB4 } from "~/types/about"

const props = defineProps<{
  staff: EnPage
}>()

const items = computed(() => {
  return props.staff.items_b4 as ItemsB4[]
})
</script>

<template>
  <div cls="outstaff">
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
        <r-title :pretitle="staff.title_b4" text-align="center" color-white>
          <template #title>
            <div v-html="staff.subtitle_b4" />
          </template>
        </r-title>
        <r-grid
          cls="outstaff__list"
          desktop-column="4"
          mobile-column="2"
          :desktop-gaps="[24]"
          :tablet-gaps="[20]"
          :mobile-gaps="[12]"
        >
          <div v-for="s in items" cls="outstaff__card">
            <div cls="outstaff__card-icon" v-html="s.icon" />
            <div cls="outstaff__card-text">{{ s.title }}</div>
          </div>
        </r-grid>
      </r-grid>
      <r-button bg-color="white" :to="staff.btn_b4_link" cls="outstaff__btn">
        {{ staff.btn_b4_text }}
      </r-button>
    </r-grid>
    <div cls="outstaff__bg">
      <div cls="outstaff__gradient" />
      <img src="@/assets/images/tempImages/r.png" alt="" />
    </div>
  </div>
</template>

<style module lang="scss">
.outstaff {
  background: var(--Black);
  margin: 24px 0;
  &__wrap {
    padding: 160px 80px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
  &__card {
    display: flex;
    padding: 48px 32px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border-radius: 12px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background: rgba(144, 144, 144, 0.1);
    &-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--White);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-text {
      color: rgba(255, 255, 255, 0.8);
      max-width: 238px;
      text-align: center;
    }
    &:nth-child(1) {
      svg {
        font-size: 28px;
      }
    }
    &:nth-child(2) {
      svg {
        font-size: 26px;
      }
    }
    &:nth-child(3) {
      svg {
        font-size: 48px;
      }
    }
    &:nth-child(4) {
      svg {
        font-size: 25px;
      }
    }
  }
  &__btn {
    max-width: max-content;
    margin: 0 auto;
  }
  &__bg {
    max-width: 1920px;
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
      padding: 104px 40px 0;
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
@include mobile {
  .outstaff {
    margin: 16px 0;
    &__gradient {
      height: 157px;
    }
    &__bg {
      img {
        height: 560px;
        object-position: left;
      }
    }
  }
}
</style>
