<script setup lang="ts"></script>

<template>
  <div cls="grid">
    <div cls="grid__wrap">
      <portfolio-card v-for="c in 6" />
    </div>
    <r-button cls="btn">See all projects</r-button>
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
  }
}
.btn {
  height: 64px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: var(--Black);
  color: var(--White);
  @include desctop-caption-17-med;
}
</style>
