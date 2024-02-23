<script setup lang="ts"></script>

<template>
  <div cls="header">
    <nuxt-link to="/" cls="header__logo">
      <svgo-logo />
    </nuxt-link>
    <nav cls="header__nav">
      <nuxt-link cls="header__nav-link" to="/portfolio"> Portfolio </nuxt-link>
      <nuxt-link cls="header__nav-link"> About </nuxt-link>
      <nuxt-link cls="header__nav-link"> Consulting </nuxt-link>
      <nuxt-link cls="header__nav-link"> Blog </nuxt-link>
      <nuxt-link cls="header__nav-link"> Contact </nuxt-link>
    </nav>
    <div cls="header__btns">
      <button cls="header__btn">RU</button>
    </div>
  </div>
</template>

<style module lang="scss">
.header {
  border-radius: 108px;
  background: rgba(124, 124, 124, 0.1);
  backdrop-filter: blur(18.06315803527832px);
  padding: 8px 8px 8px 32px;
  max-width: 1520px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &__logo {
    svg {
      width: 152px;
      height: 30px;
    }
  }
  &__nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 28px;
    &-link {
      @include desctop-caption-17-med;
    }
  }
  &__btns {
    display: flex;
    padding: 13px 24px;
    align-items: center;
    border-radius: 48px;
    background: #fff;
    width: 71px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__btn {
    @include desctop-caption-17-med;
  }
}
</style>
