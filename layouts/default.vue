<script setup lang="ts">
const store = useGlobalData()
onMounted(async () => {
  await store.getMenuHeaderFooter()
})
</script>

<template>
  <div cls="layout">
    <r-cursor />
    <the-header />
    <slot />
    <lazy-delay-hydration>
      <the-footer />
    </lazy-delay-hydration>
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
  display: flex;
  flex-direction: column;
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
