<script setup lang="ts">
withDefaults(
  defineProps<{
    button?: boolean
    mobileColumn?: number
    tabletColumn?: number
    desktopColumn?: number
  }>(),
  {
    mobileColumn: 2,
    desktopColumn: 3,
    tabletColumn: 3,
  },
)
</script>

<template>
  <div cls="grid">
    <div cls="grid__wrap">
      <slot />
    </div>
    <r-button v-if="button">See all projects</r-button>
  </div>
</template>

<style module lang="scss">
.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  &__wrap {
    display: grid;
    grid-template-columns: repeat(v-bind(desktopColumn), 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 24px;
    width: 100%;
  }
}

@include tablet {
  .grid {
    gap: 64px;
    &__wrap {
      grid-template-columns: repeat(v-bind(tabletColumn), 1fr);
      grid-row-gap: 48px;
      grid-column-gap: 20px;
    }
  }
}
@include mobile {
  .grid {
    gap: 56px;
    &__wrap {
      grid-template-columns: repeat(v-bind(mobileColumn), 1fr);
      grid-row-gap: 40px;
      grid-column-gap: 8px;
    }
  }
}
</style>
