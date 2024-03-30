<script setup lang="ts">
defineProps<{
  to?: string
}>()
</script>

<template>
  <nuxt-link :to="to">
    <slot />
  </nuxt-link>
</template>
