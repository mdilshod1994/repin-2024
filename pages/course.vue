<script setup lang="ts">
const _store = usePreloaderTrigger()
onMounted(() => {
  setTimeout(() => {
    _store.handlePreloader(true)
  }, 1000)
})
</script>

<template>
  <div cls="course">
    <div class="container">
      <r-banner cls="course__banner" vertical-gap="70" scroll-to="Scroll down" bottom-line>
        <template #title>
          <div cls="course__banner-title">Project Management in <span>Notion</span></div>
        </template>
        <template #default>
          <div cls="course__banner-right">
            <div cls="text">
              On the course, we will analyze practical tips for managing web projects, and you will
              learn how to unleash the potential of a leader in yourself.
            </div>
            <div cls="course__banner-btns">
              <r-button> Buy the cource </r-button>
              <r-button bg-color="white"> watch free lesson </r-button>
            </div>
          </div>
        </template>
        <template #bottom-left>
          <div cls="course__banner-wrap">
            <div cls="course__banner-box">
              <div cls="course__banner-icon">
                <svgo-profile />
              </div>
              <div cls="course__banner-text">Author Ivan Repin</div>
            </div>
            <div cls="course__banner-box">
              <div cls="course__banner-icon">
                <svgo-info />
              </div>
              <div cls="course__banner-text">Theory and practice</div>
            </div>
            <div cls="course__banner-box">
              <div cls="course__banner-icon">
                <svgo-file />
              </div>
              <div cls="course__banner-text">35 video lessons + templates</div>
            </div>
          </div>
        </template>
      </r-banner>
    </div>
    <div cls="course__video">
      <r-video :vimeo="{ short: 'https://vimeo.com/955895016' }" />
    </div>
    <div class="container">
      <div cls="course__content">
        <course-content />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.course {
  padding-top: 136px;
  &__banner {
    margin-bottom: 8px;
    &-title {
      max-width: 560px;
    }
    &-right {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &-btns {
      display: flex;
      gap: 24px;
      button {
        white-space: nowrap;
      }
    }
    &-wrap {
      display: flex;
      gap: 40px;
    }
    &-box {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--gray);
    }
  }
  &__content {
    padding: 104px 0 128px;
  }
}
</style>
