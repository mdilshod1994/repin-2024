<script setup lang="ts">
withDefaults(
  defineProps<{
    pretitle?: string
    title?: string
    italicTitle?: string
    alignPosition?: "end" | "start" | "center"
  }>(),
  {
    alignPosition: "end",
  },
)
</script>

<template>
  <div :cls="{ block: true, '-flex-start': $slots.addons }">
    <div v-if="pretitle" cls="block__pretitle">
      {{ pretitle }}
    </div>
    <div :cls="{ block__wrap: true, [`-${alignPosition}`]: true }">
      <div cls="block__title">
        {{ title }} <span v-if="italicTitle">{{ italicTitle }}</span>
      </div>
      <div v-if="$slots.addons" cls="block__addons">
        <slot name="addons" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.block {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  &.-flex-start {
    align-items: inherit;
  }
  &__pretitle {
    @include desctop-H5-ram;
  }
  &__title {
    @include desctop-H2;
    span {
      font-family: "Ramillas Trial";
      font-style: italic;
    }
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    &.-end {
      align-items: flex-end;
    }
    &.-start {
      align-items: flex-start;
    }
    &.-center {
      align-items: center;
    }
  }
}
</style>
