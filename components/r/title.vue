<script setup lang="ts">
withDefaults(
  defineProps<{
    pretitle?: string
    title?: string
    alignPosition?: "end" | "start" | "center"
    flexStart?: boolean
    textAlign?: "left" | "center" | "right" // для стилизации title
    colorWhite?: boolean
  }>(),
  {
    alignPosition: "end",
    textAlign: "left",
  },
)
</script>

<template>
  <div
    :cls="{
      block: true,
      '-flex-start': $slots.addons || flexStart,
      '-row': !title && !$slots.title && pretitle && $slots.addons,
      '-color-white': colorWhite,
    }"
  >
    <div v-if="pretitle" cls="block__pretitle">
      {{ pretitle }}
    </div>
    <div :cls="{ block__wrap: true, [`-${alignPosition}`]: true }">
      <div v-if="title || $slots.title" :cls="{ block__title: true, '-text-aling': textAlign }">
        <slot name="title">{{ title }}</slot>
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
  &.-color-white {
    .block {
      &__title,
      &__pretitle {
        color: var(--White);
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
      @include desctop-H2-ram;
      font-style: italic;
    }
    &.-text-aling {
      text-align: v-bind(textAlign);
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
      span {
        @include mob-H2-ram;
        font-style: italic;
      }
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
    &.-row {
      flex-direction: column;
    }
    &__wrap {
      gap: 16px;
      &.-start {
        .block {
          &__addons {
            padding-top: 0px;
          }
        }
      }
    }
  }
}
</style>
