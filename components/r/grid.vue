<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    button?: boolean
    mobileColumn?: number
    tabletColumn?: number
    desktopColumn?: number
    desktopGaps?: number[] // [row, column]
    tabletGaps?: number[] // [row, column]
    mobileGaps?: number[] // [row, column]
  }>(),
  {
    mobileColumn: 2,
    desktopColumn: 3,
    tabletColumn: 3,
    desktopGaps: () => [24, 24],
    tabletGaps: () => [20, 20],
    mobileGaps: () => [8, 8],
  },
)

const gaps = (gaps: number[]) => {
  if (gaps.length > 1) {
    return `${gaps[0]}px ${gaps[1]}px`
  } else {
    return `${gaps[0]}px`
  }
}

const desktopGap = computed(() => {
  return gaps(props.desktopGaps)
})
const tabletGap = computed(() => {
  return gaps(props.tabletGaps)
})
const mobileGap = computed(() => {
  return gaps(props.mobileGaps)
})
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
    gap: v-bind(desktopGap);
    width: 100%;
  }
}

@include tablet {
  .grid {
    gap: 64px;
    &__wrap {
      grid-template-columns: repeat(v-bind(tabletColumn), 1fr);
      gap: v-bind(tabletGap);
    }
  }
}
@include mobile {
  .grid {
    gap: 56px;
    &__wrap {
      grid-template-columns: repeat(v-bind(mobileColumn), 1fr);
      gap: v-bind(mobileGap);
    }
  }
}
</style>
