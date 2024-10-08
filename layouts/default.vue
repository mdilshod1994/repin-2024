<script setup lang="ts">
const { data: header_footer } = await useFetch("/api/headerAndFooter")

const header = computed(() => {
  return header_footer.value?.en.header
})

const footer = computed(() => {
  return header_footer.value?.en.footer
})
</script>

<template>
  <div cls="layout">
    <r-cursor />
    <the-header :header="header" />
    <slot />
    <the-footer :footer="footer" />
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
