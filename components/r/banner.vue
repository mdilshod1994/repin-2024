<!-- 

verticalGap: gap between title and tags
deskGap: gap between title and description

-->

<script setup lang="ts">
const props = defineProps<{
  scrollTo?: string
  title?: string
  subtitle?: string
  bottomLine?: boolean
  mobileBottomLeft?: boolean
  gap?: string
  tabGap?: string
  mobGap?: string
  verticalGap?: string
  verticalDeskSmallGap?: string
  verticalTabletGap?: string
  verticalTabletSmallGap?: string
  verticalMobileGap?: string
}>()

const deskGap = computed(() => {
  if (props.gap) {
    return `${props.gap}px`
  } else {
    return "24px"
  }
})
const tabletGap = computed(() => {
  if (props.tabGap) {
    return `${props.tabGap}px`
  } else {
    return "24px"
  }
})
const mobileGap = computed(() => {
  if (props.mobGap) {
    return `${props.mobGap}px`
  } else {
    return "64px"
  }
})
const banner = ref<HTMLElement | null>(null)

const scrollValue = computed(() => {
  if (!banner.value) return
  return banner.value?.offsetTop + banner.value?.offsetHeight
})

const verticalGap = computed(() => {
  if (props.verticalGap) {
    return `${props.verticalGap}px`
  } else {
    return "128px"
  }
})
const verticalDeskSmallGap = computed(() => {
  if (props.verticalDeskSmallGap) {
    return `${props.verticalDeskSmallGap}px`
  } else {
    return verticalGap.value
  }
})
const verticalTabletGap = computed(() => {
  if (props.verticalTabletGap) {
    return `${props.verticalTabletGap}px`
  } else {
    return verticalDeskSmallGap.value
  }
})
const verticalTabletSmallGap = computed(() => {
  if (props.verticalTabletSmallGap) {
    return `${props.verticalTabletSmallGap}px`
  } else {
    return verticalTabletGap.value
  }
})
const verticalMobileGap = computed(() => {
  if (props.verticalMobileGap) {
    return `${props.verticalMobileGap}px`
  } else {
    return verticalTabletSmallGap.value
  }
})

const scrollToId = () => {
  window.scrollTo({
    top: scrollValue.value,
    behavior: "smooth",
  })
}

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div ref="banner" cls="banner">
    <div cls="banner__top">
      <div cls="banner__left">
        <div v-if="title || $slots.title" cls="banner__title">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div cls="banner__right">
        <slot />
      </div>
    </div>
    <div
      v-if="scrollTo || $slots['bottom-left']"
      :cls="{ banner__bottom: true, '-mobile': mobileBottomLeft }"
    >
      <div v-if="bottomLine" class="line" />
      <div cls="banner__bottom-wrap">
        <slot name="bottom-left" />
        <div
          v-if="scrollTo"
          cls="banner__scroll-to"
          data-cursor="pointer"
          @click="scrollToId"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          {{ scrollTo }}
          <svgo-arrow-down filled />
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.banner {
  display: flex;
  flex-direction: column;
  gap: v-bind(verticalGap);
  &__top {
    display: flex;
    justify-content: space-between;
    gap: v-bind(deskGap);
  }
  &__left {
    max-width: 729px;
  }
  &__right {
    padding-top: 16px;
    max-width: 411px;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__title {
    @include desctop-H1;
    span {
      font-family: "Ramillas Trial";
      font-style: italic;
    }
  }
  &__scroll-to {
    @include desctop-caption-17;
    display: flex;
    padding: 0 12px 0 16px;
    height: 38px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 32px;
    border: 1px solid #b6a2e0;
    flex-shrink: 0;
    align-self: flex-start;
    overflow: hidden;
    svg {
      font-size: 16px;
    }
    &:hover {
      svg {
        animation:
          MoveScaleUpInitial 0.3s forwards,
          MoveScaleUpEnd 0.3s forwards 0.3s;
      }
    }
    @keyframes MoveScaleUpInitial {
      100% {
        transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
        opacity: 0;
      }
    }
    @keyframes MoveScaleUpEnd {
      0% {
        transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
        opacity: 0;
      }
      100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
    }
  }
}
@include desktop-medium {
  .banner {
    gap: v-bind(verticalDeskSmallGap);
  }
}
@include tablet {
  .banner {
    gap: v-bind(verticalTabletGap);
    &__title {
      @include mob-H1;
      span {
        @include mob-H1-ram;
        font-style: italic;
      }
    }
    &__top {
      gap: v-bind(tabletGap);
    }
    &__right {
      padding-top: 8px;
      gap: 24px;
    }
    &__desc {
      gap: 16px;
    }
    &__bottom {
      gap: 12px;
    }
    &__scroll-to {
      @include mob-body-14;
    }
  }
}
@include tablet-small {
  .banner {
    gap: v-bind(verticalTabletSmallGap);
    &__top {
      flex-wrap: wrap;
    }
  }
}
@include mobile {
  .banner {
    gap: v-bind(verticalMobileGap);
    &__bottom {
      display: none;
      &.-mobile {
        display: flex;
      }
    }
    &__top {
      gap: v-bind(mobileGap);
    }
    &__right {
      max-width: 100%;
    }
  }
}
</style>
