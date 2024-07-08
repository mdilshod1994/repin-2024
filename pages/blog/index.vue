<script setup lang="ts">
import Cookies from "universal-cookie"

import type { Blogs } from "~/types/blog"

const { locale } = useI18n()

const cookies = new Cookies(null, { path: "/" })
const store = usePreloaderTrigger()
const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
const blogs = ref<Blogs>()
const page = ref(1)

const lastFetchedPage = cookies.get("b-curr-page")

const fetchData = async (fpage: number) => {
  if (fpage > 1) {
    await fetchBlogs(fpage)
  } else {
    await fetchBlogs(1)
  }
}

const fetchBlogs = async (bpage: number) => {
  try {
    await $fetch<Blogs>(`https://api.repin.agency/wp-json/api/v1/blogs?page=${bpage}`).then(
      (res) => {
        if (bpage > 1) {
          blogs.value?.ru.blogs.push(...res.ru.blogs)
        } else {
          blogs.value = res
        }
        store.handlePreloader(true)
      },
    )
  } catch (error) {
    console.log(error)
  }
}

const nextPage = () => {
  if (!blogs.value) return
  if (page.value < blogs.value.ru.total_pages) {
    page.value++
    fetchData(page.value)
    cookies.set("b-curr-page", page.value)
  }
}

const tblogs = computed(() => {
  if (locale.value === "en") {
    return blogs.value?.en
  } else {
    return blogs.value?.ru
  }
})

onMounted(async () => {
  if (lastFetchedPage > page.value) {
    for (let index = 0; index < lastFetchedPage; index++) {
      const page = index + 1
      await fetchData(page)
    }
  } else {
    await fetchData(1)
  }
})
</script>

<template>
  <div cls="blogs">
    <div class="container">
      <r-grid desktop-column="1" :desktop-gaps="[112]" :tablet-gaps="[48]" :mobile-gaps="[48]">
        <r-title pretitle="Blog" flex-start>
          <template #title> Stories <span>& User Cases</span> </template>
          <!-- <template #addons>
            <nuxt-link
              to=""
              class="underline-link"
              cls="blogs__link"
              @mouseover="setCursorType('link')"
              @mouseleave="setCursorType('')"
            >
              Read on Medium
            </nuxt-link>
          </template> -->
        </r-title>
        <r-grid
          v-if="tblogs"
          desktop-column="1"
          :desktop-gaps="[138]"
          :tablet-gaps="[124]"
          :mobile-gaps="[56]"
        >
          <lazy-delay-hydration>
            <lazy-blog-list>
              <lazy-blog-item v-for="blog in tblogs.blogs" :key="blog.id" :blog="blog" />
            </lazy-blog-list>
          </lazy-delay-hydration>
          <r-button
            v-if="tblogs.blogs.length < tblogs.total_blogs"
            cls="blogs__btn"
            @click="nextPage"
          >
            Show more
          </r-button>
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
