<!--
Для появление курсора, нужно дать родителю аттрибут  * data-cursor="appear" *
-->

<script setup lang="ts">
withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
  }>(),
  {
    bgColor: "black",
  },
)

const cursor = ref<HTMLElement | null>(null)
const cursorBorder = ref<HTMLElement | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
const cursorBorderPos = ref({ x: 0, y: 0 })
const show = ref(false)

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    cursorPos.value.x = e.clientX
    cursorPos.value.y = e.clientY
  })
  requestAnimationFrame(function loop() {
    const easting = 2.5
    cursorBorderPos.value.x += (cursorPos.value.x - cursorBorderPos.value.x) / easting
    cursorBorderPos.value.y += (cursorPos.value.y - cursorBorderPos.value.y) / easting
    if (!cursorBorder.value) return
    cursorBorder.value.style.transform = `translate(${cursorBorderPos.value.x}px, ${cursorBorderPos.value.y}px)`
    if (!cursor.value) return
    cursor.value.style.transform = `translate(${cursorPos.value.x}px, ${cursorPos.value.y}px)`
    requestAnimationFrame(loop)
  })
  document.querySelectorAll("[data-cursor]").forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (item instanceof HTMLElement) {
        if (item.dataset.cursor === "appear" && cursorBorder.value && cursor.value) {
          cursorBorder.value.style.opacity = "1"
          cursor.value.style.opacity = "1"
        }
      }
    })
    item.addEventListener("mouseout", () => {
      if (cursorBorder.value && cursor.value) {
        cursorBorder.value.style.opacity = "0"
        cursor.value.style.opacity = "0"
      }
    })
  })
})
</script>

<template>
  <teleport to="body">
    <div ref="cursor" :cls="{ cursor: true, '-show': show }">
      <svgo-arrow-right />
      <svgo-arrow-right />
    </div>
    <div ref="cursorBorder" :cls="{ 'cursor-wrap': true, '-show': show, [`-${bgColor}`]: true }" />
  </teleport>
</template>

<style module lang="scss">
.cursor {
  position: fixed;
  top: -10px;
  left: -20px;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  z-index: 3;
  transition: opacity 0.3s ease-in-out;

  svg {
    font-size: 15px;
    color: var(--White);
    &:first-child {
      transform: rotate(180deg);
    }
    path {
      stroke: var(--White);
    }
  }
  &-wrap {
    transform-origin: center;
    --size: 50px;
    position: fixed;
    top: calc(var(--size) / -2);
    left: calc(var(--size) / -2);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    transition:
      top 0.15s ease-out,
      left 0.15s ease-out,
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
