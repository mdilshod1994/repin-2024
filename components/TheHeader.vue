<script setup lang="ts">
defineProps<{
  bgBlack?: boolean
}>()

const oldScroll = ref(0)
const scrolledUp = ref(true)
onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY >= 0 && window.scrollY < 100) {
      scrolledUp.value = true
    } else {
      if (oldScroll.value > window.scrollY) {
        scrolledUp.value = true
      } else {
        scrolledUp.value = false
      }
      oldScroll.value = window.scrollY
    }
  }
})
const isActive = ref(false)
const showMenu = () => {
  isActive.value = true
  useBodyLock(true)
}

// sound on hover

const route = useRoute()

const hoverSound = ref<HTMLAudioElement | null>(null)
const hoverActiveSound = ref<HTMLAudioElement | null>(null)

const playHoverSound = (urlName: string | null) => {
  if (urlName === route.name) {
    hoverActiveSound.value?.play()
  } else {
    hoverSound.value?.play()
  }
}
</script>

<template>
  <div :cls="{ header: true, '-visible': scrolledUp, '-active': isActive, '-bg-black': bgBlack }">
    <div cls="header__wrap">
      <nuxt-link to="/" cls="header__logo">
        <svgo-logo cls="header__logo-desk" />
        <svgo-r-logo cls="header__logo-mob" />
      </nuxt-link>
      <nav cls="header__nav">
        <nuxt-link
          cls="header__nav-link"
          to="/portfolio"
          @mouseenter.prevent="playHoverSound('portfolio')"
        >
          <span>Portfolio</span>
        </nuxt-link>
        <nuxt-link cls="header__nav-link" to="/about" @mouseenter.prevent="playHoverSound('about')">
          <span>About</span>
        </nuxt-link>
        <nuxt-link cls="header__nav-link" @mouseenter.prevent="playHoverSound('consulting')">
          <span>Consulting</span>
        </nuxt-link>
        <nuxt-link cls="header__nav-link" @mouseenter.prevent="playHoverSound('blog')">
          <span>Blog</span>
        </nuxt-link>
        <nuxt-link
          cls="header__nav-link"
          to="/contact"
          @mouseenter.prevent="playHoverSound('contact')"
        >
          <span>Contact</span>
        </nuxt-link>
        <audio ref="hoverSound" preload="auto">
          <source src="/files/hover.wav" />
        </audio>
        <audio ref="hoverActiveSound" preload="auto">
          <source src="/files/hover-active.wav" />
        </audio>
      </nav>
      <div cls="header__btns">
        <button cls="header__btn">RU</button>
      </div>
      <div cls="header__menu" @click="showMenu">
        <r-round-button cls="header__menu-btn" bg-color="white" size="custom">
          <svgo-btn-menu />
        </r-round-button>
      </div>
    </div>
  </div>
  <mob-menu v-if="isActive" v-model:active="isActive" />
</template>

<style module lang="scss">
.header {
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 2;
  transition: calc(1s * 1.1) cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateY(-100%);
  &.-visible {
    transform: translateY(0%);
    top: 24px;
  }
  &.-bg-black {
    .header {
      &__wrap {
        background: rgba(144, 144, 144, 0.1);
      }
    }
  }
  &__wrap {
    border-radius: 108px;
    background: rgba(243, 243, 243, 0.9);
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(18.06315803527832px);
    padding: 8px 8px 8px 32px;
    max-width: 1520px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  &__logo {
    svg {
      width: 152px;
      height: 30px;
    }
    &-mob {
      display: none;
    }
  }
  &__nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 36px;
    &-link {
      @include desctop-caption-17-med;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        background: var(--White);
        border-radius: 80px;
        height: 44px;
        width: calc(100% + 32px);
        box-shadow: 0px 2px 10px 0px rgba(0, 2, 25, 0.08);
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9);
        transition: 0.3s ease-in-out;
      }
      span {
        position: relative;
        z-index: 1;
      }
      &:global(.router-link-active) {
        @include desctop-caption-17-db;
        &:after {
          display: none;
        }
      }
      &:hover {
        &:after {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }
  &__btns {
    display: flex;
    padding: 13px 24px;
    align-items: center;
    border-radius: 48px;
    background: transparent;
    width: 71px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 2px 10px 0px rgba(0, 2, 25, 0.08);
      background: var(--White);
    }
  }
  &__btn {
    @include desctop-caption-17-med;
  }
  &__menu {
    display: none;
  }
}

.mobile {
  display: none;
}

@include desktop-medium {
  .header {
    &__wrap {
      max-width: 1344px;
    }
  }
}

@include tablet {
  .header {
    padding: 0 40px;
    &__wrap {
      padding: 8px 8px 8px 24px;
      border: none;
    }
    &__logo {
      svg {
        width: 24px;
        height: 24px;
      }
      &-desk {
        display: none;
      }
      &-mob {
        display: flex;
      }
    }
    &__nav {
      display: none;
    }
    &__btns {
      display: none;
    }
    &__menu {
      display: flex;
      &-btn {
        width: 40px;
        height: 40px;
        svg {
          font-size: 12px;
        }
      }
    }
    &.-active {
      .header {
        &__wrap {
          background: var(--White);
          border-radius: 16px 16px 0 0;
        }
      }
    }
  }
}
@include tablet-small {
  .header {
    padding: 0 24px 24px;
  }
}
@include mobile {
  .header {
    padding: 0 16px 8px;
    &.-visible {
      top: 8px;
    }
  }
}
</style>
