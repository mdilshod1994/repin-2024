<script setup lang="ts"></script>

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
    <nuxt-link to="" cls="link">
      <div cls="link-icon">
        <svgo-link />
      </div>
      <span class="underline-link"> www.macurtin.ru </span>
    </nuxt-link>
    <r-banner mobile-bottom-left>
      <template #title>
        <div cls="banner-title">Scandinavian Airlines Nordic</div>
      </template>
      <div class="texts -column">
        <div class="text">
          Design and production of curtains and accessories for home and office. Moscow and Moscow
          region.
        </div>
        <div class="text">
          The client turned to the Studio for a complete repackaging of the brand. Previously, the
          company was called "Isabelle". We have developed a new naming, a website with a catalog of
          curtains and accessories, and the main elements of corporate identity.
        </div>
      </div>
      <template #bottom-left>
        <div class="tabs">
          <div v-for="t in 6" :key="t" class="tab">Website</div>
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
