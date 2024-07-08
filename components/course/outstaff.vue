<script setup lang="ts"></script>

<template>
  <div cls="outstaff">
    <re-use-outstaff pretitle="Success Stories">
      <template #title>
        <div cls="outstaff__title"><span>After the course</span> you will be able</div>
      </template>
      <template #default>
        <div cls="outstaff__list">
          <div v-for="s in 4" cls="outstaff__card">
            <div cls="outstaff__card-icon" />
            <div cls="outstaff__card-text">
              The course ensures that each lesson equals one skill, streamlining your tasks, notes,
              knowledge bases, and planning methods.
            </div>
          </div>
        </div>
      </template>
    </re-use-outstaff>
  </div>
</template>

<style module lang="scss">
.outstaff {
  &__title {
    max-width: 580px;
  }
  &__list {
    display: flex;
    gap: 24px;
  }
  &__card {
    display: flex;
    padding: 48px 32px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border-radius: 12px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background: rgba(144, 144, 144, 0.1);
    &-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--White);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-text {
      color: rgba(255, 255, 255, 0.8);
      // max-width: 238px;
      text-align: center;
    }
    &:nth-child(1) {
      svg {
        font-size: 28px;
      }
    }
    &:nth-child(2) {
      svg {
        font-size: 26px;
      }
    }
    &:nth-child(3) {
      svg {
        font-size: 48px;
      }
    }
    &:nth-child(4) {
      svg {
        font-size: 25px;
      }
    }
  }
}
</style>
