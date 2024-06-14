<script setup lang="ts">
const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <r-grid
    desktop-column="1"
    :desktop-gaps="[112]"
    :tablet-gaps="[96]"
    :mobile-gaps="[46]"
    cls="related"
  >
    <r-title pretitle="Blog">
      <template #title>
        <div cls="related__title">Related <span>articles</span></div>
      </template>
      <template #addons>
        <nuxt-link
          to=""
          class="underline-link"
          cls="related__link"
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

<style lang="scss" module>
@include mobile {
  .related {
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__link {
      display: none;
    }
  }
}
</style>
