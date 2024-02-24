<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<template>
  <div cls="footer">
    <div class="container">
      <div cls="footer__wrap">
        <div cls="footer__top">
          <nuxt-link to="/" cls="footer__logo">
            <svgo-logo-white />
          </nuxt-link>
          <div cls="footer__top-block">
            <div cls="footer__contact">
              <div cls="footer__contact-title">Contact</div>
              <div cls="footer__contact-text">
                If you still have questions, contact us (<span>we answer fastest on Telegram</span
                >).
              </div>
            </div>
            <div cls="footer__links">
              <div cls="footer__links-box">
                <div cls="footer__links-title">Menu</div>
                <div cls="footer__links-list">
                  <nuxt-link to="" cls="footer__links-item">Portfolio</nuxt-link>
                  <nuxt-link to="" cls="footer__links-item">Agency</nuxt-link>
                  <nuxt-link to="" cls="footer__links-item">Consulting</nuxt-link>
                  <nuxt-link to="" cls="footer__links-item">Blog</nuxt-link>
                  <nuxt-link to="" cls="footer__links-item">Contact</nuxt-link>
                </div>
              </div>
              <div cls="footer__links-box">
                <div cls="footer__links-title">Follow us</div>
                <div cls="footer__links-list">
                  <a href="" target="_blank" cls="footer__links-item">Behance</a>
                  <a href="" target="_blank" cls="footer__links-item">Dribbble</a>
                  <a href="" target="_blank" cls="footer__links-item">Instagram</a>
                  <a href="" target="_blank" cls="footer__links-item">YouTube</a>
                  <a href="" target="_blank" cls="footer__links-item">Telegram</a>
                  <a href="" target="_blank" cls="footer__links-item">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div cls="footer__bottom">
          <div cls="footer__bottom-box">
            <div cls="footer__bottom-text">© 2016 — 2024</div>
            <div cls="footer__bottom-text">Privacy Policy</div>
            <div cls="footer__bottom-text">Offer contract</div>
          </div>
          <div cls="footer__bottom-wrap">
            <div cls="footer__bottom-text">hello@repin.agency</div>
            <button href="/" cls="footer__bottom-to-top" @click="scrollTop">
              On top <svgo-arrow-down />
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
      @include desctop-caption-17;
    }
    &-text {
      @include desctop-H3;
      span {
        font-family: "Ramillas Trial";
        font-style: italic;
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
    max-width: 411px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    &-box {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    &-title {
      color: rgba(255, 255, 255, 0.4);
      @include desctop-caption-17;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
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
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 24px;
    &-box {
      display: flex;
      gap: 29px;
    }
    &-text {
      color: rgba(255, 255, 255, 0.4);
      @include desctop-caption-17;
    }
    &-wrap {
      display: flex;
      justify-content: space-between;
      max-width: 491px;
      flex: 1 0 0;
    }
    &-to-top {
      svg {
        transform: rotate(180deg);
        path {
          stroke: white;
        }
      }
    }
  }
}
</style>
