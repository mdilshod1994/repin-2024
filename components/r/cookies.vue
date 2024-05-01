<script setup lang="ts">
const store = useGlobalData()

const cookie = computed(() => {
  return store.footer
})

const accCookies = ref(false)

setTimeout(() => {
  accCookies.value = true
}, 3000)

const acceptCookies = () => {
  accCookies.value = false
}
</script>

<template>
  <transition v-if="cookie" name="fade-cookies">
    <div v-if="accCookies" cls="cookies">
      <div cls="cookies__wrap">
        <div cls="cookies__text">{{ cookie?.cookies_text }}</div>
        <nuxt-link to="/cookie-privacy" cls="cookies__link" class="underline-link -white">
          {{ cookie.cookies_more }}
        </nuxt-link>
      </div>
      <r-button bg-color="white" @click.prevent="acceptCookies()">
        {{ cookie.cookies_accept }}
      </r-button>
    </div>
  </transition>
</template>

<style>
.fade-cookies-enter-active,
.fade-cookies-leave-active {
  transition: opacity 0.5s ease;
}

.fade-cookies-enter-from,
.fade-cookies-leave-to {
  opacity: 0;
}
</style>

<style module lang="scss">
.cookies {
  position: fixed;
  bottom: 40px;
  border-radius: 16px;
  background: var(--Black);
  width: 411px;
  padding: 20px 20px 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  &__text {
    color: var(--White);
  }
}
@include mobile {
  .cookies {
    padding: 16px;
    width: calc(100% - 32px);
  }
}
</style>
