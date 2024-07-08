<script setup lang="ts"></script>

<template>
  <div cls="mentor">
    <div cls="mentor__left">
      <div cls="mentor__title">
        <div cls="mentor__title-text">Expert and mentor —</div>
        <div cls="mentor__title-name">Ivan Repin</div>
      </div>
      <div cls="mentor__descr">
        “I am an orchestra man! This has helped me achieve high results, and working in digital has
        given me the freedom to travel around the world without interrupting my work.”
      </div>
      <r-author name="Ivan Repin" profession="Creative Director of Repin Agency" />
    </div>
    <div cls="mentor__right">
      <div cls="mentor__wrap">
        <div cls="mentor__photo">
          <img src="@/assets/images/tempImages/i-r.png" alt="" />
        </div>
        <div cls="mentor__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.8093 6.2307C34.0629 5.34825 32.9657 4.83931 31.8098 4.83936L20.5849 4.83981C20.5848 4.83981 20.5847 4.83974 20.5847 4.83966C20.5847 4.83957 20.5847 4.83951 20.5846 4.83951H15.0562H11.8872H4.03927C2.73746 4.83951 1.68213 5.89483 1.68213 7.19664V36.9025C1.68213 38.2043 2.73746 39.2596 4.03927 39.2596H13.0133C14.3151 39.2596 15.3704 38.2043 15.3704 36.9025V9.25422C15.3704 8.29329 16.1494 7.5143 17.1104 7.5143C17.6194 7.5143 18.103 7.73724 18.4335 8.12436L28.2576 19.6292C28.9546 20.4455 29.0122 21.6296 28.3975 22.5096L22.7701 30.5669C21.9537 31.7357 22.0264 33.3077 22.9472 34.3962L25.8844 37.8684C26.6309 38.7508 27.7281 39.2598 28.884 39.2597L41.6567 39.2592C42.9979 39.2592 43.7226 37.6873 42.8517 36.6674L32.4362 24.4699C31.7392 23.6536 31.6816 22.4695 32.2962 21.5895L37.9237 13.5322C38.7401 12.3633 38.6673 10.7914 37.7465 9.70287L34.8093 6.2307Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.mentor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__left {
    max-width: 411px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    display: flex;
    flex-direction: column;
    &-text {
      @include desctop-H3;
    }
    &-name {
      @include desctop-H3-ram;
      font-style: italic;
    }
  }
  &__descr {
    margin: 24px 0 64px;
  }
  &__wrap {
    position: relative;
  }
  &__photo {
    max-width: 416px;
  }
  &__logo {
    width: 282px;
    height: 283px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -203px;
    margin-left: -116px;
    z-index: 1;
    position: relative;
    svg {
      width: 44px;
    }
  }
}
</style>
