<script setup lang="ts"></script>

<template>
  <r-grid
    desktop-column="1"
    :desktop-gaps="[160]"
    :tablet-gaps="[80]"
    :mobile-gaps="[56]"
    cls="open-jobs"
  >
    <r-title align-position="start">
      <template #title>
        <div cls="open-jobs__title">
          Do you want to be a <br />
          part of our team? <br />
          <span> Send to us your CV </span>
        </div>
      </template>
      <template #addons>
        <div class="texts -column">
          <r-round-button size="small" cls="open-jobs__info-icon">
            <svgo-info />
          </r-round-button>
          <div class="text">
            In 2024, we decided to enter into a strategic partnership with Mobicom, a company with
            20 years of development experience. Now we are able to deliver a project of any
            complexity.
          </div>
        </div>
      </template>
    </r-title>
    <r-grid
      desktop-column="1"
      :desktop-gaps="[64]"
      :tablet-gaps="[40]"
      :mobile-gaps="[48]"
      cls="open-jobs__list"
    >
      <div v-for="j in 2" cls="open-jobs__item">
        <div cls="open-jobs__item-title"><span /> UX/UI Design</div>
        <r-grid
          desktop-column="2"
          :desktop-gaps="[12]"
          mobile-column="1"
          cls="open-jobs__item-list"
        >
          <div v-for="p in 4" cls="open-jobs__item-box">
            <div cls="open-jobs__item-content">
              <div cls="open-jobs__item-name">Full Time Assistant</div>
              <div cls="open-jobs__item-tasks">Lots of interesting tasks</div>
            </div>
            <div cls="open-jobs__item-icon">
              <r-round-button size="small" bg-color="white">
                <svgo-arrow-right />
              </r-round-button>
            </div>
          </div>
        </r-grid>
      </div>
    </r-grid>
  </r-grid>
</template>

<style module lang="scss">
.open-jobs {
  &__title {
    max-width: 665px;
    @include desctop-H2;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &-title {
      display: flex;
      align-items: center;
      gap: 12px;
      @include desctop-H5-ram;
      span {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--Black);
      }
    }
    &-list {
      max-width: 845px;
      width: 100%;
    }
    &-box {
      display: flex;
      width: 100%;
      max-width: 410px;
      height: 106px;
      padding: 24px 32px;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      border-radius: 12px;
      background: #f5f5f5;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    &-name {
      @include desctop-body-22-med;
    }
    &-tasks {
      color: rgba(20, 20, 20, 0.6);
    }
  }
}
@include tablet {
  .open-jobs {
    &__title {
      @include mob-H2;
    }
    &__item {
      &-title {
        @include mob-sub-16;
      }
      &-list {
        max-width: 614px;
      }
      &-box {
        padding: 17px 20px;
      }
      &-name {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
      }
    }
  }
}
@include tablet-small {
  .open-jobs {
    &__item {
      flex-wrap: wrap;
      gap: 16px;
    }
  }
}
@include mobile {
  .open-jobs {
    &__info-icon {
      display: none;
    }
    &__item {
      &-list,
      &-box {
        max-width: 100%;
      }
    }
  }
}
</style>
