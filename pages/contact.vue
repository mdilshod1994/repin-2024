<!--
  TODO: анимированный задний фон сделать отдельным компонентом и документировать
-->
<script setup lang="ts">
const target = ref<HTMLElement | null>(null)
const isVisible = ref(false)
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) isVisible.value = true
    },
    {
      threshold: 0.8,
    },
  )
  if (!target.value) return
  observer.observe(target.value)
})
</script>

<template>
  <div cls="contacts">
    <div class="container">
      <r-grid
        desktop-column="1"
        tablet-column="1"
        mobile-column="1"
        :desktop-gaps="[16]"
        :tablet-gaps="[16]"
        :mobile-gaps="[24]"
        cls="contacts__banner"
      >
        <a href="mailto:hello@repin.agency" cls="contacts__link">
          <div cls="contacts__link-icon">
            <svgo-link />
          </div>
          <span class="underline-link -bold"> hello@repin.agency </span>
        </a>
        <r-banner mobile-bottom-left title="Contacts">
          <div class="texts">
            <div class="text" cls="contacts__banner-text">
              If you are interested in our services or you still have questions, contact us (we
              answer fastest on
              <a href="https://t.me/repinivan" class="underline-link">Telegram</a>).
            </div>
          </div>
        </r-banner>
      </r-grid>
    </div>
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
            <div cls="contacts__request-title"><span>Got an idea?</span> Leave a request</div>
            <div cls="contacts__request-text">
              Tell us in general terms about the project and a manager will contact you for a short
              brief.
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
            <a href="" cls="contacts__social">
              <div cls="contacts__social-box">
                <!-- применить round-button -->
                <div cls="contacts__social-icon">
                  <svgo-tg />
                </div>
                Telegram
              </div>
              <div cls="contacts__social-arrow">
                <svgo-arrow-up-right />
              </div>
            </a>
            <a href="" cls="contacts__social">
              <div cls="contacts__social-box">
                <div cls="contacts__social-icon">
                  <svgo-wh />
                </div>
                Telegram
              </div>
              <div cls="contacts__social-arrow">
                <svgo-arrow-up-right />
              </div>
            </a>
          </r-grid>
        </r-grid>
      </div>
      <div :cls="{ contacts__background: true, '-visible': isVisible }" />
    </div>
    <reuse-social-media cls="contacts__social-media" />
  </div>
</template>

<style module lang="scss">
.contacts {
  padding: 136px 0 160px;
  &__banner {
    padding-bottom: 104px;
    &-text {
      @include desctop-body-22;
      a {
        @include desctop-body-22;
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
  &__background {
    position: absolute;
    top: 24px;
    width: calc(100% - 48px);
    height: calc(100% - 24px);
    background: var(--Black);
    border-radius: 24px;
    transform-origin: 50% 100%;
    transform: scale3d(1, 0, 1);
    transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);

    &.-visible {
      transform-origin: 50% 0%;
      transform: scale3d(1, 1, 1);
    }
    &.reverse {
      top: auto;
      bottom: 24px;
      transform-origin: 50% 100%;
      transform: scale3d(1, 1, 1);
      &.-visible {
        transform: scale3d(1, 0, 1);
      }
    }
  }
  &__request {
    position: relative;
    margin: 0 auto;
    max-width: 1920px;
    padding: 24px;
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
      mix-blend-mode: difference;
      position: relative;
      z-index: 1;
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
    &-box {
      display: flex;
      align-items: center;
      gap: 20px;
      @include desctop-H5;
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
      .contacts {
        &__social {
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
    &__banner {
      padding-bottom: 64px;
    }
    &__background {
      border-radius: 16px;
      top: 16px;
      width: calc(100% - 32px);
      height: calc(100% - 16px);
    }
    &__request {
      padding: 16px;
      &-wrap {
        border-radius: 16px;
        padding: 104px 0 120px;
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
    :global(.text) {
      max-width: 282px;
    }
    &__background {
      border-radius: 16px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &__request {
      &-title {
        @include mob-H2;
        span {
          @include mob-H2-ram;
          font-style: italic;
        }
      }
    }
  }
}
</style>
