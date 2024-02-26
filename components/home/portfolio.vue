<script setup lang="ts"></script>

<template>
  <div cls="portfolio">
    <r-title pretitle="Portfolio" title="Our works">
      <template #addons>
        <portfolio-filters />
      </template>
    </r-title>
    <portfolio-grid />
  </div>
</template>

<style module lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  gap: 104px;
}
@include tablet {
  .portfolio {
    gap: 64px;
  }
}
</style>
