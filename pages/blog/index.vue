<script setup lang="ts">
import type { Blogs } from "~/types/blog"

const store = usePreloaderTrigger()
const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}

const { data } = useFetch<Blogs>("https://api.repin.agency/wp-json/api/v1/blogs?page=1")

const blogs = computed(() => {
  // if (locale.value === "ru" ) {
  // return data.value?.ru
  // }
  return data.value?.ru
})

onMounted(() => {
  store.handlePreloader(true)
})
</script>

<template>
  <div v-if="blogs" cls="blogs">
    <div class="container">
      <r-grid desktop-column="1" :desktop-gaps="[112]" :tablet-gaps="[48]" :mobile-gaps="[48]">
        <r-title pretitle="Blog" flex-start>
          <template #title> Stories <span>& User Cases</span> </template>
          <template #addons>
            <nuxt-link
              to=""
              class="underline-link"
              cls="blogs__link"
              @mouseover="setCursorType('link')"
              @mouseleave="setCursorType('')"
            >
              Read on Medium
            </nuxt-link>
          </template>
        </r-title>
        <r-grid desktop-column="1" :desktop-gaps="[138]" :tablet-gaps="[124]" :mobile-gaps="[56]">
          <lazy-delay-hydration>
            <lazy-blog-list>
              <lazy-blog-item v-for="blog in blogs.blogs" :blog="blog" />
            </lazy-blog-list>
          </lazy-delay-hydration>
          <r-button cls="blogs__btn"> Show more </r-button>
        </r-grid>
      </r-grid>
    </div>
    <lazy-delay-hydration>
      <re-use-social-media />
    </lazy-delay-hydration>
  </div>
</template>

<style module lang="scss">
.blogs {
  padding: 144px 0 160px;
  display: flex;
  flex-direction: column;
  gap: 139px;
  width: 100%;
  &__btn {
    width: max-content;
    margin: 0 auto;
  }
}
@include tablet {
  .blogs {
    padding: 72px 0 88px;
    gap: 40px;
  }
}
@include mobile {
  .blogs {
    gap: 160px;
  }
}
</style>
