<script setup lang="ts">
const { locale } = useI18n()

const store = useGlobalData()

const contact = computed(() => {
  if (locale.value === "en") {
    return store.contacts?.en.page
  } else {
    return store.contacts?.ru.page
  }
})

const target = ref<HTMLElement | null>(null)

onMounted(async () => {
  await store.getContactPageInfo()
})

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}

useSeoMeta({
  title: () => `Repin Agency | ${contact.value?.title_page}`,
  ogTitle: () => `Repin Agency | ${contact.value?.title_page}`,
})
</script>

<template>
  <div v-if="contact" cls="contacts">
    <div class="container">
      <r-grid
        desktop-column="1"
        tablet-column="1"
        mobile-column="1"
        :desktop-gaps="[16]"
        :tablet-gaps="[16]"
        :mobile-gaps="[32]"
        cls="contacts__banner"
      >
        <a
          :href="`mailto:${contact.email}`"
          cls="contacts__link"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          <div cls="contacts__link-icon">
            <svgo-link />
          </div>
          <span class="underline-link -bold"> {{ contact.email }} </span>
        </a>
        <div cls="contacts__banner-wrap">
          <div cls="contacts__banner-title">
            {{ contact.title_page }}
          </div>
          <div class="texts">
            <div class="text" cls="contacts__banner-text" v-html="contact.description" />
          </div>
        </div>
        <!-- <r-banner mobile-bottom-left :title="contact.title_page" mob-gap="27.341">
          <div class="texts">
            <div class="text" cls="contacts__banner-text" v-html="contact.description" />
          </div>
        </r-banner> -->
      </r-grid>
      <div ref="target" cls="contacts__request" class="dark-background">
        <div cls="contacts__request-wrap">
          <r-grid
            cls="contacts__request-block"
            desktop-column="1"
            tablet-column="1"
            mobile-column="1"
            :desktop-gaps="[104]"
            :tablet-gaps="[56]"
            :mobile-gaps="[80]"
          >
            <r-grid
              cls="contacts__request-box"
              desktop-column="1"
              tablet-column="1"
              mobile-column="1"
              :desktop-gaps="[32]"
              :tablet-gaps="[24]"
              :mobile-gaps="[16]"
            >
              <div cls="contacts__request-title" v-html="contact.subtitle_page" />
              <div cls="contacts__request-text">
                Tell us in general terms about the project and a manager will contact you for a
                short brief.
              </div>
            </r-grid>
            <r-grid
              cls="contacts__request-socials"
              desktop-column="2"
              tablet-column="2"
              mobile-column="1"
              :desktop-gaps="[24]"
              :tablet-gaps="[12]"
              :mobile-gaps="[12]"
            >
              <a
                v-for="m in contact.messengers"
                :href="m.link"
                cls="contacts__social"
                @mouseover="setCursorType('link')"
                @mouseleave="setCursorType('')"
              >
                <div cls="contacts__social-box">
                  <div cls="contacts__social-icon" v-html="m.icon" />
                  <span>
                    {{ m.name }}
                  </span>
                </div>
                <div cls="contacts__social-arrow">
                  <svgo-arrow-up-right />
                </div>
              </a>
            </r-grid>
          </r-grid>
        </div>
      </div>
    </div>
    <lazy-delay-hydration>
      <re-use-social-media cls="contacts__social-media" :social-media="contact.social_media" />
    </lazy-delay-hydration>
  </div>
</template>

<style module lang="scss">
.contacts {
  padding: 136px 0 160px;
  &__banner {
    padding-bottom: 104px;
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-self: stretch;
    }
    &-title {
      color: var(--Black);
      font-size: 104px;
      font-weight: 500;
      line-height: 112px;
      letter-spacing: -5.2px;
    }
    &-text {
      @include desctop-body-22;
      margin-top: 16px;
      a {
        @include desctop-body-22;
        display: inline-block;
        width: max-content;
        position: relative;
        &::after,
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background: var(--Black);
          top: 100%;
          left: 0;
          pointer-events: none;
        }
        &::before {
          transform: scaleX(1);
          transform-origin: right;
          transition: transform 0.3s;
        }
        &::after {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
          transition-delay: 0s;
        }
        &:hover {
          &::before {
            transform: scaleX(0);
          }
          &::after {
            transition-delay: 0.2s;
            transform: scaleX(1);
          }
        }
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      @include desctop-caption-17-db;
    }
    &-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--gray);
      svg {
        font-size: 16px;
      }
    }
  }

  &__request {
    position: relative;
    margin: 0 auto;
    max-width: 1920px;
    padding: 24px 0;
    color: var(--White);
    background: var(--White);
    overflow: hidden;
    &-title {
      display: flex;
      flex-direction: column;
      @include desctop-H2;
      span {
        font-family: "Ramillas Trial";
        font-weight: 400;
        font-style: italic;
      }
    }
    &-wrap {
      padding: 160px 0;
      border-radius: 24px;
      position: relative;
      z-index: 1;
      background: url("@/assets/images/contact/bg.webp");
      background-size: cover;
      background-position: center;
    }
    &-box {
      max-width: 486px;
      text-align: center;
      margin: 0 auto;
    }
    &-socials {
      margin: 0 auto;
      max-width: 898px;
      width: 100%;
    }
  }
  &__social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    height: 104px;
    gap: 20px;
    border-radius: 16px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background: rgba(144, 144, 144, 0.1);
    transition: 0.3s ease-in-out;
    backdrop-filter: blur(8px);
    &-box {
      display: flex;
      align-items: center;
      gap: 20px;
      @include desctop-H5;
      span {
        display: block;
        position: relative;
        width: max-content;
        &::before {
          content: "";
          transform-origin: 100% 50%;
          transform: scale3d(0, 1, 1);
          transition: transform 0.3s;
          position: absolute;
          width: 100%;
          height: 1px;
          background: var(--White);
          top: 100%;
          left: 0;
          pointer-events: none;
        }
      }
    }
    &-icon {
      background: var(--White);
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 28px;
        color: var(--Black);
        transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
    &-arrow {
      svg {
        font-size: 24px;
        transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
    &:hover {
      background: rgba(144, 144, 144, 0.25);
      .contacts {
        &__social {
          &-box {
            span {
              &::before {
                transform-origin: 0% 50%;
                transform: scale3d(1, 1, 1);
              }
            }
          }
          &-icon {
            svg {
              transform: scale(1.2);
            }
          }
          &-arrow {
            svg {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
  &__social-media {
    padding-top: 104px;
  }
}

@include tablet {
  .contacts {
    padding: 56px 0 88px;
    &__link {
      span {
        @include mob-body-14-db;
      }
      &-icon {
        width: 28px;
        height: 28px;
        svg {
          font-size: 14px;
        }
      }
    }
    &__banner {
      padding-bottom: 64px;
      &-title {
        @include mob-H1;
      }
      &-text {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        margin-top: 8px;
        a {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          &::before {
            transform: scaleX(0);
          }
          &::after {
            transition-delay: 0.2s;
            transform: scaleX(1);
          }
        }
      }
    }

    &__request {
      padding: 16px 0;
      &-wrap {
        border-radius: 16px;
        padding: 104px 24px 120px;
      }
      &-block {
        max-width: 730px;
        margin: 0 auto;
      }
      &-box {
        max-width: 418px;
      }
      &-title {
        @include mob-H1;
        span {
          @include mob-H1-ram;
          font-style: italic;
        }
      }
      &-text {
        max-width: 284px;
        margin: 0 auto;
      }
    }
    &__social {
      padding: 16px;
      height: 80px;
      &-box {
        gap: 16px;
        @include mob-body-16;
      }
      &-icon {
        width: 48px;
        height: 48px;
        svg {
          font-size: 20px;
          width: 20px;
        }
      }
      &-arrow {
        font-size: 20px;
      }
    }
    &__social-media {
      padding-top: 72px;
    }
  }
}
@include mobile {
  .contacts {
    padding: 82.023px 0 88px;
    &__banner {
      padding-bottom: 73px;
      &-wrap {
        gap: 24px;
        flex-wrap: wrap;
      }
      &-text {
        margin-top: 0;
      }
    }
    :global(.text) {
      max-width: 321px;
      font-size: 15.949px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.784px;
      a {
        font-size: 15.949px;
        font-style: normal;
        font-weight: 400;
        line-height: 22.784px;
      }
    }

    &__request {
      margin: 0 -7px;
      padding: 17.624px 0;
      &-title {
        @include mob-H2;
        span {
          @include mob-H2-ram;
          font-style: italic;
        }
      }
      &-wrap {
        padding: 114.55px 16px 132.18px;
        background: url("@/assets/images/contact/mob-bg.webp");
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
}

@media (max-width: 429px) {
  .contacts {
    :global(.text) {
      max-width: 282px;
    }
    &__request {
      margin: 0 -16px;
      &-title {
        @include mob-H2;
        span {
          @include mob-H2-ram;
          font-style: italic;
        }
      }
      &-wrap {
        padding: 104px 16px 120px;
      }
    }
  }
}
</style>
