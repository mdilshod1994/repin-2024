<script setup lang="ts"></script>

<template>
  <div cls="grid">
    <div cls="grid__wrap">
      <portfolio-card v-for="c in 6" />
    </div>
    <r-button>See all projects</r-button>
  </div>
</template>

<style module lang="scss">
.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  &__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 24px;
    padding: 104px 0 0;
    width: 100%;
  }
}

@include tablet {
  .grid {
    gap: 64px;
    &__wrap {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 48px;
      grid-column-gap: 20px;
      padding: 120px 0 0;
    }
  }
}
@include mobile {
  .grid {
    gap: 56px;
    &__wrap {
      grid-row-gap: 40px;
      grid-column-gap: 8px;
      padding: 40px 0 0;
    }
  }
}
</style>
