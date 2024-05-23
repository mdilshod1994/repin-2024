<script setup lang="ts">
const localePath = useLocalePath()

defineProps<{
  to?: string
}>()

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <nuxt-link
    :to="localePath(`${to}`)"
    @mouseover="setCursorType('link')"
    @mouseleave="setCursorType('')"
  >
    <slot />
  </nuxt-link>
</template>
