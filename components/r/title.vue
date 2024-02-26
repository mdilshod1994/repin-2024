<script setup lang="ts">
withDefaults(
  defineProps<{
    pretitle?: string
    title?: string
    italicTitle?: string
    alignWrapPosition?: "end" | "start" | "center"
    alignTitlePosition?: "end" | "start" | "center"
  }>(),
  {
    alignWrapPosition: "end",
    alignTitlePosition: "center",
  },
)
</script>

<template>
  <div :cls="{ block: true, [`-${alignWrapPosition}`]: true, '-flex-start': $slots.addons }">
    <div :cls="{ block__wrap: true, [`-${alignTitlePosition}`]: true }">
      <div v-if="pretitle" cls="block__pretitle">
        {{ pretitle }}
      </div>
      <div cls="block__title">
        {{ title }} <span v-if="italicTitle">{{ italicTitle }}</span>
      </div>
    </div>
    <div v-if="$slots.addons" cls="block__addons">
      <slot name="addons" />
    </div>
  </div>
</template>

<style module lang="scss">
.block {
  display: flex;
  justify-content: center;
  &.-flex-start {
    justify-content: space-between;
    .block {
      &__wrap {
        align-items: flex-start;
      }
    }
  }
  &.-end {
    align-items: flex-end;
  }
  &.-start {
    align-items: flex-start;
  }
  &.-center {
    align-items: center;
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
    flex-direction: column;
    gap: 32px;
    align-items: center;
    &.-end {
      align-items: flex-end;
    }
    &.-start {
      align-items: flex-start;
      width: 100%;
    }
    &.-center {
      align-items: center;
    }
  }
}

@include tablet {
  .block {
    &__wrap {
      gap: 16px;
    }
    &__pretitle {
      @include mob-sub-16;
    }
    &__title {
      @include mob-H2;
    }
  }
}
</style>
