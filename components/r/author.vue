<script setup lang="ts">
defineProps<{
  name?: string
  avatar?: string
  profession?: string
}>()
</script>

<template>
  <div cls="author">
    <div cls="author__avatar">
      <!-- <img src="" alt=""> -->
    </div>
    <div cls="author__box">
      <div cls="author__name">
        {{ name }}
      </div>
      <div cls="author__profession">
        {{ profession }}
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.author {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 280px;
  &__avatar {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  &__name {
    @include desctop-body-22-med;
  }
  &__profession {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
