<script setup lang="ts">
import type { NuxtLinkProps } from "nuxt/app"

import { RLink } from "#components"

const props = withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
    link?: NuxtLinkProps
    to?: NuxtLinkProps["to"]
    bgHover?: boolean
    radiusHover?: boolean
  }>(),
  {
    bgColor: "black",
  },
)

const link = computed(() => props.link ?? (props.to ? { to: props.to } : undefined))
</script>

<template>
  <component
    :is="link ? RLink : 'button'"
    :to="to ? to : undefined"
    :cls="{
      button: true,
      [`-${bgColor}`]: true,
      '-bg-hover': bgHover,
      '-radius-hover': radiusHover,
    }"
  >
    <span>
      <slot />
    </span>
    <slot name="icon" />
  </component>
</template>

<style module lang="scss">
.button {
  height: 64px;
  padding: 0 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
  transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
  @include desctop-caption-17-med;
  &.-black {
    background: var(--Black);
    color: var(--White);
    svg {
      color: var(--White);
      transition: 0.3s ease-in-out;
    }
  }
  &.-white {
    background: var(--White);
    color: var(--Black);
  }
  &:hover {
    border-radius: 12px;
    span {
      animation:
        MoveScaleUpInitial 0.3s forwards,
        MoveScaleUpEnd 0.3s forwards 0.3s;
    }
  }
  &.-bg-hover {
    &.-black {
      &:hover {
        background: var(--White);
        color: var(--Black);
        svg {
          color: var(--Black);
        }
      }
    }
  }

  &.-radius-hover {
    &:hover {
      border-radius: 50px;
    }
  }

  @keyframes MoveScaleUpInitial {
    100% {
      transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
      opacity: 0;
    }
  }
  @keyframes MoveScaleUpEnd {
    0% {
      transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
}

@include tablet {
  .button {
    height: 56px;
    padding: 0 48px;
    @include mob-body-14-med;
  }
}
@include mobile {
  .button {
    height: 52px;
    padding: 0 40px;
  }
}
</style>
