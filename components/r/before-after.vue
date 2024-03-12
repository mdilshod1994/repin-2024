<script setup lang="ts">
const after = ref<HTMLElement | null>(null)
const baBtn = ref<HTMLElement | null>(null)
const removeAnimation = ref(true)

const line = (e: any) => {
  const xMove =
    e.type === "touchmove" || e.type === "touchstart" ? e.changedTouches[0].clientX - 20 : e.layerX
  const percent = (xMove / e.target.clientWidth) * 100
  if (e.type === "mousemove" || e.type === "touchmove" || e.type === "touchstart") {
    removeAnimation.value = false
    baBtn.value.style.transition = "none"
    baBtn.value.style.left = `${percent}%`
    after.value.style.transition = "none"
    after.value.style.width = `${percent}%`
  } else {
    setTimeout(() => {
      removeAnimation.value = true
    }, 520)
    baBtn.value.style.transition = "0.5s ease"
    baBtn.value.style.left = "50%"
    after.value.style.transition = "0.5s ease"
    after.value.style.width = "50%"
  }
}
</script>

<template>
  <div cls="before-after">
    <div cls="before-after__img">
      <img src="@/assets/images/tempImages/after.png" alt="" />
    </div>
    <div ref="after" :cls="{ 'before-after__img': true, '-after-anim': removeAnimation }">
      <img src="@/assets/images/tempImages/before.png" alt="" />
    </div>
    <button ref="baBtn" :cls="{ 'before-after__btn': true, '-btn-anim': removeAnimation }">
      <svgo-chevron-left />
      <div cls="before-after__btn-line" />
      <svgo-chevron-right />
    </button>
    <div
      cls="before-after__overlay"
      @mousemove="line"
      @mouseleave="line"
      @touchstart="line"
      @touchmove="line"
      @touchend="line"
    />
  </div>
</template>

<style module lang="scss">
.before-after {
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    cursor: e-resize;
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      object-position: left;
    }
    &.-after-anim {
      animation-name: bgAnim;
      -webkit-animation-duration: 6s;
      animation-duration: 6s;
      -webkit-animation-timing-function: ease;
      animation-timing-function: ease;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }
  }
  &__btn {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 104px;
    height: 104px;
    background: var(--White);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 50%;
    &-line {
      height: 16px;
      width: 2px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
    }
    svg {
      font-size: 24px;
    }

    &.-btn-anim {
      animation-name: btnAnim;
      -webkit-animation-duration: 6s;
      animation-duration: 6s;
      -webkit-animation-timing-function: ease;
      animation-timing-function: ease;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }
  }
  @keyframes bgAnim {
    0%,
    50%,
    100% {
      width: 50%;
    }

    25% {
      width: 25%;
    }

    75% {
      width: 75%;
    }
  }
  @keyframes btnAnim {
    0%,
    50%,
    100% {
      left: 50%;
    }

    25% {
      left: 25%;
    }

    75% {
      left: 75%;
    }
  }
}
@include tablet {
  .before-after {
    &__btn {
      width: 80px;
      height: 80px;
      gap: 6px;
    }
  }
}
@include tablet-small {
  .before-after {
    &__btn {
      width: 56px;
      height: 56px;
      gap: 4px;
      svg {
        font-size: 16px;
      }
    }
  }
}
</style>
