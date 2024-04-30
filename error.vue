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
      <div cls="error__bottom-text">Kiss my pixel<span /></div>
    </div>
  </div>
</template>

<style module lang="scss">
.error {
  background: url("@/assets/images/tempImages/error-bg.png"), var(--Black);
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content {
    max-width: 684px;
    margin: 0 auto;
    color: var(--White);
    text-align: center;
  }
  &__btn {
    width: max-content;
    margin: 0 auto;
  }
  &__text {
    @include desctop-H1-ram;
    font-style: italic;
  }
}

@include tablet-small {
  .error {
    background-size: cover;
    &__text {
      @include mob-H1-ram;
      font-style: italic;
    }
  }
}
</style>
