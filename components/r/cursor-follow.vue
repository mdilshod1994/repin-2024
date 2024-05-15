<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
    video?: boolean
    carousel?: boolean
    cursorType?: "video" | "carousel"
    removeCursor?: boolean
  }>(),
  {
    // cursorType: "default",
    bgColor: "black",
  },
)

const cursorElastic = ref<HTMLElement | null>(null)
const cursorbg = ref<HTMLElement | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
const cursorPrevPos = ref({ x: 0, y: 0 })
const cursorEasePos = ref({ x: 0, y: 0 })
const currScale = ref(0)
const currRotate = ref(0)
const arrowDirecton = ref("right")
function showCursor(opacity: number) {
  if (cursorElastic.value) {
    cursorElastic.value.style.opacity = `${opacity}`
  }
}

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    cursorPos.value.x = e.clientX
    cursorPos.value.y = e.clientY
    const body = document.querySelector("body") as HTMLElement
    const halfScreen = body.clientWidth / 2
    if (e.pageX > halfScreen) {
      arrowDirecton.value = "right"
    } else {
      arrowDirecton.value = "left"
    }
  })

  requestAnimationFrame(function loop() {
    const easting = 0.19
    cursorEasePos.value.x += (cursorPos.value.x - cursorEasePos.value.x) * easting
    cursorEasePos.value.y += (cursorPos.value.y - cursorEasePos.value.y) * easting
    if (!cursorElastic.value) return

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

    // cursor.value.style.transform = `${transformTranslateEase} ${transformRotate} ${transformScale} `
    cursorElastic.value.style.transform = `${transformTranslateEase}`
    if (!cursorbg.value) return
    cursorbg.value.style.transform = `${transformRotate} ${transformScale}`

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
  <div
    cls="cursor-elastic"
    data-cursor="hide"
    @mousemove="showCursor(1)"
    @mouseleave="showCursor(0)"
  >
    <div ref="cursorElastic" :cls="{ 'cursor-elastic-wrap': true, [`-${bgColor}`]: true }">
      <div cls="cursor-elastic-block">
        <div ref="cursorbg" :cls="{ 'cursor-elastic-inner': true, [`-${bgColor}`]: true }" />
        <svgo-play v-if="cursorType === 'video'" cls="cursor-elastic-video" />
        <div
          v-if="cursorType === 'carousel'"
          :cls="{ 'cursor-elastic-carousel': true, [`-${arrowDirecton}`]: true }"
        >
          <svgo-arrow-right />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style module lang="scss">
.cursor-elastic {
  &-block {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    transition:
      width 0.15s ease-in,
      height 0.15s ease-in,
      background-color 0.15s ease-out;
    &.-black {
      background: var(--Black);
    }
    &.-white {
      background: var(--White);
    }
  }
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
      svg {
        color: var(--White);
      }
    }
    &.-white {
      svg {
        color: var(--Black);
      }
    }
  }
  &-video {
    font-size: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &-carousel {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    transition: 0.3s ease-in-out;
    svg {
      font-size: 24px;
    }
    &.-right {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    &.-left {
      transform: translate(-50%, -50%) rotate(-180deg);
    }
  }
}

@include tablet {
  .cursor-elastic {
    &-wrap {
      display: none;
    }
  }
}
</style>
