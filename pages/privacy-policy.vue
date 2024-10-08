<script setup lang="ts">
const { data } = await useFetch("/api/privacy-policy")

const pp = computed(() => {
  return data.value?.en
})

useSeoMeta({
  title: () => `Repin Agency | ${pp.value?.post_title}`,
  ogTitle: () => `Repin Agency | ${pp.value?.post_title}`,
})
</script>

<template>
  <div v-if="pp" cls="policy">
    <div class="container">
      <r-grid desktop-column="1" :desktop-gaps="[16]" :mobile-gaps="[32]">
        <div cls="policy__pretitle">
          <r-round-button size="small" pointer-events>
            <svgo-info />
          </r-round-button>
          We care about your data
        </div>
        <div cls="policy__wrap">
          <div cls="policy__title">{{ pp.post_title }}</div>
          <div cls="policy__content" v-html="pp.post_content" />
        </div>
      </r-grid>
    </div>
  </div>
</template>

<style module lang="scss">
.policy {
  padding: 136px 0 160px;
  &__wrap {
    display: flex;
    gap: 32px;
    justify-content: space-between;
  }
  &__content {
    max-width: 628px;
    p {
      margin-top: 24px;
      &:nth-child(1) {
        margin-top: 0;
      }
    }
    h2 {
      @include desctop-H4;
    }
    h3 {
      @include desctop-caption-17-db;
      margin-top: 24px;
    }
    ol,
    ul {
      padding-left: 24px;
      margin-top: 24px;
    }
  }
  &__pretitle {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__title {
    @include desctop-H2;
  }
}
@include tablet-small {
  .policy {
    padding: 72px 0 88px;
    &__wrap {
      flex-direction: column;
    }
    &__content {
      max-width: 100%;
      p {
        margin-top: 16px;
      }
      h2 {
        @include mob-h4-22;
      }
      h3 {
        margin-top: 16px;
      }
      ul {
        padding-left: 16px;
      }
    }
    &__title {
      @include mob-H2;
    }
  }
}
</style>
