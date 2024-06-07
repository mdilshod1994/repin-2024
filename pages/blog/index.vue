<script setup lang="ts">
const store = usePreloaderTrigger()

onMounted(() => {
  store.handlePreloader(true)
})
</script>

<template>
  <div cls="blogs">
    <div class="container">
      <div cls="blogs__wrap">
        <r-grid>
          <r-title pretitle="Blog">
            <template #title> Stories <span>& User Cases</span> </template>
            <template #addons>
              <nuxt-link to="" class="underline-link" cls="stories__link">
                Read on Medium
              </nuxt-link>
            </template>
          </r-title>
        </r-grid>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.blogs {
  padding: 144px 0 160px;
}
</style>
