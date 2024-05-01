<script setup lang="ts">
const store = useGlobalData()

const oa = computed(() => {
  return store.offerAgreement
})

onMounted(async () => {
  await store.getOfferAgreementPageInfo()
})
</script>

<template>
  <div v-if="oa" cls="policy">
    <div class="container">
      <r-grid desktop-column="1" :desktop-gaps="[16]" :mobile-gaps="[32]">
        <div cls="policy__pretitle">
          <r-round-button size="small" pointer-events>
            <svgo-info />
          </r-round-button>
          We care about your data
        </div>
        <div cls="policy__wrap">
          <div cls="policy__title">{{ oa.post_title }}</div>
          <r-grid desktop-column="1" :desktop-gaps="[64]" :mobile-gaps="[48]">
            <div v-html="oa.post_content" />
            <!-- <r-grid cls="policy__box" desktop-column="1" :desktop-gaps="[24]">
              <div cls="policy__box-title">Information Collection And Use</div>
              <div cls="policy__box-desc">
                The client turned to the Studio for a complete repackaging of the brand. Previously,
                the company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.
                The client turned to the Studio for a complete repackaging of the brand. Previously,
                the company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.The
                client turned to the Studio for a complete repackaging of the brand. Previously, the
                company was called "Isabelle". We have developed a new naming, a website with a
                catalog of curtains and accessories, and the main elements of corporate identity.
              </div>
            </r-grid>
            <r-grid desktop-column="1" :desktop-gaps="[24]">
              <div cls="policy__box-title">Information Collection And Use</div>
              <r-grid desktop-column="1" :desktop-gaps="[8]">
                <div cls="policy__box-pretitle">Information Collection And Use</div>
                <div cls="policy__box-desc">
                  The client turned to the Studio for a complete repackaging of the brand.
                  Previously, the company was called "Isabelle". We have developed a new naming, a
                  website with a catalog of curtains and accessories, and the main elements of
                  corporate identity. The client turned to the Studio for a complete repackaging of
                  the brand. Previously, the company was called "Isabelle". We have developed a new
                  naming, a website with a catalog of curtains and accessories, and the main
                  elements of corporate identity.The client turned to the Studio for a complete
                  repackaging of the brand. Previously, the company was called "Isabelle". We have
                  developed a new naming, a website with a catalog of curtains and accessories, and
                  the main elements of corporate identity.
                </div>
              </r-grid>
            </r-grid> -->
          </r-grid>
        </div>
      </r-grid>
    </div>
  </div>
</template>

<style module lang="scss">
.policy {
  padding: 136px 0 160px;
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    gap: 32px;
  }
  &__pretitle {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__title {
    @include desctop-H2;
    white-space: nowrap;
  }
  &__box {
    &-title {
      @include desctop-H4;
    }
    &-pretitle {
      @include desctop-caption-17-db;
    }
  }
}
@include mobile {
  .policy {
    padding: 72px 0 88px;
    &__wrap {
      gap: 72px;
    }
    &__title {
      @include mob-H1;
    }
    &__box {
      &-title {
        @include mob-h4-22;
      }
    }
  }
}
</style>
