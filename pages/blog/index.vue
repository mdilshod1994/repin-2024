<script setup lang="ts">
import type { Blogs } from "~/types/blog"

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}

const blogs = ref<Blogs>()

const blogPage = ref(1)
const totalPage = ref(0)

const fetchB = async () => {
  const { data } = await useFetch(`/api/blogs?page=${blogPage.value}`)

  if (!data.value) return

  if (blogPage.value > 1) {
    blogs.value?.en.blogs.push(...data.value.en.blogs)
  } else {
    blogs.value = data.value
  }

  totalPage.value = data.value.en.total_pages
}

await fetchB()

const loadMore = async () => {
  if (totalPage.value > blogPage.value) {
    blogPage.value++
    await fetchB()
  }
}
</script>

<template>
  <div cls="blogs">
    <div class="container">
      <r-grid desktop-column="1" :desktop-gaps="[112]" :tablet-gaps="[48]" :mobile-gaps="[48]">
        <r-title pretitle="Blog" flex-start>
          <template #title> Stories <span>& User Cases</span> </template>
        </r-title>
        <r-grid
          v-if="blogs"
          desktop-column="1"
          :desktop-gaps="[138]"
          :tablet-gaps="[124]"
          :mobile-gaps="[56]"
        >
          <lazy-blog-list>
            <lazy-blog-item v-for="blog in blogs.en.blogs" :key="blog.id" :blog="blog" />
          </lazy-blog-list>
          <r-button
            v-if="blogPage < blogs.en.total_pages"
            cls="blogs__btn"
            @click="loadMore"
            @mouseover="setCursorType('link')"
            @mouseleave="setCursorType('')"
          >
            Show more
          </r-button>
        </r-grid>
      </r-grid>
    </div>
    <!-- <re-use-social-media /> -->
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
