<script setup lang="ts">
import type { Team } from "~/types/portfolio-case"

defineProps<{
  authors: Team
}>()
</script>

<template>
  <div cls="authors">
    <div class="line" />
    <div cls="authors__wrap">
      <div cls="authors__text">{{ authors.team_title }}</div>
      <div cls="authors__block">
        <r-grid
          desktop-column="2"
          tablet-column="2"
          :desktop-gaps="[40, 46]"
          :tablet-gaps="[24, 62]"
          :mobile-gaps="[24, 15]"
        >
          <r-author
            v-for="(a, idx) in authors.team_list"
            :key="idx"
            :name="a.team_name"
            :profession="a.team_sign"
            :avatar="a.team_avatar"
          />
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
