<script setup lang="ts">
const store = useGlobalData()
onMounted(async () => {
  await store.getData()
})
</script>

<template>
  <div cls="layout">
    <r-cursor />
    <the-header />
    <slot />
    <the-footer />
    <div class="container">
      <div cls="layout__cookies">
        <r-cookies />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.layout {
  padding: 24px 0 0 0;
  background: var(--White);
  &__cookies {
    display: flex;
    justify-content: flex-end;
  }
}
@include mobile {
  .layout {
    padding: 8px 0 0 0;
  }
}
</style>
