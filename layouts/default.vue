<script setup lang="ts"></script>

<template>
  <div cls="layout">
    <the-header />

    <slot />
    <the-footer />
  </div>
</template>

<style module lang="scss">
.layout {
  padding: 24px 0 0 0;
}
@include mobile {
  .layout {
    padding: 8px 0 0 0;
  }
}
</style>
