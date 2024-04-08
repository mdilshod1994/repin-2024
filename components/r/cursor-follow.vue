<!--
Для появление курсора, нужно дать родителю аттрибут  * data-cursor="appear" *
-->

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
  }>(),
  {
    bgColor: "black",
  },
)

const isDomLoaded = ref(false)
const cursor = ref<HTMLElement | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
const cursorEasePos = ref({ x: 0, y: 0 })

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
    const easting = 0.12
    cursorEasePos.value.x += (cursorPos.value.x - cursorEasePos.value.x) * easting
    cursorEasePos.value.y += (cursorPos.value.y - cursorEasePos.value.y) * easting
    if (!cursor.value) return
    cursor.value.style.transform = `translate(${cursorEasePos.value.x}px, ${cursorEasePos.value.y}px)`
    requestAnimationFrame(loop)
  })
})
</script>

<template>
  <div v-if="isDomLoaded" @mousemove="showCursor(1)" @mouseleave="showCursor(0)">
    <div ref="cursor" :cls="{ 'cursor-wrap': true, [`-${bgColor}`]: true }" />
    <slot />
  </div>
  <!-- <div>
    <svgo-arrow-right />
    <svgo-arrow-right />
  </div> -->
</template>

<style module lang="scss">
.cursor {
  &-wrap {
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
}

@include tablet {
  .cursor {
    display: none;
  }
}
</style>
