<script setup lang="ts">
const active = defineModel<boolean>("active")

watch(
  () => active.value,
  () => {
    if (active.value) {
      useScrollLock(true)
    } else {
      useScrollLock(false)
    }
  },
)
</script>

<template>
  <teleport v-if="active" to="body">
    <div cls="modal">
      <div v-if="false" cls="modal__shade" @click="active = false" />

      <slot />
    </div>
  </teleport>
</template>

<style lang="scss" module>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100svh;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrap {
    position: relative;
    z-index: 1;
  }
  &__shade {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
@include mobile {
  .modal {
    &__wrap {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
