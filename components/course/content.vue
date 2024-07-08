<script setup lang="ts">
const curIdx = ref(0)
const setCurIdx = (idx: number) => {
  curIdx.value = idx
}
</script>

<template>
  <div cls="content">
    <div cls="content__left">
      <div cls="content__title"><span>Course</span> content</div>
      <div cls="content__text">
        "Good organization of work, excellent communication at every stage, from initiation and data
        collection, through execution and editing, and ending with the delivery of the finished
        result. Deep immersion in the tasks and goals of the project, resulted in an excellent
        result."
      </div>
      <div cls="content__wrap">
        <div cls="content__box">
          <div cls="content__box-icon">
            <svgo-file-fill />
          </div>
          <div cls="content__box-text">17 modules</div>
        </div>
        <div cls="content__box">
          <div cls="content__box-icon">
            <svgo-camera />
          </div>
          <div cls="content__box-text">35 video lessons</div>
        </div>
      </div>
    </div>
    <div cls="content__right">
      <div cls="accordions">
        <div
          v-for="(a, idx) in 3"
          :key="idx"
          :cls="{ accordion: true, '-active': idx === curIdx }"
          @click="setCurIdx(idx)"
        >
          <div cls="accordion__title">
            Управление
            <div cls="accordion__title-icon">
              <svgo-arrow-up-right />
            </div>
          </div>
          <div cls="accordion__content">
            <div cls="list">
              <div cls="list__item">12 деловых навыков профессионального управленца.</div>
              <div cls="list__item">Как навести порядок в работе. Мои шаблоны в Notion.</div>
              <div cls="list__item">Какую нишу занять на диджитал-рынке. Наша стратегия.</div>
              <div cls="list__item">Бизнес-модель Остервальдера: 9 ключевых элементов бизнеса.</div>
              <div cls="list__item">ИП, ООО или самозанятость. Что выбрать в 2020 году.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.content {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  &__left {
    display: flex;
    flex-direction: column;
    max-width: 489px;
  }
  &__title {
    @include desctop-H2;
    span {
      @include desctop-H2-ram;
      font-style: italic;
    }
  }
  &__text {
    margin: 24px 0 48px;
    max-width: 448px;
  }
  &__wrap {
    display: flex;
    gap: 40px;
  }
  &__box {
    display: flex;
    align-items: center;
    gap: 12px;
    &-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gray);
      svg {
        font-size: 14px;
      }
    }
  }
  &__right {
    max-width: 676px;
    width: 100%;
  }
}
.accordions {
  display: flex;
  flex-direction: column;
}
.accordion {
  display: flex;
  flex-direction: column;
  &__title {
    padding: 22px 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    @include desctop-H5;
    transition: 0.3s ease-in-out;
    position: relative;
    &-icon {
      display: flex;
      width: 36px;
      height: 36px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: var(--gray);
      transition: 0.3s ease-in-out;
      svg {
        font-size: 16px;
      }
    }
    &:hover {
      background: var(--gray);
    }

    &:hover &-icon {
      background: var(--White);
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: calc(100% - 48px);
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      background: rgba(229, 229, 229, 1);
      transition: 0.3s ease-in-out;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: -1px;
    }
  }
  &:hover {
    .accordion {
      &__title {
        &::before,
        &::after {
          opacity: 0;
        }
      }
    }
  }
  &:hover + .accordion .accordion__title::before {
    opacity: 0;
  }

  &__content {
    padding: 0 24px 0;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s;
    & > div {
      overflow: hidden;
    }
  }
  &.-active {
    .accordion {
      &__title {
        padding-bottom: 0;
        margin-bottom: 16px;
        background: var(--White);
        &-icon {
          background: var(--gray);
          transform: rotate(90deg);
        }
        &::before {
          opacity: 1;
        }
        &::after {
          opacity: 0;
        }
      }
      &__content {
        padding: 0 24px 38px;
        grid-template-rows: 1fr;
      }
    }
    &:hover + .accordion .accordion__title::before {
      opacity: 1;
    }
  }
}
</style>
