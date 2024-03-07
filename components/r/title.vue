<script setup lang="ts">
withDefaults(
  defineProps<{
    pretitle?: string
    title?: string
    italicTitle?: string
    alignPosition?: "end" | "start" | "center"
    flexStart?: boolean
  }>(),
  {
    alignPosition: "end",
  },
)
</script>

<template>
  <div
    :cls="{
      block: true,
      '-flex-start': $slots.addons || flexStart,
      '-row': !title && pretitle && $slots.addons,
    }"
  >
    <div v-if="pretitle" cls="block__pretitle">
      {{ pretitle }}
    </div>
    <div :cls="{ block__wrap: true, [`-${alignPosition}`]: true }">
      <div v-if="title" cls="block__title">
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
  &.-row {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    .block {
      &__wrap {
        max-width: 845px;
      }
      &__pretitle {
        padding-top: 8px;
      }
    }
  }
  &__pretitle {
    @include desctop-H5-ram;
  }
  &__title {
    @include desctop-H2;
    white-space: nowrap;
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
      .block {
        &__addons {
          padding-top: 8px;
        }
      }
    }
    &.-center {
      align-items: center;
    }
  }
}

@include tablet {
  .block {
    gap: 16px;
    &__pretitle {
      @include mob-sub-16;
    }
    &__title {
      @include mob-H2;
      white-space: inherit;
    }
    &__wrap {
      flex-wrap: wrap;
      column-gap: 24px;
      row-gap: 56px;
    }
  }
}
@include mobile {
  .block {
    gap: 8px;
    &__wrap {
      flex-wrap: nowrap;
    }
  }
}
</style>
