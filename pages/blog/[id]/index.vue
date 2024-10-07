<script setup lang="ts">
import type { Blog } from "~/types/blog-case"

const { $ScrollTrigger } = useNuxtApp()
const showHideScrollbar = ref(false) // для показ/скрыть скроллбара в моб версии
const block = ref()
const progress = ref(0)
const { id } = useRoute().params
const { data } = await useFetch<Blog>(`https://api.repin.agency/wp-json/api/v1/article/${id}`, {
  server: false,
  lazy: true,
})
useSeoMeta({
  title: () => `Repin Agency | ${data.value?.title}`,
  ogTitle: () => `Repin Agency | ${data.value?.title}`,
  // description: () => data.value?.block_1.subtitle,
  // ogDescription: () => data.value?.block_1.subtitle,
})

onMounted(() => {
  setTimeout(() => {
    if (!block.value) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        $ScrollTrigger.create({
          trigger: document.body,
          start: block.value.offsetTop,
          end: block.value.offsetHeight + block.value.offsetTop,
          onUpdate: (self) => {
            progress.value = self.progress * 100
            if (progress.value > 0 && progress.value < 100) {
              showHideScrollbar.value = true
            } else {
              showHideScrollbar.value = false
            }
          },
        })
      }
    })
    observer.observe(block.value)
  }, 1000)
})
</script>

<template>
  <div v-if="data" cls="blog">
    <div class="container">
      <lazy-delay-hydration>
        <lazy-blog-case-banner
          :date="data.date"
          :min="data.fields.blog_content_time"
          :title="data.title"
          :tags="data.tags"
          :desc="data.fields.blog_description"
          :subdesc="data.fields.blog_subdescription"
        />
      </lazy-delay-hydration>
    </div>
    <r-video
      v-if="data.fields.blog_video_iframe"
      :vimeo="{ short: data.fields.blog_video_iframe }"
      cls="blog__video"
    />
    <div cls="blog__img">
      <img :src="data.fields.blog_img" alt="" />
    </div>
    <div class="container">
      <div cls="blog__wrap">
        <div cls="blog__share">
          <lazy-blog-case-share :title="data.title" />
        </div>
        <div cls="blog__wrap-inner">
          <div ref="block" cls="blog__wrap-box">
            <lazy-blog-case-blocks
              :blocks="data.fields.blog_content_flex"
              :author-list="data.fields.blog_authors_list"
              :author-title="data.fields.blog_author_text"
            />
          </div>
          <div cls="blog__progress-bar">
            <lazy-blog-case-progress-bar
              :progress="progress"
              :show-hide-scrollbar="showHideScrollbar"
            />
          </div>
        </div>
      </div>
      <!-- <div v-if="data.fields.blog_less_title && data.fields.blog_less_desc" cls="blog__start">
        <lazy-blog-case-start
          :title="data.fields.blog_less_title"
          :desc="data.fields.blog_less_desc"
          :img="data.fields.blog_less_img"
          :link="data.fields.blog_lessong_link"
          :text-link="data.fields.blog_btn"
        />
      </div> -->
      <div cls="blog__related">
        <lazy-blog-case-related />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.blog {
  padding: 130px 0 280px;
  &__video {
    margin-top: 24px;
  }
  &__img {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding: 24px;
    margin-top: 8px;
    img {
      border-radius: 24px;
    }
  }
  &__wrap {
    padding: 96px 0 0;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    &-inner {
      display: flex;
      width: 100%;
      max-width: 1134px;
      justify-content: space-between;
    }
  }
  &__start {
    padding: 32px 0;
  }
  &__related {
    padding-top: 96px;
  }
}
@include desktop-medium {
  .blog {
    &__wrap {
      &-inner {
        max-width: 945px;
      }
      &-box {
        max-width: 845px;
      }
    }
  }
}
@include tablet {
  .blog {
    padding: 56px 0 96px;
    &__img {
      padding: 16px 8px;
      img {
        border-radius: 16px;
      }
    }
    &__wrap {
      padding: 72px 0 0;
      &-inner {
        max-width: 783px;
      }
    }
    &__start {
      padding: 16px 0;
    }
    &__progress-bar,
    &__share {
      padding-bottom: 44px;
    }
  }
}
@include mobile {
  .blog {
    padding: 72px 0 88px;
    // &__progress-bar{

    // }
    &__img {
      margin-top: 0;
      img {
        border-radius: 8px;
      }
    }
    &__share {
      display: none;
    }
    &__wrap {
      padding: 72px 0 0;
    }
    &__related {
      padding: 72px 0 0;
    }
  }
}
</style>
