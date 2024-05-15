<script setup lang="ts">
defineProps<{
  to?: string
}>()

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <nuxt-link :to="to" @mouseover="setCursorType('link')" @mouseleave="setCursorType('')">
    <slot />
  </nuxt-link>
</template>
