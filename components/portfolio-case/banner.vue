<script setup lang="ts">
import type { PortfolioCase } from "~/types/portfolio-case"

defineProps<{
  banner: PortfolioCase
}>()
</script>

<template>
  <r-grid
    desktop-column="1"
    tablet-column="1"
    mobile-column="1"
    :desktop-gaps="[16]"
    :tablet-gaps="[16]"
    :mobile-gaps="[24]"
    cls="banner"
  >
    <nuxt-link v-if="banner.block_1.link_work" :to="banner.block_1.link_work" cls="link">
      <div cls="link-icon">
        <svgo-link />
      </div>
      <span class="underline-link"> {{ banner.block_1.link_work_name }} </span>
    </nuxt-link>
    <r-banner mobile-bottom-left :title="banner.title">
      <div class="texts -column">
        <div class="text">
          {{ banner.block_1.subtitle }}
        </div>
      </div>
      <template v-if="banner.block_1.tags.length" #bottom-left>
        <div class="tabs">
          <div v-for="t in banner.block_1.tags" class="tab">{{ t }}</div>
        </div>
      </template>
    </r-banner>
  </r-grid>
</template>

<style module lang="scss">
.banner {
  padding-bottom: 8px;
  &-title {
    max-width: 730px;
  }
}
.link {
  display: flex;
  align-items: center;
  gap: 8px;
  &-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--gray);
    svg {
      font-size: 16px;
    }
  }
}
@include tablet {
  .banner {
    &-title {
      max-width: 356px;
    }
  }
}
</style>
