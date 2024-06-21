<script setup lang="ts">
const store = useGlobalData()
const { locale } = useI18n()

const localePath = useLocalePath()

const menu = computed(() => {
  return store.header?.menu
})

defineProps<{
  bgBlack?: boolean
}>()
const scrolledUp = ref(true)
const isActive = ref(false)
const showMenu = () => {
  isActive.value = !isActive.value
  useScrollLock(isActive.value)
}

// to check dark background
const isBackgroundDark = ref(false)
function checkIfDarkBackgroud(el?: HTMLElement) {
  if (el)
    if (window.scrollY > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && 0 >= entry.boundingClientRect.top) {
            isBackgroundDark.value = false
          } else {
            isBackgroundDark.value = true
          }
        })
      })
      observer.observe(el)
    }
}
const { $useScroll } = useNuxtApp()
if (typeof $useScroll === "function") {
  const { isScrolling, arrivedState, directions } = $useScroll()
  watch(isScrolling, (v) => {
    const arrTestclass = document.querySelectorAll(".dark-background")
    arrTestclass.forEach((el) => {
      const element = el as HTMLElement
      checkIfDarkBackgroud(element)
    })
  })
  watch(arrivedState, (a) => {
    if (a.bottom || a.top) {
      scrolledUp.value = true
    }
  })
  watch(directions, (d) => {
    if (d.top) {
      scrolledUp.value = true
    } else if (d.bottom) {
      scrolledUp.value = false
    }
  })
}
const { updateType } = useMousemove()
const setCursorType = (type: string) => {
  updateType(type)
}
</script>

<template>
  <div
    v-if="menu"
    id="header"
    :cls="{
      header: true,
      '-visible': scrolledUp,
      '-active': isActive,
      '-bg-black': bgBlack,
      '-glassmorph': isBackgroundDark,
    }"
  >
    <div :cls="{ header__wrap: true, '-delay': !isActive }">
      <nuxt-link
        :to="localePath('/')"
        cls="header__logo"
        @mouseover="setCursorType('link')"
        @mouseleave="setCursorType('')"
      >
        <svgo-logo cls="header__logo-desk" />
        <svgo-r-logo cls="header__logo-mob" />
      </nuxt-link>
      <nav cls="header__nav">
        <div v-for="item in menu" v-show="item.link !== 'consulting' && item.link !== 'blog'">
          <nuxt-link
            cls="header__nav-link"
            :to="localePath(`/${item.link}`)"
            @mouseover="setCursorType('link')"
            @mouseleave="setCursorType('')"
          >
            <span>{{ item.name }}</span>
          </nuxt-link>
        </div>
      </nav>
      <div cls="header__btns">
        <nuxt-link
          cls="header__btn"
          to="https://t.me/repinivan"
          target="_blank"
          bg-hover
          radius-hover
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          <span v-if="locale === 'en'">Connect</span> <span v-else>Написать</span>

          <svgo-arrow-up-right />
        </nuxt-link>
      </div>
      <div cls="header__menu" @click="showMenu">
        <r-round-button
          cls="header__menu-btn"
          pointer-events
          :bg-color="isActive ? 'gray' : 'white'"
          size="custom"
        >
          <svgo-btn-menu v-if="!isActive" />
          <svgo-x v-else cls="close" />
        </r-round-button>
      </div>
    </div>
    <mob-menu v-model:active="isActive" :menu="menu" />
    <transition name="fade-overlay">
      <div v-if="isActive" cls="header__mobile-overlay" @click="showMenu" />
    </transition>
  </div>
</template>

<style>
.fade-overlay-enter-active {
  transition: opacity 0.5s ease;
}
.fade-overlay-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 0.3s;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}
</style>

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
  &.-glassmorph {
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
    transition: background 0.3s ease-in-out;
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
    align-items: center;
  }
  &__btn {
    height: 50px;
    border-radius: 48px;
    background: var(--Black);
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 0 20px 0 24px;
    transition: 0.3s ease-in-out;
    span {
      @include desctop-caption-17-db;
      color: var(--White);
      transition: 0.3s ease-in-out;
    }
    svg {
      font-size: 18px;
      color: var(--White);
      transition: 0.3s ease-in-out;
    }
    &:hover {
      background: var(--White);
      svg {
        color: var(--Black);
        transform: rotate(45deg);
      }
      span {
        color: var(--Black);
      }
    }
  }
  &__menu {
    display: none;
  }
  &__mobile-overlay {
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
      position: relative;
      z-index: 3;
      &.-delay {
        transition-delay: 0.2s;
      }
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
          &.close {
            font-size: 22px;
          }
        }
      }
    }
    &.-active {
      .header {
        &__wrap {
          background: var(--White);
          border-radius: 16px 16px 0 0;
          backdrop-filter: blur(18px);
        }
      }
    }
    &__mobile-overlay {
      background: rgba(0, 0, 0, 0.6);
      position: fixed;
      left: 0;
      top: -24px;
      width: 100%;
      height: 120vh;
      display: block;
      z-index: 1;
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
