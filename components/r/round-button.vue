<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: "small" | "large"
  }>(),
  {
    size: "large",
  },
)
</script>

<template>
  <button :class="`round-button -${size}`">
    <slot>
      <svgo-arrow-right filled />
    </slot>
  </button>
</template>
