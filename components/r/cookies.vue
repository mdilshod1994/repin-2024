<!-- 
  TODO:
  Поправить логику куки и использовать pinia-persist
-->
<script setup lang="ts">
const cookies = useCookie<{ accCookies: number }>("accCookies")

const store = useGlobalData()
const localePath = useLocalePath()

const cookieInfo = computed(() => {
  return store.footer
})

const accCookies = ref(0)
const show = ref(false)

setTimeout(() => {
  show.value = true
}, 3000)

const acceptCookies = () => {
  show.value = false
  accCookies.value++
  cookies.value = { accCookies: accCookies.value }
}

const { updateType } = useMousemove()

const setCursorType = (type: string) => {
  updateType(type)
}

const isAccepted = useCookie("accCookies")
</script>

<template>
  <transition v-if="cookieInfo" name="fade-cookies">
    <div v-if="show && !isAccepted" cls="cookies">
      <div cls="cookies__wrap">
        <div cls="cookies__text">{{ cookieInfo?.cookies_text }}</div>
        <nuxt-link
          :to="localePath('/cookie-privacy')"
          cls="cookies__link"
          class="underline-link -white"
          @mouseover="setCursorType('link')"
          @mouseleave="setCursorType('')"
        >
          {{ cookieInfo.cookies_more }}
        </nuxt-link>
      </div>
      <r-button
        bg-color="white"
        @click.prevent="acceptCookies()"
        @mouseover="setCursorType('link')"
        @mouseleave="setCursorType('')"
      >
        {{ cookieInfo.cookies_accept }}
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
