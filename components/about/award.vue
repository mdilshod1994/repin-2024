<script setup lang="ts"></script>

<template>
  <r-grid
    :desktop-gaps="[104]"
    :tablet-gaps="[64]"
    :mobile-gaps="[48]"
    desktop-column="1"
    cls="awards"
  >
    <r-title align-position="start">
      <template #title>
        Awards <span>&</span> <br />
        Recognitions
      </template>
      <template #addons>
        <div class="texts -column">
          <div class="text">
            You can also view all of our work on Behance, feel free to leave your feedback and
            reactions 👍
          </div>
          <a href="" cls="awards__behance-link" class="underline-link -bold"> Go to Behance </a>
        </div>
      </template>
    </r-title>
    <r-grid
      desktop-column="1"
      cls="awards__list"
      :desktop-gaps="[0]"
      :tablet-gaps="[0]"
      :mobile-gaps="[0]"
    >
      <div cls="awards__item">
        <div cls="awards__item-name">
          Health Lab
          <div cls="awards__item-album">
            <img src="@/assets/images/awards/h-l.png" alt="" />
          </div>
        </div>
        <div cls="awards__item-block">
          <div cls="awards__item-texts">
            <div cls="awards__item-text">Mobile Application</div>
            <div cls="awards__item-text">Behance – UI/UX, Stock Gallery</div>
          </div>
          <div cls="awards__item-circles">
            <svgo-st filled cls="st" />
            <svgo-ui filled />
          </div>
        </div>
      </div>
      <div cls="awards__item">
        <div cls="awards__item-name">
          Capitalist
          <div cls="awards__item-album">
            <img src="@/assets/images/awards/c.png" alt="" />
          </div>
        </div>
        <div cls="awards__item-block">
          <div cls="awards__item-texts">
            <div cls="awards__item-text">Mobile Application</div>
            <div cls="awards__item-text">Behance – UI/UX</div>
          </div>
          <div cls="awards__item-circles">
            <svgo-ui filled />
          </div>
        </div>
      </div>
      <div cls="awards__item">
        <div cls="awards__item-name">
          Trade-X
          <div cls="awards__item-album">
            <img src="@/assets/images/awards/t.png" alt="" />
          </div>
        </div>
        <div cls="awards__item-block">
          <div cls="awards__item-texts">
            <div cls="awards__item-text">Platform</div>
            <div cls="awards__item-text">Behance – UI/UX</div>
          </div>
          <div cls="awards__item-circles">
            <svgo-ui filled />
          </div>
        </div>
      </div>
      <div cls="awards__item">
        <div cls="awards__item-name">
          Enograf
          <div cls="awards__item-album">
            <img src="@/assets/images/awards/e.png" alt="" />
          </div>
        </div>
        <div cls="awards__item-block">
          <div cls="awards__item-texts">
            <div cls="awards__item-text">Promo site</div>
            <div cls="awards__item-text">Behance – UI/UX</div>
          </div>
          <div cls="awards__item-circles">
            <svgo-ui filled />
          </div>
        </div>
      </div>
    </r-grid>
  </r-grid>
</template>

<style module lang="scss">
.awards {
  &__behance-link {
    @include desctop-caption-17-db;
  }
  &__item {
    padding: 16px 0;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 132px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 44px);
      height: 100%;
      background: var(--gray);
      border-radius: 12px;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      z-index: 1;
      &::after {
        opacity: 1;
        visibility: visible;
      }
      .awards {
        &__item {
          &-album {
            opacity: 1;
          }
        }
      }
    }
    &-name {
      max-width: 100%;
      position: relative;
      width: 100%;
      display: flex;
      height: 30px;
      justify-content: space-between;
      align-items: center;
      @include desctop-H5-ram;
    }
    &-album {
      width: 176px;
      height: 176px;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      animation: rotation 6s infinite linear;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    &-circles,
    &-texts,
    &-block {
      display: flex;
      align-items: center;
    }
    &-texts {
      gap: 48px;
    }
    &-text {
      color: var(--dark-grey);
    }
    &-block {
      max-width: 737px;
      width: 100%;
      justify-content: space-between;
      gap: 24px;
    }
    &-circles {
      svg {
        width: 48px;
        height: 48px;
        font-size: 48px;
        &.st {
          margin-right: -12px;
        }
        &:nth-child(2) {
          z-index: 1;
        }
      }
    }
  }
}
@include tablet {
  .awards {
    &__item {
      gap: 41px;
      &-name {
        white-space: nowrap;
        width: 200px;
        @include mob-sub-16;
      }
      &-texts {
        gap: 41px;
      }
      &-text {
        color: rgba(20, 20, 20, 0.6);
      }
      &-album {
        display: none;
      }
    }
  }
}
@include mobile {
  .awards {
    &__item {
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
      height: auto;
      position: relative;
      &-texts {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
      }
      &-circles {
        position: absolute;
        top: 16px;
        right: 0;
        svg {
          font-size: 40px;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>