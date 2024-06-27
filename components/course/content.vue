<script setup lang="ts"></script>

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
        <div cls="accordion">
          <div cls="accordion__title">
            Управление
            <div class="accordion__title-o">
              <div class="accordion__title-icon">
                <svgo-arrow-up-right />
              </div>
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
        <div cls="accordion">
          <div cls="accordion__title">
            Команда
            <div class="accordion__title-o">
              <div class="accordion__title-icon">
                <svgo-arrow-up-right />
              </div>
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
        <div cls="accordion">
          <div cls="accordion__title">
            Продажи
            <div class="accordion__title-o">
              <div class="accordion__title-icon">
                <svgo-arrow-up-right />
              </div>
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
  &__left {
    max-width: 676px;
  }
}
</style>
