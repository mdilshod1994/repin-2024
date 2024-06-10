<script setup lang="ts">
const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <r-grid desktop-column="1" :desktop-gaps="[112]" cls="related">
    <r-title pretitle="Blog">
      <template #title>
        <div cls="related__title">Related <span>articles</span></div>
      </template>
      <template #addons>
        <nuxt-link
          to=""
          class="underline-link"
          cls="blogs__link"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          Read on Medium
        </nuxt-link>
      </template>
    </r-title>
    <blog-list>
      <blog-item v-for="a in 2" />
    </blog-list>
  </r-grid>
</template>

<style lang="scss" module></style>
