<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
    video?: boolean
    carousel?: boolean
    cursorType?: "video" | "carousel"
  }>(),
  {
    // cursorType: "default",
    bgColor: "black",
  },
)

const isDomLoaded = ref(false)
const cursor = ref<HTMLElement | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
const cursorPrevPos = ref({ x: 0, y: 0 })
const cursorEasePos = ref({ x: 0, y: 0 })
const currScale = ref(0)
const currRotate = ref(0)
function showCursor(opacity: number) {
  if (cursor.value) {
    cursor.value.style.opacity = `${opacity}`
  }
}

onMounted(() => {
  isDomLoaded.value = true

  document.addEventListener("mousemove", (e) => {
    cursorPos.value.x = e.clientX
    cursorPos.value.y = e.clientY
  })

  requestAnimationFrame(function loop() {
    const easting = 0.19
    cursorEasePos.value.x += (cursorPos.value.x - cursorEasePos.value.x) * easting
    cursorEasePos.value.y += (cursorPos.value.y - cursorEasePos.value.y) * easting
    if (!cursor.value) return

    // Squeeze
    const deltaMouseX = cursorPos.value.x - cursorPrevPos.value.x
    const deltaMouseY = cursorPos.value.y - cursorPrevPos.value.y
    cursorPrevPos.value.x = cursorPos.value.x
    cursorPrevPos.value.y = cursorPos.value.y

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 2, 150)
    const scaleValue = (mouseVelocity / 150) * 0.5

    currScale.value += (scaleValue - currScale.value) * easting

    // Rotate
    const rotate = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI
    if (mouseVelocity > 20) {
      currRotate.value = rotate
    }
    const transformTranslateEase = `translate(${cursorEasePos.value.x}px, ${cursorEasePos.value.y}px)`
    const transformScale = `scale(${1 + currScale.value}, ${1 - currScale.value})`
    const transformRotate = `rotate(${currRotate.value}deg)`

    cursor.value.style.transform = `${transformTranslateEase} ${transformRotate} ${transformScale} `

    // if (props.cursorType === "carousel") {
    //   cursor.value.style.transform = `${transformTranslateEase} ${transformRotate} ${transformScale} `
    // } else {
    //   cursor.value.style.transform = `${transformTranslateEase} `
    // }
    requestAnimationFrame(loop)
  })
})
</script>

<template>
  <div v-if="isDomLoaded" cls="cursor" @mousemove="showCursor(1)" @mouseleave="showCursor(0)">
    <div ref="cursor" :cls="{ 'cursor-wrap': true, [`-${bgColor}`]: true }">
      <svgo-play v-if="cursorType === 'video'" cls="cursor-video" />
      <div v-if="cursorType === 'carousel'" cls="cursor-carousel">
        <svgo-arrow-right />
      </div>
    </div>
    <slot />
  </div>
</template>

<style module lang="scss">
.cursor {
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    --size: 104px;
    position: fixed;
    top: calc(var(--size) / -2);
    left: calc(var(--size) / -2);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    transition:
      width 0.15s ease-in,
      height 0.15s ease-in,
      background-color 0.15s ease-out,
      opacity 0.3s ease-in-out;
    z-index: 2;
    &.-black {
      background: var(--Black);
      svg {
        color: var(--White);
      }
    }
    &.-white {
      background: var(--White);
      svg {
        color: var(--Black);
      }
    }
  }
  &-video {
    font-size: 32px;
  }
  &-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    svg {
      font-size: 24px;
    }
  }
}

@include tablet {
  .cursor {
    &-wrap {
      display: none;
    }
  }
}
</style>
