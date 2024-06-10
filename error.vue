<script setup lang="ts">
defineProps(["error"])
const store = useGlobalData()
onMounted(async () => {
  await store.getMenuHeaderFooter()
})
</script>

<template>
  <div cls="error">
    <r-cursor />
    <the-header />
    <r-grid
      desktop-column="1"
      :desktop-gaps="[48]"
      :tablet-gaps="[48]"
      :mobile-gaps="[48]"
      cls="error__content"
    >
      <div cls="error__text">
        {{ error.statusCode }} — Oops, <br />
        {{ error.statusCode === 404 ? "page not found" : "Problem on the site" }}
      </div>
      <r-button bg-color="white" cls="error__btn" to="/portfolio"> See all projects </r-button>
    </r-grid>
    <div cls="error__bottom">
      <div cls="error__bottom-wrap">
        <div v-for="(k, idx) in 100" :key="idx" cls="error__bottom-text">Kiss my pixel<span /></div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.error {
  background: url("@/assets/images/tempImages/error-bg.webp"), var(--Black);
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100svh;
  position: relative;

  &__content {
    max-width: 684px;
    margin: 0 auto;
    color: var(--White);
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__btn {
    width: max-content;
    margin: 0 auto;
  }
  &__text {
    @include desctop-H1-ram;
    font-style: italic;
  }
  &__bottom {
    padding: 32px 0;
    border-top: 1px solid #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;

    &-wrap {
      display: flex;
      align-items: center;
      gap: 24px;
      animation: scroll 15s linear infinite;
    }
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
    &-text {
      display: flex;
      align-items: center;
      gap: 24px;
      color: #fff;
      font-family: "Ramillas Trial";
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: -0.4px;
      white-space: nowrap;

      span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fff;
      }
    }
  }
}

@include tablet-small {
  .error {
    background-size: cover;
    &__text {
      @include mob-H1-ram;
      font-style: italic;
    }
    &__bottom {
      padding: 16px 0 40px;
      &-wrap {
        gap: 16px;
      }
      &-text {
        @include mob-sub-16;
        gap: 16px;
        span {
          width: 5px;
          height: 5px;
        }
      }
    }
  }
}
</style>
