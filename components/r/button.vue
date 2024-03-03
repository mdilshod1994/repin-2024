<script setup lang="ts">
withDefaults(
  defineProps<{
    bgColor?: "black" | "white"
  }>(),
  {
    bgColor: "black",
  },
)
</script>

<template>
  <button :cls="{ button: true, [`-${bgColor}`]: true }">
    <slot />
  </button>
</template>

<style module lang="scss">
.button {
  height: 64px;
  padding: 0 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: calc(1s * 1.3) cubic-bezier(0.19, 1, 0.22, 1);
  @include desctop-caption-17-med;
  &.-black {
    background: var(--Black);
    color: var(--White);
  }
  &.-white {
    background: var(--White);
    color: var(--Black);
  }
  &:hover {
    border-radius: 12px;
  }
}

@include tablet {
  .button {
    height: 56px;
    padding: 0 48px;
    @include mob-body-14-med;
  }
}
@include mobile {
  .button {
    height: 52px;
    padding: 0 40px;
  }
}
</style>
