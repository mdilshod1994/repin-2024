<script setup lang="ts">
import { type Footer } from "~/types/menu-header-footer"

const { locale, setLocale } = useI18n()

const localePath = useLocalePath()

const store = useGlobalData()

const footer = computed(() => {
  return store.footer as Footer
})
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div v-if="footer" cls="footer">
    <div class="container">
      <div cls="footer__wrap">
        <div cls="footer__top">
          <nuxt-link
            :to="localePath('/')"
            cls="footer__logo"
            @mouseover="setCursorType('link')"
            @mouseleave="setCursorType('')"
          >
            <svgo-logo-white />
          </nuxt-link>
          <div cls="footer__top-block">
            <div cls="footer__contact">
              <div cls="footer__contact-title">{{ footer.contact.title }}</div>
              <div cls="footer__contact-text" v-html="footer.contact.text" />
            </div>
            <div cls="footer__links">
              <div cls="footer__links-box">
                <div cls="footer__links-title">Menu</div>
                <div class="tabs">
                  <div
                    v-for="link in footer.menu"
                    v-show="link.link !== 'consulting' && link.link !== 'blog'"
                  >
                    <nuxt-link
                      :to="localePath(`/${link.link}`)"
                      cls="footer__links-item"
                      @mouseover="setCursorType('link')"
                      @mouseleave="setCursorType('')"
                    >
                      <span>
                        {{ link.name }}
                      </span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div cls="footer__links-box">
                <div cls="footer__links-title">Follow us</div>
                <div class="tabs">
                  <a
                    v-for="soc in footer.follow_us"
                    :href="soc.link"
                    target="_blank"
                    cls="footer__links-item"
                    @mouseover="setCursorType('link')"
                    @mouseleave="setCursorType('')"
                  >
                    <span> {{ soc.name }} </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div cls="footer__bottom">
          <div cls="footer__bottom-box">
            <div cls="footer__bottom-text">© 2016 — {{ new Date().getFullYear() }}</div>
            <nuxt-link
              :to="localePath('/privacy-policy')"
              cls="footer__bottom-text"
              @mouseover="setCursorType('link')"
              @mouseleave="setCursorType('')"
              >Privacy Policy</nuxt-link
            >
            <nuxt-link
              :to="localePath('/offer-agreement')"
              cls="footer__bottom-text"
              @mouseover="setCursorType('link')"
              @mouseleave="setCursorType('')"
              >Offer contract</nuxt-link
            >
          </div>
          <div cls="footer__bottom-wrap">
            <div cls="footer__bottom-wrapper">
              <a
                :href="`mailto:${footer.email}`"
                cls="footer__bottom-text"
                @mouseover="setCursorType('link')"
                @mouseleave="setCursorType('')"
                >{{ footer.email }}</a
              >
              <button
                v-if="locale === 'en'"
                @click="setLocale('ru')"
                @mouseover="setCursorType('link')"
                @mouseleave="setCursorType('')"
              >
                Ru
              </button>
              <button
                v-else
                @click="setLocale('en')"
                @mouseover="setCursorType('link')"
                @mouseleave="setCursorType('')"
              >
                En
              </button>
            </div>

            <button
              cls="footer__bottom-to-top"
              @click="scrollTop"
              @mouseover="setCursorType('link')"
              @mouseleave="setCursorType('')"
            >
              {{ footer.top }} <svgo-arrow-down filled />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.footer {
  padding: 48px 0 24px;
  background: var(--Black);
  color: var(--White);
  order: 1;
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 96px;
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: 72px;
    &-block {
      display: flex;
      justify-content: space-between;
    }
  }
  &__contact {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 508px;
    &-title {
      color: rgba(255, 255, 255, 0.4);
    }
    &-text {
      @include desctop-H3;
      span {
        font-family: "Ramillas Trial";
        font-style: italic;
      }
      a {
        width: max-content;
        display: inline-block;
        position: relative;
        &::after,
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background: var(--White);
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
  &__logo {
    svg {
      height: 30px;
      width: 148px;
    }
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 36px;
    max-width: 491px;
    width: 100%;
    &-box {
      display: flex;
      flex-direction: column;
      max-width: 411px;
      gap: 12px;
    }
    &-title {
      color: rgba(255, 255, 255, 0.4);
    }
    &-item {
      display: flex;
      padding: 8px 20px;
      justify-content: center;
      align-items: center;
      border-radius: 32px;
      background: rgba(124, 124, 124, 0.1);
      color: var(--White);
      @include desctop-caption-17-med;
      overflow: hidden;
      border: 1px solid transparent;
      transition: 0.3s ease-in-out;
      &:hover {
        border: 1px solid var(--White);

        span {
          animation:
            MoveScaleUpInitial 0.3s forwards,
            MoveScaleUpEnd 0.3s forwards 0.3s;
        }
      }
      @keyframes MoveScaleUpInitial {
        100% {
          transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
          opacity: 0;
        }
      }
      @keyframes MoveScaleUpEnd {
        0% {
          transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
          opacity: 0;
        }
        100% {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 24px;
    gap: 24px;
    &-wrapper,
    &-box {
      display: flex;
      gap: 29px;
    }
    &-wrapper {
      button {
        color: rgba(255, 255, 255, 0.4);
      }
    }
    &-text {
      color: rgba(255, 255, 255, 0.4);
    }
    &-wrap {
      display: flex;
      justify-content: space-between;
      max-width: 491px;
      flex: 1 0 0;
      gap: 24px;
    }
    &-to-top {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-bottom: 1px solid var(--White);
      flex-shrink: 0;
      svg {
        transform: rotate(180deg);
        path {
          stroke: white;
        }
      }
      &:hover {
        svg {
          animation:
            MoveScaleUpInitialArrow 0.3s forwards,
            MoveScaleUpEndArrow 0.3s forwards 0.3s;
        }
      }
      @keyframes MoveScaleUpInitialArrow {
        100% {
          transform: translate3d(0, -105%, 0) scale3d(1, 2, 1) rotate(180deg);
          opacity: 0;
        }
      }
      @keyframes MoveScaleUpEndArrow {
        0% {
          transform: translate3d(0, 100%, 0) scale3d(1, 2, 1) rotate(180deg);
          opacity: 0;
        }
        100% {
          transform: translate3d(0, 0, 0) rotate(180deg);
          opacity: 1;
        }
      }
    }
  }
}

@include tablet {
  .footer {
    padding: 40px 0 24px;
    &__wrap {
      gap: 72px;
    }
    &__top {
      gap: 56px;
      &-block {
        gap: 24px;
      }
    }
    &__contact {
      max-width: 378px;
      &-text {
        @include mob-H3;
        span {
          @include mob-H3-ram;
          font-style: italic;
        }
      }
    }
    &__links {
      max-width: max-content;
      gap: 31px;
      &-box {
        max-width: 343px;
        gap: 11px;
      }
      &-item {
        padding: 8px 16px;
        @include mob-body-14;
      }
    }
    &__bottom {
      position: relative;
      flex-wrap: wrap;
      padding-top: 16px;
      &-box,
      &-wrap {
        align-items: center;
      }
      &-to-top {
        padding: 8px 16px;
        border-radius: 32px;
        background: rgba(124, 124, 124, 0.1);
        border-bottom: none;
      }
    }
  }
}
@include tablet-small {
  .footer {
    &__contact {
      max-width: 304px;
    }
    &__top {
      &-block {
        flex-wrap: wrap;
      }
    }
  }
}
@include mobile {
  .footer {
    position: relative;
    &__top {
      &-block {
        gap: 56px;
      }
    }
    &__bottom {
      gap: 4px;
      flex-direction: column;
      align-items: flex-start;
      &-box {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      &-to-top {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    &__wrap {
      gap: 88px;
    }
  }
}
</style>
