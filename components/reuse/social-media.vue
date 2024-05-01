<script setup lang="ts">
// defineProps<{
//   social:
// }>()
</script>

<template>
  <div cls="carousel">
    <div class="container">
      <r-title pretitle="We're online" title="Social Media" flex-start />
    </div>
    <r-carousel gap="24">
      <div cls="carousel__social" class="hover-border">
        <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="carousel__social-img" />
        <a href="" cls="carousel__social-link">
          <div cls="carousel__social-icon">
            <svgo-behance />
          </div>
          <span> Behance </span>
        </a>
      </div>
      <div cls="carousel__social" class="hover-border">
        <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="carousel__social-img" />
        <a href="" cls="carousel__social-link">
          <div cls="carousel__social-icon">
            <svgo-ins />
          </div>
          <span> Instagram </span>
        </a>
      </div>
      <div cls="carousel__social" class="hover-border">
        <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="carousel__social-img" />
        <a href="" cls="carousel__social-link">
          <div cls="carousel__social-icon">
            <svgo-tw />
          </div>
          <span> Twitter </span>
        </a>
      </div>
      <div cls="carousel__social" class="hover-border">
        <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="carousel__social-img" />
        <a href="" cls="carousel__social-link">
          <div cls="carousel__social-icon">
            <svgo-dirble />
          </div>
          <span> Dribble </span>
        </a>
      </div>
      <div cls="carousel__social" class="hover-border">
        <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="carousel__social-img" />
        <a href="" cls="carousel__social-link">
          <div cls="carousel__social-icon">
            <svgo-youtube />
          </div>
          <span> Youtube </span>
        </a>
      </div>
      <div cls="carousel__social" class="hover-border">
        <img src="@/assets/images/tempImages/soc-1.png" alt="" cls="carousel__social-img" />
        <a href="" cls="carousel__social-link">
          <div cls="carousel__social-icon">
            <svgo-behance />
          </div>
          <span> Instagram </span>
        </a>
      </div>
    </r-carousel>
  </div>
</template>

<style module lang="scss">
.carousel {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 84px;
  &__social {
    width: 410px;
    height: 410px;
    border-radius: 24px;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    &-link {
      position: absolute;
      left: 50%;
      bottom: 24px;
      transform: translateX(-50%);
      height: 48px;
      padding: 0 16px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      z-index: 1;
      border-radius: 48px;
      border: 0.5px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.06);
      backdrop-filter: blur(18px);
      span {
        color: var(--White);
        @include desctop-caption-17-db;
      }
    }
    &-icon {
      display: flex;
      width: 24px;
      height: 24px;
      padding: 1px;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 24px;
        color: var(--White);
      }
    }
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 24px;
      transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:first-child,
    &:nth-child(3) {
      width: 302px;
      border-radius: 256px;
      img {
        border-radius: 256px;
      }
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
}
@include tablet {
  .carousel {
    gap: 64px;
    &__social {
      width: 342px;
      height: 342px;
      border-radius: 16px;
      &:first-child,
      &:nth-child(3) {
        width: 221px;
      }
      &-link {
        padding: 8px 12px;
        span {
          @include mob-body-14;
        }
      }
    }
  }
}
@include mobile {
  .carousel {
    &__social {
      width: 183px;
      height: 183px;
      &:first-child,
      &:nth-child(3) {
        width: 128px;
      }
      &-link {
        border-radius: 50%;
        padding: 10px;
        bottom: 16px;
        span {
          display: none;
        }
      }
      &-icon {
        padding: 3.333px 1.112px 3.333px 1.11px;
        width: 20px;
        height: 20px;
        svg {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
