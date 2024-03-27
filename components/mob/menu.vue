<script setup lang="ts">
const active = defineModel<boolean>("active")

const closeMenu = () => {
  active.value = false
  useBodyLock(false)
}

const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)
</script>

<template>
  <div v-if="active" cls="mobile">
    <div cls="mobile__overlay" @click="closeMenu" />
    <div cls="mobile__wrap">
      <nav cls="mobile__nav">
        <nuxt-link cls="mobile__nav-link" to="/"> Home </nuxt-link>
        <nuxt-link cls="mobile__nav-link" to="/portfolio"> Portfolio </nuxt-link>
        <nuxt-link cls="mobile__nav-link" to="/about"> About </nuxt-link>
        <nuxt-link cls="mobile__nav-link"> Consulting </nuxt-link>
        <nuxt-link cls="mobile__nav-link"> Blog </nuxt-link>
        <nuxt-link cls="mobile__nav-link" to="/contact"> Contacts </nuxt-link>
      </nav>
      <div class="line" />
      <div cls="mobile__bottom">
        <r-button cls="mobile__bottom-btn"> Start project </r-button>
        <div cls="mobile__langs" />
      </div>
    </div>
    <r-round-button size="large" bg-color="white" cls="mobile__btn-close" @click="closeMenu">
      <svgo-x />
    </r-round-button>
  </div>
</template>

<style module lang="scss">
.mobile {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 80px 40px 32px;
  z-index: 1;
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  &__overlay {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &__btn-close {
    position: relative;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    backdrop-filter: blur(18.06315803527832px);
    background: var(--White);
    align-self: stretch;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 30px;
    &-link {
      @include mob-H2;
    }
  }
  &__bottom {
    padding: 20px 24px 24px;
  }
}

@include tablet-small {
  .mobile {
    padding: 80px 24px 32px;
  }
}
@include mobile {
  .mobile {
    padding: 62px 16px 40px;
    :global(.line) {
      display: none;
    }
    &__nav {
      padding: 24px 0 0 24px;
      margin-bottom: 88px;
      align-items: flex-start;
      &-link {
        @include mob-H3;
      }
    }
    &__bottom {
      padding: 0 24px 24px;
    }
    &__bottom-btn {
      width: 100%;
    }
  }
}
</style>
