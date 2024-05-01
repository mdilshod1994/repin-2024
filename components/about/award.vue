<script setup lang="ts">
import type { EnPage, ItemsB5 } from "~/types/about"

const props = defineProps<{
  awards: EnPage
}>()

const items = computed(() => {
  return props.awards.items_b5 as ItemsB5[]
})

const hideImgBox = ref<boolean>(false)
const curIdx = ref<number | null>(null)
const cursorPos = ref({ x: 0, y: 0 })
const setValue = (idx: number) => {
  curIdx.value = idx
}
const closeAnim = () => {
  curIdx.value = null
}
onMounted(() => {
  const avas = Array.from(document.querySelectorAll("#ava"))
  window.addEventListener("mousemove", (e) => {
    cursorPos.value.x = e.clientX
    cursorPos.value.y = e.clientY
  })
  requestAnimationFrame(function setPos() {
    for (let idx = 0; idx < avas.length; idx++) {
      const ava = avas[idx] as HTMLElement
      if (curIdx.value === idx)
        ava.style.transform = `translate(${cursorPos.value.x}px, ${cursorPos.value.y}px)`
    }
    requestAnimationFrame(setPos)
  })
})
</script>

<template>
  <r-grid
    v-if="awards"
    :desktop-gaps="[104]"
    :tablet-gaps="[64]"
    :mobile-gaps="[48]"
    desktop-column="1"
    cls="awards"
  >
    <r-title align-position="start">
      <template #title>
        <div v-html="awards.title_b5" />
      </template>
      <template #addons>
        <div class="texts -column">
          <div class="text">
            {{ awards.subtitle_b5 }}
          </div>
          <a :href="awards.link_b5" cls="awards__behance-link" class="underline-link -bold">
            {{ awards.link_b5_text }}
          </a>
        </div>
      </template>
    </r-title>
    <r-grid
      desktop-column="1"
      cls="awards__list"
      :desktop-gaps="[0]"
      :tablet-gaps="[0]"
      :mobile-gaps="[0]"
      @mouseover="hideImgBox = true"
      @mouseleave="hideImgBox = false"
      @mouseout="hideImgBox = false"
    >
      <div
        v-for="(item, idx) in items"
        cls="awards__item"
        @mouseover="setValue(idx)"
        @mouseleave="closeAnim"
        @mouseout="closeAnim"
      >
        <div cls="awards__item-name">
          {{ item.name }}
          <div id="ava" :cls="{ ava: true, '-show': hideImgBox }">
            <div :cls="{ 'ava-wrap': true, active: curIdx === idx, notactive: true }">
              <div :cls="{ 'ava-img': true, active: curIdx === idx, notactive: true }">
                <img :src="item.img" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div cls="awards__item-block">
          <div cls="awards__item-texts">
            <div v-for="category in item.categories" cls="awards__item-text">
              {{ category.name }}
            </div>
          </div>
          <div cls="awards__item-circles">
            <div v-for="icon in item.icons">
              <div v-html="icon.svg" />
            </div>
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
.ava {
  font-size: 100px;
  font-weight: 600px;
  color: white;
  position: fixed;
  left: 5px;
  top: 0;
  border-radius: 8px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  &.-show {
    opacity: 1;
    visibility: visible;
  }
  &-wrap {
    width: 200px;
    position: relative;
    height: 150px;
    &.active {
      display: flex;
      justify-content: flex-end;
      width: 200px;
      height: 150px;
    }
    &.notactive {
      width: 200px;
      height: 150px;
    }
  }
  &-img {
    position: absolute;
    top: 0;
    pointer-events: none;
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
    }
    &.notactive {
      width: 0px;
    }
    &.active {
      width: 200px;
      img {
        transform: scale(1.5);
        animation: scale 1s forwards cubic-bezier(0, -0.28, 0, 0.98);
        animation-delay: 0.1s;
      }

      @keyframes scale {
        0% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
}
.notactive.ava-img {
  width: 0px;
}
.active.ava-img {
  width: 200px;
}

.active.ava-img img {
  transform: scale(1.5);
}
.active.ava-img img {
  animation: scale 1s forwards cubic-bezier(0, -0.28, 0, 0.98);
  animation-delay: 0.1s;
}
.ava-img img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}
@keyframes scale {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
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
