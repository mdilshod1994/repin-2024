<template>
  <div cls="home">
    <div class="container">
      <div cls="home__top">
        <r-banner scroll-to="test" cls="home__banner">
          <div cls="home__banner-top">
            <r-round-button size="large">
              <svgo-user-group />
            </r-round-button>
            <div cls="home__banner-bottom">
              <div cls="home__banner-desc">
                We build cloud-based web and mobile apps for existing products and startups. Using
                AI technologies, we aim to quickly turn your idea into a successful solution.
              </div>
              <nuxt-link to="/portfolio" class="underline-link"> More about us </nuxt-link>
            </div>
          </div>

          <template #title>
            <div cls="title">
              <span> Your partner </span><br />
              in the digital world
            </div>
          </template>
          <template #bottom-left>
            <div cls="home__banner-texts">
              <div cls="home__banner-text">Digital products from scratch</div>
              <div cls="home__banner-text">Go-to-market strategy and consulting</div>
            </div>
          </template>
        </r-banner>
      </div>
    </div>
    <r-video />
    <div class="container">
      <div cls="home__portfolio">
        <home-portfolio />
      </div>
    </div>
    <div cls="home__consulting">
      <home-consulting />
    </div>
    <div cls="home__clients">
      <home-our-clients />
    </div>
    <div class="container">
      <div cls="home__stories">
        <home-stories />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.home {
  padding-top: 152px;
  &__top {
    padding-bottom: 8px;
  }
  &__banner {
    &-texts {
      display: flex;
      gap: 88px;
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
    &-desc {
      @include desctop-body-22;
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
  &__portfolio {
    padding: 104px 0;
  }
  &__consulting {
    padding: 24px 0;
    max-width: 1920px;
    margin: 0 auto;
  }
  &__clients {
    padding: 88px 0;
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
  }
  &__stories {
    padding: 104px 0 160px;
  }
}
.title {
  max-width: 579px;
}

@include tablet {
  .home {
    padding-top: 80px;
    &__portfolio {
      padding: 72px 0;
    }
    &__consulting {
      padding: 16px 0;
    }
    &__clients {
      padding: 72px 0 56px;
    }
    &__stories {
      padding: 72px 0 88px;
    }
    &__banner {
      &-top {
        gap: 24px;
      }
      &-desc {
        @include mob-body-14;
      }
      &-texts {
        flex-wrap: wrap;
        column-gap: 88px;
        row-gap: 16px;
      }
      &-bottom {
        gap: 16px;
      }
    }
  }

  .title {
    max-width: 304px;
  }
}
@include tablet-small {
  .home {
    padding-top: 72px;
  }
}
@include mobile {
  .home {
    &__banner {
      &-top {
        flex-direction: row;
        gap: 72px;
      }
    }
    &__top {
      padding-bottom: 24px;
    }
    &__clients {
      padding: 56px 0;
    }
  }
}
</style>
