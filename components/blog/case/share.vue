<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const route = useRoute()

const twitterShareUrl = `https://twitter.com/intent/tweet?text=${props.title}&url=${route.fullPath}`
</script>

<template>
  <div cls="share">
    <div cls="share__title">Share this story</div>
    <div cls="share__line" />
    <div cls="share__list">
      <a :href="twitterShareUrl" target="_blank" rel="noopener noreferrer" cls="share__link">
        <svgo-tw />
      </a>
      <!-- <a :href="" target="_blank" rel="noopener noreferrer" cls="share__link">
        <svgo-tg />
      </a>
      <a :href="" target="_blank" rel="noopener noreferrer" cls="share__link">
        <svgo-vk />
      </a> -->
    </div>
  </div>
</template>

<style lang="scss" module>
.share {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 84px;
  height: max-content;
  position: sticky;
  top: 100px;
  z-index: 1;
  &__title {
    text-align: center;
  }
  &__line {
    width: 3px;
    height: 1px;
    background: var(--gray);
  }
  &__list {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
  }
  &__link {
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 26px;
      color: var(--Black);
      transition: 0.3s ease-in-out;
    }
    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
}
@include tablet {
  .share {
    gap: 16px;
    &__link {
      width: 48px;
      height: 48px;
    }
  }
}
@include mobile {
  .share {
    width: max-content;
    gap: 12px;
    &__line {
      display: none;
    }
    &__list {
      gap: 12px;
      flex-direction: row;
    }
    &__link {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
