<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: "small" | "large" | "custom"
    bgColor?: "default" | "white"
  }>(),
  {
    size: "large",
    bgColor: "default",
  },
)
</script>

<template>
  <button :class="`round-button -${size} -${bgColor}`">
    <slot>
      <svgo-arrow-right filled />
    </slot>
  </button>
</template>
