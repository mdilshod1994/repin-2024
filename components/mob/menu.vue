<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core"

import { type MenuElement } from "~/types/menu-header-footer"

defineProps<{
  menu: MenuElement[]
}>()

const mobMenu = ref<HTMLElement | null>(null)

const active = defineModel<boolean>("active")

const route = useRoute()

const heightOfMobMenu = ref("")

onMounted(() => {
  heightOfMobMenu.value = `${mobMenu.value?.scrollHeight}px`
})

useResizeObserver(mobMenu, () => {
  heightOfMobMenu.value = `${mobMenu.value?.scrollHeight}px`
})

watch(
  () => route.fullPath,
  () => {
    active.value = false
    useBodyLock(false)
  },
)

const hoverSound = ref<HTMLAudioElement | null>(null)

const playHoverSound = () => {
  if (!hoverSound.value) return
  hoverSound.value.volume = 0.2
  hoverSound.value.play()
}
</script>

<template>
  <div v-if="true" ref="mobMenu" :cls="{ mobile: true, '-active': active }">
    <div cls="mobile__wrap">
      <nav cls="mobile__nav">
        <div>
          <nuxt-link cls="mobile__nav-link" to="/" @click.prevent="playHoverSound()">
            Home
          </nuxt-link>
        </div>
        <div
          v-for="item in menu"
          v-show="item.name !== 'Consulting' && item.name !== 'Blog'"
          @click.prevent="playHoverSound()"
        >
          <nuxt-link cls="mobile__nav-link" :to="`/${item.name.toLowerCase()}`">
            {{ item.name }}
          </nuxt-link>
        </div>

        <audio ref="hoverSound" preload="auto">
          <source src="/files/hover.mp3" />
        </audio>
      </nav>
      <div class="line" />
      <div cls="mobile__bottom">
        <r-button cls="mobile__bottom-btn"> Connect </r-button>
        <div cls="mobile__langs" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.mobile {
  margin-top: -25px;
  position: fixed;
  left: 0;
  top: 54px;
  width: 100%;
  padding: 0 40px;
  display: none;
  z-index: 2;
  height: 0;
  overflow: hidden;
  opacity: 0.5;
  visibility: hidden;
  transition: 0.4s ease-in-out;
  &.-active {
    height: v-bind(heightOfMobMenu);
    opacity: 1;
    visibility: visible;
  }
  &__btn-close {
    position: relative;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    background: var(--White);
    align-self: stretch;
    padding-top: 25px;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 30px;
    &-link {
      @include mob-H2;
    }
  }
  &__bottom {
    padding: 20px 24px 24px;
  }
}

@include tablet {
  .mobile {
    display: block;
    &__bottom {
      &-btn {
        height: 40px;
      }
    }
  }
}
@include tablet-small {
  .mobile {
    padding: 0 24px;
  }
}
@include mobile {
  .mobile {
    padding: 0 16px;
    :global(.line) {
      display: none;
    }
    &__nav {
      padding: 24px 0 0 24px;
      margin-bottom: 88px;
      align-items: flex-start;
      &-link {
        @include mob-H3;
      }
    }
    &__bottom {
      padding: 0 24px 24px;
      &-btn {
        width: 100%;
      }
    }
  }
}
</style>
