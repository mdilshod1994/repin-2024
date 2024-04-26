<script setup lang="ts">
const open = defineModel<boolean>("open")

const lightbox = ref<HTMLElement | null>(null)

const position = ref<DOMRect>()
const size = ref({
  width: "",
  height: "",
})

const openLightBox = () => {
  if (!lightbox.value) return
  lightbox.value.style.height = "100vh"
  lightbox.value.style.width = "100vw"
  lightbox.value.style.top = "0"
  lightbox.value.style.left = "0"
}

const closeLightBox = () => {
  if (!lightbox.value) return
  lightbox.value.style.height = size.value.height
  lightbox.value.style.width = size.value.width
  if (!position.value) return
  lightbox.value.style.top = position.value.top + "px"
  lightbox.value.style.left = position.value.left + "px"
  setTimeout(() => {
    if (!lightbox.value) return
    lightbox.value.style.transition = "0s"
  }, 499)
  setTimeout(() => {
    if (!lightbox.value) return
    lightbox.value.style.position = "relative"
    lightbox.value.style.top = "auto"
    lightbox.value.style.zIndex = "0"
    lightbox.value.style.left = "auto"
  }, 500)
}

watch(
  () => open.value,
  (n) => {
    if (n === true) {
      useBodyLock(true)
      if (!lightbox.value) return
      position.value = lightbox.value?.getBoundingClientRect()
      size.value = {
        width: window.getComputedStyle(lightbox.value).width,
        height: window.getComputedStyle(lightbox.value).height,
      }

      lightbox.value.style.position = "fixed"
      lightbox.value.style.top = position.value.top + "px"
      lightbox.value.style.left = position.value.left + "px"
      lightbox.value.style.height = size.value.height
      lightbox.value.style.width = size.value.width
      lightbox.value.style.transition = "0.45s ease-in-out"
      lightbox.value.style.zIndex = "3"

      setTimeout(() => {
        openLightBox()
      }, 1)
    } else {
      useBodyLock(false)
      closeLightBox()
    }
  },
)
</script>

<template>
  <div ref="lightbox" :cls="{ lightbox: true, '-full-screen': open }">
    <div cls="lightbox__wrap">
      <div :cls="{ lightbox__block: true, '-grow': open }">
        <slot />
        <r-round-button
          v-if="open"
          cls="lightbox__btn-close -desk"
          size="large"
          bg-color="white"
          @click="open = false"
        >
          <svgo-x />
        </r-round-button>
      </div>
      <r-round-button
        v-if="open"
        cls="lightbox__btn-close -mobile"
        size="large"
        bg-color="white"
        @click="open = false"
      >
        <svgo-x />
      </r-round-button>
      <div cls="lightbox__overlay" @click="open = false" />
    </div>
  </div>
</template>

<style module lang="scss">
.lightbox {
  position: relative;
  &.-full-screen {
    .lightbox {
      &__overlay {
        z-index: 0;
      }
      &__wrap {
        padding: 0 150px;
      }
    }
  }
  &__wrap {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
  }
  &__block {
    position: relative;
    transition: 0.4s ease-in-out;
    max-width: 1920px;
    width: 100%;

    &.-grow {
      max-width: 1440px;
      z-index: 1;
      &::after {
        content: "";
        background: var(--White);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 40px);
        height: calc(100% + 40px);
        border-radius: 16px;
      }
      iframe,
      img,
      video {
        z-index: 2;
        position: relative;
      }
    }
    iframe,
    img,
    video {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: -1;
  }
  &__btn-close {
    position: absolute;
    right: -104px;
    top: -20px;
    &.-mobile {
      display: none;
    }
  }
}

@include tablet {
  .lightbox {
    &__block {
      position: inherit;
      &.-grow {
        &::after {
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          border-radius: 8px;
        }
      }
      iframe,
      img,
      video {
        border-radius: 4px;
      }
    }
    &__btn-close {
      top: auto;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
      bottom: 40px;
      &.-desk {
        display: none;
      }
      &.-mobile {
        display: flex;
        z-index: 1;
      }
    }
    &.-full-screen {
      .lightbox {
        &__wrap {
          padding: 0 24px;
        }
      }
    }
  }
}
</style>
