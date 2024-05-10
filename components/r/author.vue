<script setup lang="ts">
const props = defineProps<{
  name?: string
  avatar?: string | boolean
  profession?: string
}>()

const isNotBoolean = computed(() => {
  if (typeof props.avatar === "string") {
    return props.avatar
  } else {
    return ""
  }
})
</script>

<template>
  <div cls="author">
    <div v-if="isNotBoolean" cls="author__avatar">
      <img :src="isNotBoolean" alt="" />
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
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
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
@include tablet {
  .author {
    width: 200px;
    &__box {
      gap: 0;
    }
    &__avatar {
      width: 40px;
      height: 40px;
    }
    &__name {
      @include mob-body-14-med;
    }
  }
}
</style>
