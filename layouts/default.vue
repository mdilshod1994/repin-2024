<script setup lang="ts"></script>

<template>
  <div cls="layout">
    <the-header />

    <slot />
  </div>
</template>

<style module lang="scss">
.layout {
  padding: 24px 0 0 0;
}
</style>
