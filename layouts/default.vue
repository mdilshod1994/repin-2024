<script setup lang="ts"></script>

<template>
  <div cls="layout">
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
