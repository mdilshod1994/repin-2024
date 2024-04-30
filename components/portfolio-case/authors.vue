<script setup lang="ts"></script>

<template>
  <div cls="authors">
    <div class="line" />
    <div cls="authors__wrap">
      <div cls="authors__text">The project was made by</div>
      <div cls="authors__block">
        <r-grid
          desktop-column="2"
          tablet-column="2"
          :desktop-gaps="[40, 46]"
          :tablet-gaps="[24, 62]"
          :mobile-gaps="[24, 15]"
        >
          <r-author v-for="a in 6" :key="a" name="Ivan Repin" profession="Art Direction" />
        </r-grid>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.authors {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  &__wrap {
    display: flex;
    justify-content: space-between;
  }
  &__text {
    max-width: 136px;
  }
}
@include tablet {
  .authors {
    padding: 56px 0;
    &__wrap {
      flex-wrap: wrap;
      gap: 48px;
    }
    &__text {
      max-width: 104px;
    }
  }
}
@include mobile {
  .authors {
    &__block {
      margin: 0 -16px;
      overflow-x: auto;
      padding: 0 16px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
