<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: "small" | "large" | "custom"
    bgColor?: "default" | "white" | "gray"
    pointerEvents?: boolean
  }>(),
  {
    size: "custom",
    bgColor: "default",
  },
)
</script>

<template>
  <button :class="`round-button -${size} -${bgColor} ${pointerEvents ? '-pointer-none' : ''}`">
    <slot>
      <svgo-arrow-right filled />
    </slot>
  </button>
</template>
