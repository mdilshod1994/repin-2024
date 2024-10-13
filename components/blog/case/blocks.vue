<script setup lang="ts">
import type { BlogAuthorsList, BlogContentFlex } from "~/types/blog-case"

defineProps<{
  blocks: BlogContentFlex[]
  authorTitle?: string
  authorList?: BlogAuthorsList[]
  title: string
}>()
</script>

<template>
  <div cls="wrap" class="wrap-blog">
    <div cls="block">
      <div
        v-for="block in blocks"
        :cls="{
          block__title: block.acf_fc_layout === 'flex_title',
          '-big': block.flex_title_size?.value === '4',
          '-medium': block.flex_title_size?.value === '6',
          block__text: block.acf_fc_layout === 'flex_p',
          'block__img-video': block.acf_fc_layout === 'flex_img',
          block__list: block.acf_fc_layout === 'flex_ul',
          block__info: block.acf_fc_layout === 'flex_img_text',
          block__video: block.acf_fc_layout === 'flex_video',
          block__flex: block.acf_fc_layout === 'flex_two_img',
          block__quote: block.acf_fc_layout === 'flex_blockquote',
          block__code: block.acf_fc_layout === 'flex_iframe',
          'block__small-text': block.acf_fc_layout === 'flex_small',
        }"
        :class="`${block.acf_fc_layout === 'flex_title' && block.flex_title_size?.value === '4' ? 'block' : ''}`"
      >
        <div v-if="block.acf_fc_layout === 'flex_title'" v-html="block.flex_title_text" />
        <div v-if="block.acf_fc_layout === 'flex_p'" v-html="block.flex_p_title" />
        <div v-if="block.acf_fc_layout === 'flex_img'" cls="block__img-video">
          <div cls="block__img-video-wrap">
            <img :src="block.flex_img_link" alt="" />
          </div>
          <span v-if="block.helper">{{ block.helper }}</span>
        </div>
        <div v-if="block.acf_fc_layout === 'flex_small'">
          {{ block.flex_small_text }}
        </div>
        <div v-if="block.acf_fc_layout === 'flex_ul'">
          <div
            v-if="block.acf_fc_layout === 'flex_ul' && block.flex_ul_type?.value === 'number'"
            cls="block__list-block"
          >
            <div v-for="(t, idx) in block.flex_ul_list" cls="block__list-item">
              <div cls="block__list-item-num">
                {{ idx + 1 }}
              </div>
              <span v-html="t.item_ul" />
            </div>
          </div>
          <div
            v-if="block.acf_fc_layout === 'flex_ul' && block.flex_ul_type?.value === 'just'"
            cls="block__list-block"
          >
            <div v-for="t in block.flex_ul_list" cls="block__list-item -mt">
              <div cls="block__list-item-dot" />
              <span v-html="t.item_ul" />
            </div>
          </div>
        </div>
        <div v-if="block.acf_fc_layout === 'flex_img_text'" cls="block__info">
          <div cls="block__info-wrap">
            <div cls="block__info-img">
              <img :src="block.img" alt="" />
            </div>
            <span v-if="block.helper"> {{ block.helper }} </span>
          </div>
          <div cls="block__text" v-html="block.text" />
        </div>
        <div v-if="block.acf_fc_layout === 'flex_video'" cls="block__video">
          <r-video v-if="block.video_vimeo" :vimeo="{ short: block.video_vimeo }" remove-padding />
        </div>
        <div v-if="block.acf_fc_layout === 'flex_two_img'" cls="block__flex">
          <div cls="block__code -small" />
          <div cls="block__img-video -small">
            <div cls="block__img-video-wrap">
              <img :src="block.img_2" alt="" />
            </div>
          </div>
        </div>
        <div v-if="block.acf_fc_layout === 'flex_blockquote' && block.flex_blockquote_text">
          <img src="@/assets/images/tempImages/quote.png" alt="" />
          <div cls="block__quote-text">
            {{ block.flex_blockquote_text }}
          </div>
        </div>
        <div v-if="block.acf_fc_layout === 'flex_iframe'">
          <!-- <div class="block__text">Here will be some of code</div> -->
          <div v-html="block.flex_iframe_code" />
        </div>
      </div>
    </div>

    <div cls="block" class="block">
      <div v-if="authorList" cls="block__contributors">
        <div cls="block__share">
          <blog-case-share :title="title" />
        </div>
        <div cls="block__contributors-title">{{ authorTitle }}</div>
        <!-- <div cls="block__contributors-title -desk">{{ authorTitle }}</div> -->
        <!-- <div cls="block__contributors-title -mob">The article was made by</div> -->
        <div cls="block__contributors-authors">
          <r-author
            v-for="(author, idx) in authorList"
            :key="idx"
            :name="author.item_name"
            :profession="author.item_sign"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1001px;
  gap: 104px;
}
.block {
  display: flex;
  flex-direction: column;
  &__share {
    display: none;
  }
  &__title {
    &.-big {
      @include desctop-H2;
      span {
        @include desctop-H2-ram;
        font-style: italic;
      }
    }
    &.-medium {
      @include desctop-H4-ram;
    }
    &.-big + &.-medium {
      margin-top: 48px;
    }
  }
  &__small-text {
    display: block;
    text-align: center;
    margin-top: 8px;
  }
  &__text {
    @include article-17;
    a {
      color: var(--Purple);
    }
  }
  &__img-video {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
    &.-small {
      .block {
        &__img-video {
          &-wrap {
            height: 596px;
            img {
              height: 100%;
            }
          }
        }
      }
    }
    &-wrap {
      border-radius: 32px;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
      }
    }
    span {
      text-align: center;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    &-block {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &-item {
      display: flex;
      gap: 28px;
      &-num {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        color: var(--Purple);
        font-family: "Ramillas Trial";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: -0.72px;
        display: flex;
        align-items: center;
      }
      &-dot {
        width: 32px;
        height: 26px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &::after {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          background: var(--Purple);
        }
      }
      &.-mt {
        span {
          margin-top: 0;
        }
      }
      span {
        margin-top: 4px;
        @include article-17;
      }
    }
  }
  &__info {
    display: flex;
    gap: 24px;
    &-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      max-width: 496px;
      width: 100%;
      flex-shrink: 0;
      span {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
      }
    }
    &-img {
      height: 411px;
      border-radius: 32px;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  &__code {
    border-radius: 32px;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    div {
      width: 100%;
      height: 100%;
    }
    &.-small {
      height: 596px;
    }
  }
  &__flex {
    display: flex;
    gap: 24px;
  }
  &__quote {
    padding: 96px 0;
    position: relative;
    margin-top: 48px;
    img {
      position: absolute;
      top: 0;
      left: -90px;
      width: 242px;
      height: 187px;
    }
    &-text {
      position: relative;
      @include desctop-H4-ram;
    }
  }
  &__contributors {
    padding: 32px 0 0;
    display: flex;
    justify-content: space-between;
    height: 243px;
    &-authors {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
    &-title {
      &.-mob {
        display: none;
      }
    }
  }
  &__small-text + &__title,
  &__list + &__title,
  &__flex + &__title,
  &__code + &__title,
  &__video + &__title,
  &__info + &__title,
  &__img-video + &__title,
  &__text + &__title {
    margin-top: 104px;
    &.-medium {
      margin: 48px 0 0 !important;
    }
  }
  &__text + &__flex,
  &__text + &__list,
  &__text + &__code,
  &__text + &__img-video,
  &__text + &__info,
  &__text + &__video {
    margin-top: 48px;
    &.-mob-full-screen {
      margin-top: 48px;
    }
  }
  &__small-text + &__text,
  &__title + &__flex,
  &__title + &__code,
  &__title + &__video,
  &__title + &__info,
  &__title + &__img-video,
  &__title + &__list,
  &__title + &__text,
  &__list + &__flex,
  &__list + &__code,
  &__list + &__video,
  &__list + &__info,
  &__list + &__img-video,
  &__list + &__text,
  &__img-video + &__list,
  &__img-video + &__text,
  &__video + &__text,
  &__video + &__flex,
  &__video + &__code,
  &__video + &__video,
  &__video + &__info,
  &__video + &__img-video,
  &__video + &__text,
  &__info + &__flex,
  &__info + &__code,
  &__info + &__info,
  &__info + &__img-video,
  &__img-video + &__img-video,
  &__info + &__text {
    margin-top: 48px;
  }
  &__code + &__video {
    margin-top: 16px;
  }
}

@include tablet {
  .wrap {
  }
  .block {
    &__title {
      &.-big {
        @include mob-H1;
        span {
          @include mob-H1-ram;
          font-style: italic;
        }
      }
      &.-medium {
        @include mob-h4-22-ram;
      }
      &.-big + &.-medium {
        margin-top: 32px;
      }
    }
    &__small-text + &__title,
    &__list + &__title,
    &__flex + &__title,
    &__code + &__title,
    &__video + &__title,
    &__info + &__title,
    &__img-video + &__title,
    &__text + &__title {
      &.-medium {
        margin: 32px 0 0 !important;
      }
    }
    &__text {
      @include mob-body-14;
    }
    &__list {
      gap: 24px;
      &-title {
        @include mob-h4-22-ram;
      }
      &-block {
        gap: 16px;
      }
      &-item {
        gap: 12px;
        &-num {
          width: 24px;
          height: 24px;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.32px;
        }
        &-dot {
          width: 24px;
          height: 20px;
          &::after {
            width: 6px;
            height: 6px;
          }
        }
        span {
          margin-top: 2px;
          @include mob-body-14;
        }
      }
    }
    &__info {
      &-wrap {
        width: 411px;
      }
      &-img {
        border-radius: 16px;
      }
    }
    &__code {
      border-radius: 16px;

      &.-small {
        height: 514px;
      }
    }
    &__img-video {
      &-wrap {
        border-radius: 16px;
      }
      &.-small {
        .block {
          &__img-video {
            &-wrap {
              height: 514px;
            }
          }
        }
      }
    }
    &__quote {
      margin-top: 40px;
      &-text {
        @include mob-H3-ram;
      }
      img {
        width: 183px;
        height: 141px;
        left: -50px;
        top: 25px;
      }
    }
    &__contributors {
      height: auto;
      margin-top: -32px;
      padding-bottom: 44px;
    }
  }
}
@include tablet-small {
  .warp {
    gap: 72px;
  }
  .block {
    &__info {
      &-wrap {
        width: 301px;
      }
      &-img {
        border-radius: 16px;
      }
    }
    &__small-text + &__title,
    &__list + &__title,
    &__flex + &__title,
    &__code + &__title,
    &__video + &__title,
    &__info + &__title,
    &__img-video + &__title,
    &__text + &__title {
      margin-top: 72px;
    }
    &__text + &__flex,
    &__text + &__code,
    &__text + &__list,
    &__text + &__img-video,
    &__text + &__info {
      margin-top: 32px;
      &.-mob-full-screen {
        margin-top: 32px;
      }
    }
    &__small-text + &__text,
    &__title + &__flex,
    &__title + &__code,
    &__title + &__video,
    &__title + &__info,
    &__title + &__img-video,
    &__title + &__list,
    &__title + &__text,
    &__list + &__flex,
    &__list + &__code,
    &__list + &__video,
    &__list + &__info,
    &__list + &__img-video,
    &__list + &__text,
    &__img-video + &__list,
    &__img-video + &__text,
    &__video + &__text,
    &__video + &__flex,
    &__video + &__code,
    &__video + &__video,
    &__video + &__info,
    &__video + &__img-video,
    &__video + &__text,
    &__info + &__flex,
    &__info + &__code,
    &__info + &__info,
    &__info + &__img-video,
    &__info + &__text {
      margin-top: 32px;
    }
    &__code + &__video {
      margin-top: 8px;
    }
  }
}
@include mobile {
  .wrap {
    gap: 56px;
  }
  .block {
    gap: 0;
    &__title {
      @include mob-H2;
      margin-bottom: 16px;
      span {
        @include mob-H2-ram;
        font-style: italic;
      }
    }
    &__text {
      @include mob-body-16;
    }
    &__text + &__flex,
    &__text + &__code,
    &__text + &__list,
    &__text + &__img-video,
    &__text + &__info {
      margin-top: 32px;
      &.-mob-full-screen {
        margin-top: 32px;
      }
    }
    &__list {
      margin-top: 32px;
      &-item {
        &-num {
          width: 24px;
          height: 22px;
        }
        span {
          @include mob-body-16;
        }
      }
    }
    &__list + &__flex,
    &__list + &__code,
    &__list + &__video,
    &__list + &__info,
    &__list + &__img-video,
    &__list + &__text {
      margin-top: 32px;
    }
    &__img-video {
      &.-mob-full-screen {
        margin: 0 -16px;
        height: auto;
        width: calc(100% + 32px);
        .block {
          &__img-video {
            &-wrap {
              border-radius: 0;
            }
          }
        }
      }
      &.-small {
        .block {
          &__img-video {
            &-wrap {
              height: 480px;
            }
          }
        }
      }
      &-wrap {
        width: 100%;
        img {
          width: 100%;
        }
      }
      span {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__img-video + &__list,
    &__img-video + &__text {
      margin-top: 32px;
    }
    &__info {
      flex-direction: column;
      &-wrap {
        width: 100%;
        max-width: none;
        span {
          font-size: 12px;
          line-height: 16px;
        }
      }
      &-img {
        height: 343px;
      }
    }
    &__flex {
      flex-direction: column;
      gap: 16px;
    }
    &__code {
      &.-small {
        height: 494px;
      }
    }
    &__code + &__video {
      margin-top: 16px;
    }
    &__video + &__text {
      margin-top: 32px;
    }
    &__quote {
      padding: 24px 0;
      margin-top: 0;
      &-text {
        @include mob-h4-22-ram;
      }
      img {
        width: 170px;
        height: 131px;
        bottom: 0;
        left: auto;
        top: auto;
        right: 0;
      }
    }
    &__contributors {
      flex-direction: column;
      padding: 24px 0 56px;
      gap: 48px;
      &-title {
        &.-desk {
          display: none;
        }
        &.-mob {
          display: block;
        }
      }
      &-authors {
        gap: 12px;
      }
    }
    &__share {
      display: flex;
      justify-content: center;
      padding-top: 24px;
    }
  }
}
</style>
