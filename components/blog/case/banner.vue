<script setup lang="ts">
const store = usePreloaderTrigger()

onMounted(() => {
  store.handlePreloader(true)
})
</script>

<template>
  <r-grid
    desktop-column="1"
    cls="banner"
    :desktop-gaps="[13]"
    :tablet-gaps="[16]"
    :mobile-gaps="[16]"
  >
    <div cls="banner__top">
      <r-round-button size="small"><svgo-info /></r-round-button> 12.11.2021 <span /> 4 min read
    </div>
    <lazy-r-banner vertical-gap="32" vertical-tablet-small-gap="72" vertical-mobile-gap="32">
      <template #title>
        <div cls="banner__title">
          Can walking meetings
          <span>
            lead
            <br />
            to healthier lives?
          </span>
        </div>
      </template>
      <div class="texts -column">
        <div class="text -bold">
          A conversation with Spot’s CEO on how opinionated technology can support healthier
          collaboration and healthier lives.
        </div>
        <div class="text">
          Each month we’ll highlight a company that is providing a product or service to support
          distributed teams, asynchronous communication, work from anywhere, and a more mindful
          approach to work. Twist was built with these characteristics in mind, and each of our
          featured partners align with those values.
        </div>
      </div>
      <template #bottom-left>
        <div class="tabs">
          <div v-for="t in 4" class="tab">tags</div>
        </div>
      </template>
    </lazy-r-banner>
  </r-grid>
</template>

<style module lang="scss">
.banner {
  &__top {
    display: flex;
    align-items: center;
    gap: 8px;
    @include desctop-caps;
  }
}
@include desktop-medium {
  .banner {
    &__title {
      // max-width: 610px;
    }
  }
}
@include tablet {
  .banner {
    &__title {
      max-width: 428px;
    }
  }
}
</style>
