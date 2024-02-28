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

    <portfolio-grid />
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
}
@include tablet {
  .portfolio {
    gap: 64px;
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
  }
}
</style>
