<!--
  data-cursor="pointer или hide" -> в тэг для смены курсора
-->

<script setup lang="ts">
const showCursor = ref<number>(0)
const cursor = ref<HTMLElement | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
const changeCursor = ref<boolean>(false)
const dataSetS = ref<NodeListOf<Element>>()
const hideCursorIfDataset = ref<boolean>(false)

function toggleCursorType() {
  if (!dataSetS.value) return
  dataSetS.value.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (item.dataset.cursor === "pointer") {
        changeCursor.value = true
      }
      if (item.dataset.cursor === "hide") {
        hideCursorIfDataset.value = true
      }
    })
    item.addEventListener("mouseout", () => {
      changeCursor.value = false
      hideCursorIfDataset.value = false
    })
  })
}

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    showCursor.value = 1
    cursorPos.value.x = e.clientX
    cursorPos.value.y = e.clientY
    if (!dataSetS.value) {
      dataSetS.value = document.querySelectorAll("[data-cursor]")
      toggleCursorType()
    }
    const a = e.target.closest("a")
    if (a) {
      changeCursor.value = true
    } else {
      changeCursor.value = false
    }
  })
  function follow() {
    const transformTranslate = `translate(${cursorPos.value.x}px, ${cursorPos.value.y}px)`
    if (!cursor.value) return
    cursor.value.style.transform = `${transformTranslate}`
    requestAnimationFrame(follow)
  }
  follow()
})
</script>

<template>
  <div v-show="!hideCursorIfDataset" ref="cursor" cls="cursor" :style="`opacity: ${showCursor}`">
    <svgo-cursor v-if="!changeCursor" />
    <svgo-cursor-circle v-else cls="circle" />
  </div>
</template>

<style module lang="scss">
.cursor {
  opacity: 0;
  position: fixed;
  pointer-events: none;
  left: -2px;
  top: -4px;
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

@include tablet {
  .cursor {
    display: none !important;
  }
}
</style>
