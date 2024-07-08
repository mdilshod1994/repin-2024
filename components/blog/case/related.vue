<script setup lang="ts">
import type { Blogs } from "~/types/blog"

const { locale } = useI18n()

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}

// временно
const { data } = useFetch<Blogs>("https://api.repin.agency/wp-json/api/v1/blogs?page=1")

const blogs = computed(() => {
  if (locale.value === "ru") {
    return data.value?.ru
  } else {
    return data.value?.en
  }
})
</script>

<template>
  <r-grid
    v-if="blogs"
    desktop-column="1"
    :desktop-gaps="[112]"
    :tablet-gaps="[96]"
    :mobile-gaps="[46]"
    cls="related"
  >
    <r-title pretitle="Blog" flex-start>
      <template #title>
        <div cls="related__title">Related <span>articles</span></div>
      </template>
      <!-- <template #addons>
        <nuxt-link
          to=""
          class="underline-link"
          cls="related__link"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          Read on Medium
        </nuxt-link>
      </template> -->
    </r-title>
    <blog-list>
      <blog-item v-for="blog in blogs.blogs" :blog="blog" />
    </blog-list>
  </r-grid>
</template>

<style lang="scss" module>
@include mobile {
  .related {
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__link {
      display: none;
    }
  }
}
</style>
