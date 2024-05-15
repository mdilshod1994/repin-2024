<!--
TODO: разделить на компоненты
-->

<script setup lang="ts">
import type { PortfolioCase } from "~/types/portfolio-case"

const { id } = useRoute().params
const video = ref<HTMLVideoElement>()
const reverse = ref(false)
const { data: portfolio } = await useFetch<PortfolioCase>(
  `https://repin.agency/wp-json/api/v1/project/${id}`,
  {
    lazy: true,
  },
)
watch(video, (nv) => {
  if (nv) {
    console.log(nv)
    nv.onplaying = () => {
      reverse.value = true
    }
  }
})
</script>

<template>
  <div v-if="portfolio" cls="case">
    <div class="container">
      <portfolio-case-banner :banner="portfolio" />
      <div cls="case__cover">
        <div cls="case__square" class="dark-background">
          <div cls="case__square-wrap">
            <div cls="case__square-inner">
              <video
                v-if="portfolio.block_1.cover_in_project.img_proj_vid_mp4"
                ref="video"
                autoplay
                muted
                loop
                playsinline
                :cls="{ '-active': reverse }"
              >
                <source
                  :src="portfolio.block_1.cover_in_project.img_proj_vid_mp4"
                  type="video/mp4"
                />
              </video>
              <img
                :cls="{ '-not-active': reverse }"
                :src="portfolio.block_1.cover_in_project.img_proj"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="hasVideo" cls="case__video">
      <r-video
        :video="{
          short: portfolio.block_1.video_first_mp4,
          long: portfolio.block_1.video_first_full_mp4,
        }"
        :vimeo="{ short: portfolio.block_1.anons_vimeo, long: portfolio.block_1.anons_vimeo_full }"
      />
    </div> -->
    <div v-for="block in portfolio.content">
      <div v-if="block.acf_fc_layout === 'flex_text_desc'" class="container">
        <div cls="case__wrap">
          <r-title
            :title="block.ftd_title"
            align-position="start"
            :text-rigth="block.acf_fc_layout === 'flex_text_desc' && !block.ftd_title"
          >
            <template #addons>
              <div class="texts">
                <div class="text" v-html="block.ftd_desc" />
              </div>
            </template>
          </r-title>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'flex_before_after'" cls="case__before-after">
        <r-before-after>
          <template #after>
            <img :src="block.after_img" alt="" />
          </template>
          <template #before>
            <img :src="block.before_img" alt="" />
          </template>
        </r-before-after>
      </div>
      <div v-if="block.acf_fc_layout === 'left_tile-right_text'" class="container">
        <div cls="case__wrap">
          <r-title :pretitle="block.title" align-position="start">
            <template #addons>
              <div cls="case__desc">
                {{ block.text }}
              </div>
            </template>
          </r-title>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'slider_images'" class="container">
        <div cls="case__slider" class="dark-background">
          <portfolio-case-slider>
            <div v-for="img in block.images">
              <img :src="img" alt="" />
            </div>
          </portfolio-case-slider>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'left_title-right_two_text'" class="container">
        <div cls="case__wrap">
          <r-title :pretitle="block.title" align-position="start">
            <template #addons>
              <div class="texts">
                <div class="text">
                  {{ block.text_1 }}
                </div>
                <div class="text">
                  {{ block.text_2 }}
                </div>
              </div>
            </template>
          </r-title>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'photo_container'" class="container">
        <div cls="case__square" class="dark-background">
          <div cls="case__square-wrap">
            <div cls="case__square-inner">
              <a :href="block.img" data-fancybox="gallery">
                <img :src="block.img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'flex_iframe'" class="container">
        <div cls="case__square" class="dark-background">
          <div cls="case__square-wrap">
            <div cls="case__square-inner">
              <div v-html="block.iframe" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'text_center'" class="container">
        <div cls="case__wrap">
          <div cls="case__texts">
            <div cls="case__texts-title">
              {{ block.title }}
            </div>
            <div cls="case__texts-text">
              {{ block.text }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'two_images'" class="container">
        <r-grid desktop-column="2" tablet-column="2" cls="case__grid">
          <div cls="case__grid-card">
            <a :href="block.image_1" data-fancybox="gallery">
              <img :src="block.image_1" alt="" />
            </a>
          </div>
          <div cls="case__grid-card">
            <a :href="block.image_2" data-fancybox="gallery">
              <img :src="block.image_2" alt="" />
            </a>
          </div>
        </r-grid>
      </div>
      <div v-if="block.acf_fc_layout === 'flex_big_img'" class="container">
        <div cls="case__square" class="dark-background">
          <div cls="case__square-wrap">
            <div cls="case__square-inner">
              <a :href="block.fbi_img" data-fancybox="gallery">
                <img :src="block.fbi_img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="block.acf_fc_layout === 'flex_desc_author'" class="container">
        <div cls="case__expirience">
          <reuse-expirience :feedback-desc="block?.fda_desc">
            <template #author>
              <r-author
                :name="block?.fda_name"
                :profession="block?.fda_sign"
                :avatar="block?.fda_avatar"
              />
            </template>
          </reuse-expirience>
        </div>
      </div>
      <!-- fda_avatar
fda_name
fda_sign -->
      <!-- <div v-if="block.acf_fc_layout === 'flex_big_img'" cls="case__unknow" class="dark-background">
        <div cls="case__unknow-inner">
          <a :href="block.fbi_img" data-fancybox="gallery">
            <img :src="block.fbi_img" alt="" />
          </a>
          <video v-if="false" :src="block.fbi_video" />
        </div>
      </div> -->
    </div>
    <div class="container">
      <!-- <div v-if="portfolio.repin_agency_mobicom" cls="case__expirience">
        <reuse-expirience :info="portfolio.repin_agency_mobicom" />
      </div> -->
      <portfolio-case-authors v-if="portfolio.team" :authors="portfolio.team" />
      <portfolio-case-next-portfolios />
    </div>
  </div>
</template>

<style module lang="scss">
.case {
  padding-top: 152px;
  &__cover {
    video {
      position: absolute;
      opacity: 0;
      &.-active {
        position: relative;
        opacity: 1;
      }
    }
    img {
      position: relative;
      opacity: 1;
      &.-not-active {
        position: absolute;
        opacity: 0;
      }
    }
  }
  &__wrap {
    padding: 104px 0;
  }
  &__before-after {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
  &__desc {
    @include desctop-H3;
  }
  &__square {
    padding: 24px 0;
    &-wrap {
      width: 100%;
      height: 100%;
      border-radius: 24px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-inner {
      width: 100%;
      height: 100%;
      div {
        width: 100%;
        height: 100%;
      }
      iframe {
        width: 100%;
      }
    }
  }
  &__texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 32px;
    max-width: 894px;
    text-align: center;
    &-title {
      @include desctop-H3;
    }
    &-text {
      max-width: 458px;
    }
  }
  &__grid {
    padding: 24px;
    &-card {
      height: 0;
      padding-bottom: 108.23%;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 24px;
      overflow: hidden;
      position: relative;
      &:last-child {
        margin-top: 160px;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  &__unknow {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
    &-inner {
      background: rgba(0, 0, 0, 0.3);
    }
  }
  &__expirience {
    padding: 104px 0;
  }
}
@include desktop-medium {
  .case {
    padding-top: 72px;
  }
}
@include tablet {
  .case {
    padding-top: 56px;

    &__square {
      &-wrap {
        border-radius: 16px;
      }
    }
    &__texts {
      gap: 24px;
      &-title {
        @include mob-H3;
        max-width: 662px;
      }
      &-text {
        max-width: 404px;
      }
    }
    &__wrap {
      padding: 72px 0;
      :global(.texts) {
        max-width: 623px;
      }
    }
    &__desc {
      @include mob-H3;
      max-width: 623px;
    }
    &__grid,
    &__square {
      padding: 16px 0;
    }
    &__grid {
      &-card {
        border-radius: 16px;
        &:last-child {
          margin-top: 104px;
        }
      }
    }
    &__expirience {
      padding: 72px 0;
    }
  }
}
@include mobile {
  .case {
    padding-top: 72px;
    &__expirience {
      padding: 72px 0 56px;
    }
    &__grid {
      &-card {
        &:last-child {
          margin-top: 56px;
        }
      }
    }
  }
}
</style>
