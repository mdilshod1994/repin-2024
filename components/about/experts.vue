<script setup lang="ts"></script>

<template>
  <r-grid
    desktop-column="1"
    cls="experts"
    :desktop-gaps="[104]"
    :tablet-gaps="[64]"
    :mobile-gaps="[48]"
  >
    <r-title title="We are experts in:" align-position="start">
      <template #addons>
        <div class="texts -column">
          <r-round-button size="small" cls="experts__icon-info" pointer-events>
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
    <r-grid cls="experts__list" tablet-column="3" mobile-column="1" :mobile-gaps="[16]">
      <div cls="experts__card">
        <div cls="experts__card-bg" />
        <div cls="experts__card-wrap">
          <r-round-button size="small" bg-color="white" cls="experts__card-arrow">
            <svgo-arrow-right />
          </r-round-button>
          <div cls="experts__card-block">
            <div cls="experts__card-content">
              <div cls="experts__card-title">Brand design</div>
              <div cls="experts__card-desc">
                The brand designer will help create the original style and identity of the project
                and a guideline on how to use the new style.
              </div>
            </div>
            <div class="tabs">
              <div class="tab -white">Visual identity</div>
              <div class="tab -white">Logo</div>
              <div class="tab -white">Motion</div>
              <div class="tab -white">Brand book</div>
              <div class="tab -white">3D</div>
              <div class="tab -white">Presentation</div>
            </div>
          </div>
        </div>
      </div>
      <div cls="experts__card">
        <div cls="experts__card-bg" />
        <div cls="experts__card-wrap">
          <r-round-button size="small" bg-color="white" cls="experts__card-arrow">
            <svgo-arrow-right />
          </r-round-button>
          <div cls="experts__card-block">
            <div cls="experts__card-content">
              <div cls="experts__card-title">UX/UI Design</div>
              <div cls="experts__card-desc">
                Our goal is to turn your digital product into an intuitive, efficient and visually
                appealing tool for your customers.
              </div>
            </div>
            <div class="tabs">
              <div class="tab -white">Analytic</div>
              <div class="tab -white">Сoncepts</div>
              <div class="tab -white">Prototyping</div>
              <div class="tab -white">Design system</div>
              <div class="tab -white">UX testing</div>
            </div>
          </div>
        </div>
      </div>
      <div cls="experts__card">
        <div cls="experts__card-bg" />
        <div cls="experts__card-wrap">
          <r-round-button size="small" bg-color="white" cls="experts__card-arrow">
            <svgo-arrow-right />
          </r-round-button>
          <div cls="experts__card-block">
            <div cls="experts__card-content">
              <div cls="experts__card-title">{{'</Development>'}}</div>
              <div cls="experts__card-desc">
                We create any IT solutions your business needs and have enough knowledge and resources to develop a SaaS or mobile apps.
              </div>
            </div>
            <div class="tabs">
              <div class="tab -white">Web</div>
              <div class="tab -white">iOS</div>
              <div class="tab -white">Android</div>
              <div class="tab -white">Saas</div>
              <div class="tab -white">Database</div>
              <div class="tab -white">Architecture</div>
              <div class="tab -white">Testing</div>
            </div>
          </div>
        </div>
      </div>
    </r-grid>
  </r-grid>
</template>

<style lang="scss" module>
.experts {
  &__card {
    padding: 16px 32px 32px;
    background: var(--Gradient);
    border-radius: 24px;
    gap: 56px;
    position: relative;
    overflow: hidden;
    &-bg {
      background: linear-gradient(
        to bottom,
        rgba(245, 245, 245, 0),
        rgba(245, 245, 245, 0.1),
        rgba(245, 245, 245, 0.2),
        rgba(245, 245, 245, 0.3),
        rgba(245, 245, 245, 0.4),
        rgba(245, 245, 245, 0.5),
        rgba(245, 245, 245, 0.6),
        rgba(245, 245, 245, 0.7),
        rgba(245, 245, 245, 0.8),
        rgba(245, 245, 245, 0.9),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1),
        rgba(245, 245, 245, 1)
      );
      position: absolute;
      width: 100%;
      height: 200%;
      top: -100%;
      left: 0;
      transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &-arrow {
      margin-right: -16px;
    }
    &-wrap {
      height: 0;
      padding-bottom: 114.23%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 56px;
      z-index: 1;
      position: relative;
    }
    &-block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-title {
      @include desctop-H4-ram;
    }
    :global(.tabs) {
      margin-bottom: calc(-100% + 32px);
    }
    &:hover {
      :global(.round-button) {
        background: var(--Black);
        svg {
          transform: rotate(-45deg);
          path {
            stroke: #fff;
          }
        }
      }
      .experts {
        &__card {
          &-bg {
            transform: translateY(100%);
          }
        }
      }
    }
  }
}

@include tablet {
  .experts {
    &__card {
      padding: 16px 16px 20px 20px;
      border-radius: 16px;
      &-arrow {
        margin-right: 0;
      }
      &-wrap {
        padding-bottom: 0;
        height: auto;
        gap: 24px;
      }
      &-content {
        gap: 8px;
      }
      &-block {
        gap: 40px;
      }
      &-title {
        @include mob-H3;
      }
      :global(.tabs) {
        margin-bottom: auto;
      }
    }
  }
}
@include mobile {
  .experts {
    &__icon-info {
      display: none;
    }
    :global(.text) {
      max-width: 297px;
    }
  }
}
</style>
