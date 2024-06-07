<script setup lang="ts"></script>

<template>
  <div cls="list">
    <slot />
  </div>
</template>

<style module lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@include tablet-small {
  .list {
    gap: 32px;
  }
}
@include mobile {
  .list {
    gap: 40px;
  }
}
</style>
