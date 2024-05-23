<script setup lang="ts">
import type { En } from "~/types/about"

defineProps<{
  about: En
}>()
const { updateType } = useMousemove()
const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <r-grid
    desktop-column="1"
    :desktop-gaps="[160]"
    :tablet-gaps="[80]"
    :mobile-gaps="[56]"
    cls="open-jobs"
  >
    <r-title align-position="start">
      <template #title>
        <div cls="open-jobs__title" v-html="about.page.title_vacancies" />
      </template>
      <template #addons>
        <div class="texts -column">
          <r-round-button size="small" cls="open-jobs__info-icon" pointer-events>
            <svgo-info />
          </r-round-button>
          <div class="text">
            {{ about.page.subtitle_vacancies }}
          </div>
        </div>
      </template>
    </r-title>
    <r-grid
      desktop-column="1"
      :desktop-gaps="[64]"
      :tablet-gaps="[40]"
      :mobile-gaps="[48]"
      cls="open-jobs__list"
    >
      <div v-for="vacancy in about.page.vacancies" cls="open-jobs__item">
        <div cls="open-jobs__item-title"><span /> {{ vacancy.categories_name }}</div>
        <r-grid
          desktop-column="2"
          :desktop-gaps="[12]"
          mobile-column="1"
          cls="open-jobs__item-list"
        >
          <nuxt-link
            v-for="(v, idx) in vacancy.list"
            :key="idx"
            cls="open-jobs__item-box"
            :to="v.link"
            @mouseover="setCursorType('link')"
            @mouseleave="setCursorType('')"
          >
            <div cls="open-jobs__item-content">
              <div cls="open-jobs__item-name " class="underline-fade">{{ v.name }}</div>
              <div cls="open-jobs__item-tasks">{{ v.description }}</div>
            </div>
            <div cls="open-jobs__item-icon">
              <r-round-button size="small" bg-color="white">
                <svgo-arrow-right />
              </r-round-button>
            </div>
          </nuxt-link>
        </r-grid>
      </div>
    </r-grid>
  </r-grid>
</template>

<style module lang="scss">
.open-jobs {
  &__title {
    max-width: 665px;
    @include desctop-H2;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &-title {
      display: flex;
      align-items: center;
      gap: 12px;
      @include desctop-H5-ram;
      span {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--Black);
      }
    }
    &-list {
      max-width: 845px;
      width: 100%;
    }
    &-icon {
      button {
        svg {
          transform: rotate(-45deg);
        }
      }
    }
    &-box {
      display: flex;
      width: 100%;
      max-width: 410px;
      height: 106px;
      padding: 24px 32px;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      border-radius: 12px;
      background: #f5f5f5;

      &:hover {
        .open-jobs {
          &__item {
            &-icon {
              button {
                background: var(--Black);
                svg {
                  color: #fff;
                  transform: rotate(0deg);
                }
              }
            }
            &-name {
              &::before {
                transform-origin: 0% 50%;
                transform: scale3d(1, 1, 1);
              }
            }
          }
        }
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    &-name {
      @include desctop-body-22-med;
      position: relative;
      width: max-content;
      &::before {
        content: "";
        transform-origin: 100% 50%;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s;
        position: absolute;
        width: 100%;
        height: 1px;
        background: currentColor;
        top: 100%;
        left: 0;
        pointer-events: none;
      }
    }
    &-tasks {
      color: rgba(20, 20, 20, 0.6);
    }
  }
}
@include tablet {
  .open-jobs {
    &__title {
      @include mob-H2;
    }
    &__item {
      &-title {
        @include mob-sub-16;
      }
      &-list {
        max-width: 614px;
      }
      &-box {
        padding: 17px 20px;
      }
      &-name {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
      }
    }
  }
}
@include tablet-small {
  .open-jobs {
    &__item {
      flex-direction: column;
      gap: 16px;
      &-list,
      &-box {
        max-width: 100%;
      }
    }
  }
}
@include mobile {
  .open-jobs {
    &__info-icon {
      display: none;
    }
  }
}
</style>
