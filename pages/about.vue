<script setup lang="ts">
import type { About, En } from "~/types/about"

const store = useGlobalData()

const { locale } = useI18n()

const { data: about } = await useFetch<About>("https://repin.agency/wp-json/api/v1/about", {
  lazy: true,
  onResponse: () => {
    store.handleLoader(true)
  },
})

const aboutContent = computed(() => {
  if (locale.value === "en") {
    if (!about.value) return
    return about.value.en as En
  } else {
    return about.value?.ru as En
  }
})
</script>

<template>
  <div v-if="aboutContent" cls="about">
    <div class="container">
      <div cls="about__promo">
        <div cls="about__promo-left">
          <r-round-button size="small" pointer-events>
            <svgo-info />
          </r-round-button>
          {{ aboutContent.page.title }}
        </div>
        <div cls="about__promo-right">
          <div cls="about__promo-text" v-html="aboutContent.page.title_big" />
        </div>
      </div>
    </div>
    <div cls="about__video">
      <r-video
        :video="{ short: aboutContent.page.video_short, long: aboutContent.page.video_long }"
        :vimeo="{
          short: aboutContent.page.video_short_vimeo,
          long: aboutContent.page.video_long_vimeo,
        }"
      />
    </div>
    <div class="dark-background">
      <about-full-cycle
        :full-cycle="aboutContent.page.items_b2"
        :title="aboutContent.page.title_b2"
        :description="aboutContent.page.description_b2"
      />
    </div>
    <div v-if="aboutContent.page.slides" cls="about__slider">
      <r-slider-content :contents="aboutContent.page.slides" />
    </div>
    <div class="container">
      <div cls="about__experts">
        <about-experts
          :title="aboutContent.page.title_b3"
          :description="aboutContent.page.description_b3"
        />
      </div>
    </div>
    <about-outstaff class="dark-background" :staff="aboutContent" />
    <div class="container">
      <div cls="about__awards">
        <about-award :awards="aboutContent" />
        <div cls="about__awards-link">
          <r-button :to="aboutContent.page.link_b5">
            {{ aboutContent.page.link_b5_text }}
          </r-button>
        </div>
      </div>
    </div>
    <div cls="about__photo-team">
      <about-team-photos :img="aboutContent.page.img_b6" />
    </div>
    <div class="container">
      <div cls="about__expirience">
        <re-use-expirience :info="aboutContent.page.repin_agency_mobicom" />
      </div>
      <div v-if="aboutContent.page.vacancies" cls="about__open-jobs">
        <about-open-jobs :about="aboutContent" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.about {
  &__promo {
    padding: 136px 32px 104px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      max-width: 192px;
    }
    &-right {
      max-width: 737px;
    }
    &-text {
      @include desctop-H3;
      span {
        @include desctop-H3-ram;
        font-style: italic;
      }
    }
  }
  &__slider {
    max-width: 1063px;
    width: 100%;
    padding: 110px 24px 174px;
    margin: 0 auto;
  }
  &__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__experts {
    padding: 104px 0;
  }

  &__expirience,
  &__awards {
    padding: 104px 0;
  }
  &__awards {
    &-link {
      display: none;
    }
  }
  &__open-jobs {
    padding: 104px 0 160px;
  }
  &__photo-team {
    padding: 104px 0 88px;
  }
}

@include tablet {
  .about {
    &__promo {
      padding: 56px 0 64px;
      gap: 40px;
      &-right {
        max-width: 623px;
      }
      &-text {
        @include mob-H2;
        span {
          @include mob-H2-ram;
          font-style: italic;
        }
      }
    }
    &__experts,
    &__expirience,
    &__awards {
      padding: 72px 0;
    }
    &__open-jobs {
      padding: 72px 0 88px;
    }
  }
}
@include tablet-small {
  .about {
    &__promo {
      flex-wrap: wrap-reverse;
      &-left {
        margin-left: auto;
      }
      &-right {
        max-width: 100%;
      }
    }
    &__awards {
      display: flex;
      flex-direction: column;
      gap: 48px;
      &-link {
        display: block;
        max-width: max-content;
        margin: 0 auto;
      }
    }
  }
}
@include mobile {
  .about {
    &__photo-team {
      padding: 72px 0 56px;
    }
    &__promo {
      padding: 72px 0 24px;
      &-text {
        @include mob-H3;
        span {
          @include mob-H3-ram;
          font-style: italic;
        }
      }
    }
    &__slider {
      padding: 72px 16px;
    }
    &__expirience {
      padding: 72px 0 56px;
    }
    &__awards {
      gap: 56px;
    }
  }
}
</style>
