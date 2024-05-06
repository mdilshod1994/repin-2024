<!--
  TODO: 
  ВЫвести mousemove данные в composable
-->

<script setup lang="ts">
const cursor = ref<HTMLElement | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    cursorPos.value.x = e.clientX
    cursorPos.value.y = e.clientY
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
  <div ref="cursor" cls="cursor">
    <svgo-cursor />
  </div>
</template>

<style module lang="scss">
.cursor {
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
  }
}

@include tablet {
  .cursor {
    display: none;
  }
}
</style>
