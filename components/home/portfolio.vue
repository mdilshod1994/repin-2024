<script setup lang="ts"></script>

<template>
  <div cls="portfolio">
    <r-title pretitle="Portfolio" title="Our works">
      <template #addons>
        <div cls="portfolio__filter">
          <portfolio-filters />
        </div>
      </template>
    </r-title>
    <div cls="portfolio__mob-filter">
      <r-carousel gap="8">
        <div class="tab -active">All</div>
        <div class="tab">Mobile</div>
        <div class="tab">Web Site</div>
        <div class="tab">Branding</div>
        <div class="tab">Crypto</div>
      </r-carousel>
    </div>
    <r-grid button :tablet-column="2" cls="portfolio__grid">
      <portfolio-card v-for="c in 6" cls="portfolio__card" />
    </r-grid>
  </div>
</template>

<style module lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  gap: 104px;
  &__mob-filter {
    display: none;
  }
  &__grid {
    padding-top: 104px;
  }
  &__card {
    &:nth-child(3n-1) {
      margin-top: -104px;
    }
  }
}
@include tablet {
  .portfolio {
    gap: 64px;
    &__grid {
      padding-top: 120px;
    }
    &__card {
      &:nth-child(3n-1) {
        margin-top: auto;
      }
      &:nth-child(2n-1) {
        margin-top: -120px;
      }
    }
  }
}
@include tablet-small {
  .portfolio {
    &__filter {
      display: none;
    }
    &__mob-filter {
      display: block;
      margin: 0 -24px;
    }
  }
}
@include mobile {
  .portfolio {
    gap: 0;
    &__mob-filter {
      margin: 56px -16px 32px;
    }
    &__grid {
      padding-top: 40px;
    }
    &__card {
      &:nth-child(2n-1) {
        margin-top: -40px;
      }
    }
  }
}
</style>
