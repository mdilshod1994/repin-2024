<!--
  data-cursor="pointer или hide" -> в тэг для смены курсора
-->

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
    video?: boolean
    carousel?: boolean
    removeCursor?: boolean
  }>(),
  {
    // cursorType: "default",
    bgColor: "black",
  },
)

const showCursor = ref<number>(0)
const cursor = ref<HTMLElement | null>(null)
const cursorElastic = ref<HTMLElement | null>(null)
const cursorbg = ref<HTMLElement | null>(null)
const cursorPrevPos = ref({ x: 0, y: 0 })
const cursorEasePos = ref({ x: 0, y: 0 })
const currScale = ref(0)
const currRotate = ref(0)
const store = useChangeCursorState()
const { position } = useMousemove()

const ct = computed(() => {
  return store.cursorType // cursor type
})
const ad = computed(() => {
  return store.arrowDirection // arrow direction (left | right)
})
onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    showCursor.value = 1
  })
  function follow() {
    // default cursor
    const transformTranslate = `translate(${position.value.x}px, ${position.value.y}px)`
    if (!cursor.value) return
    cursor.value.style.transform = `${transformTranslate}`
    // elastic cursor
    const easting = 0.25
    cursorEasePos.value.x += (position.value.x - cursorEasePos.value.x) * easting
    cursorEasePos.value.y += (position.value.y - cursorEasePos.value.y) * easting
    if (!cursorElastic.value) return

    // Squeeze
    const deltaMouseX = position.value.x - cursorPrevPos.value.x
    const deltaMouseY = position.value.y - cursorPrevPos.value.y
    cursorPrevPos.value.x = position.value.x
    cursorPrevPos.value.y = position.value.y

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 2, 150)
    const scaleValue = (mouseVelocity / 270) * 0.5

    currScale.value += (scaleValue - currScale.value) * easting

    // Rotate
    const rotate = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI
    if (mouseVelocity > 20) {
      currRotate.value = rotate
    }
    const transformTranslateEase = `translate(${cursorEasePos.value.x}px, ${cursorEasePos.value.y}px)`
    const transformScale = `scale(${1 + currScale.value}, ${1 - currScale.value})`
    const transformRotate = `rotate(${currRotate.value}deg)`
    cursorElastic.value.style.transform = `${transformTranslateEase}`
    if (!cursorbg.value) return
    cursorbg.value.style.transform = `${transformRotate} ${transformScale}`
    requestAnimationFrame(follow)
  }
  follow()
})
</script>

<template>
  <div cls="custom-cursor">
    <div
      v-show="ct === '' || ct === 'link'"
      ref="cursor"
      cls="cursor"
      :style="`opacity: ${showCursor}`"
    >
      <svgo-cursor-circle v-if="ct === 'link'" cls="circle" />
      <svgo-cursor v-else />
    </div>
    <div
      v-show="ct === 'video' || ct === 'carousel'"
      :cls="{
        'cursor-elastic': true,
        '-white': ct === 'video' || ct === 'slider',
        '-black': ct === 'carousel',
      }"
    >
      <div ref="cursorElastic" cls="cursor-elastic-wrap">
        <div cls="cursor-elastic-block">
          <div ref="cursorbg" cls="cursor-elastic-inner" />
          <svgo-play v-if="ct === 'video'" cls="cursor-elastic-video" />
          <div
            v-if="ct === 'carousel' || ct === 'carousel'"
            :cls="{ 'cursor-elastic-carousel': true, [`-${ad}`]: true }"
          >
            <svgo-arrow-right />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.cursor {
  opacity: 0;
  position: fixed;
  pointer-events: none;
  left: -2px;
  top: -4px;
  color: #fff;
  z-index: 9999;
  mix-blend-mode: exclusion;
  svg {
    font-size: 21px;
    path {
      fill: #fff;
    }
    circle {
      fill: #fff;
    }
  }
  .circle {
    font-size: 10px;
  }
}
.cursor-elastic {
  &.-white .cursor-elastic {
    &-inner {
      background: var(--White);
    }
    &-wrap {
      svg {
        color: var(--Black);
      }
    }
  }

  &.-black {
    .cursor-elastic {
      &-inner {
        background: var(--Black);
      }
      &-wrap {
        svg {
          color: var(--White);
        }
      }
    }
  }

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
    mix-blend-mode: multiply;
    transition:
      width 0.1s ease-in,
      height 0.1s ease-in,
      background-color 0.1s ease-out;
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
    transition:
      width 0.1s ease-in,
      height 0.1s ease-in;
    z-index: 2;
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
  .custom-cursor {
    display: none !important;
  }
}
</style>
