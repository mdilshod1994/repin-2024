<script setup lang="ts"></script>

<template>
  <div cls="portfolio">
    <div class="container">
      <div cls="portfolio__wrap">
        <r-title pretitle="Portfolio" title="Our works">
          <template #addons>
            <portfolio-filters />
          </template>
        </r-title>
        <portfolio-grid />
        <div cls="portfolio__carousel">
          <r-title pretitle="We're online" title="Social Media" align-title-position="start" />
          <r-carousel>
            <div v-for="s in 10" cls="portfolio__social">
              <a href="" cls="portfolio__social-link">
                <span>
                  <svgo-youtube filled />
                </span>
                Instagram
              </a>
            </div>
          </r-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.portfolio {
  padding: 152px 0 130px;
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 68px;
  }
  &__social {
    width: 410px;
    height: 410px;
    border-radius: 24px;
    position: relative;
    background: rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
    &-link {
      position: absolute;
      left: 50%;
      bottom: 24px;
      transform: translateX(-50%);
      padding: 12px 16px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 48px;
      border: 0.5px solid #fff;
      background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.15) 17.44%,
          rgba(255, 255, 255, 0) 134.25%
        ),
        rgba(255, 255, 255, 0.15);
      box-shadow: 0px 3.3px 22.191px 0px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(18.06315803527832px);
      span {
        padding: 4px 1.335px 4px 1.332px;
      }
      svg {
        font-size: 16px;
      }
    }
  }
}
</style>
