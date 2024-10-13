<script setup lang="ts">
import { type Category } from "~/types/home"

const localePath = useLocalePath()
const { locale } = useI18n()
const store = useCategory()
const filterBtns = ref<HTMLElement | null>(null)
const widthFirstBtn = computed(() => {
  if (!filterBtns.value) return
  return `${Math.ceil(filterBtns.value?.children[0].clientWidth)}px`
})
const width = ref("")
defineProps<{
  categories?: Category[]
}>()

const show = ref(false)
const showFilters = () => {
  show.value = !show.value
}
const slug = defineModel<string>("slug")

const emit = defineEmits(["update:slug"])

const setCategory = (category: string) => {
  store.setActiveCategory(category)
  emit("update:slug", category)
}
watch(
  () => show,
  (nv) => {
    if (nv) {
      width.value = `${filterBtns.value?.scrollWidth}px`
    }
  },
  {
    deep: true,
  },
)
</script>

<template>
  <div v-if="categories" cls="filter">
    <button cls="filter__slider" @click="showFilters">
      <div cls="filter__slider-sticks -first">
        <span />
        <span>
          <span />
        </span>
      </div>
      <div cls="filter__slider-sticks -second">
        <span>
          <span />
        </span>
        <span />
      </div>
      <div cls="filter__slider-sticks -third">
        <span />
        <span>
          <span />
        </span>
      </div>
    </button>
    <div ref="filterBtns" :cls="{ filter__btns: true, '-show': show }">
      <button :cls="{ filter__btn: true, '-active': slug === 'all' }" @click="setCategory('all')">
        <span v-if="locale === 'en'">All</span>
        <span v-if="locale === 'ru'">Все</span>
      </button>
      <button
        v-for="category in categories"
        :cls="{ filter__btn: true, '-active': slug === category.slug, '-show': show }"
        class="-category"
        @click="setCategory(category.slug)"
      >
        <span> {{ category.name }}</span>
      </button>
    </div>
  </div>
</template>

<style module lang="scss">
.filter {
  display: inline-flex;
  padding: 8px 8px 8px 32px;
  align-items: center;
  gap: 24px;
  border-radius: 108px;
  background: var(--Black);
  backdrop-filter: blur(14px);
  height: max-content;
  overflow: hidden;
  transition: 1s ease-in-out;
  &__slider {
    display: flex;
    width: 24px;
    height: 22px;
    gap: 2px;
    justify-content: space-between;
    &-sticks {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      width: 100%;
      height: 100%;
      span {
        border-radius: 1px;
        width: 2px;
        display: block;
        background: var(--White);
        position: relative;
        transition: 0.3s ease-in-out;
      }
      &.-first {
        span {
          &:nth-child(1) {
            height: 15%;
          }
          &:nth-child(2) {
            height: 85%;
            span {
              position: absolute;
              left: 0;
              top: -3px;
              transform: rotate(90deg);
              height: 7px;
            }
          }
        }
      }
      &.-second {
        span {
          &:nth-child(1) {
            height: 30%;
            span {
              position: absolute;
              left: 0;
              bottom: -3px;
              transform: rotate(90deg);
              height: 7px;
            }
          }
          &:nth-child(2) {
            height: 70%;
          }
        }
      }
      &.-third {
        span {
          &:nth-child(1) {
            height: 30%;
          }
          &:nth-child(2) {
            height: 70%;
            span {
              position: absolute;
              left: 0;
              top: -3px;
              transform: rotate(90deg);
              height: 7px;
            }
          }
        }
      }
    }
    &:hover {
      .filter {
        &__slider {
          &-sticks {
            &.-first {
              span {
                &:nth-child(1) {
                  height: 45%;
                }
                &:nth-child(2) {
                  height: 55%;
                  span {
                    height: 7px;
                  }
                }
              }
            }
            &.-second {
              span {
                transition-delay: 0.15s;
                &:nth-child(1) {
                  height: 80%;
                  span {
                    height: 7px;
                  }
                }
                &:nth-child(2) {
                  height: 20%;
                }
              }
            }
            &.-third {
              span {
                transition-delay: 0.08s;
                &:nth-child(1) {
                  height: 10%;
                }
                &:nth-child(2) {
                  height: 90%;
                  span {
                    height: 7px;
                  }
                }
              }
            }
          }
        }
      }
    }
    svg {
      font-size: 24px;
      color: #fff;
    }
  }
  &__btns {
    display: flex;
    gap: 8px;
    width: v-bind(widthFirstBtn);
    transition: 0.3s ease-in-out;
    &.-show {
      gap: 8px;
      width: v-bind(width);
    }
  }
  &__btn {
    height: 52px;
    display: flex;
    padding: 0 28px;
    justify-content: center;
    align-items: center;
    border-radius: 98px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s ease-in-out;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    flex-shrink: 0;

    &.-active {
      background: #fff;
      border: 1px solid rgba(255, 255, 255, 0.8);
      color: #000;
    }
    &:not(&.-active) {
      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.8);
        span {
          animation:
            MoveScaleUpInitial 0.3s forwards,
            MoveScaleUpEnd 0.3s forwards 0.3s;
        }
      }
    }
    @keyframes MoveScaleUpInitial {
      100% {
        transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
        opacity: 0;
      }
    }
    @keyframes MoveScaleUpEnd {
      0% {
        transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
        opacity: 0;
      }
      100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
}

@include tablet {
  .filter {
    padding: 4px 4px 4px 24px;
    gap: 16px;
    &__slider {
      svg {
        font-size: 20px;
      }
    }
    &__btn {
      height: 48px;
      padding: 0 24px;
      @include mob-body-14-med;
    }
  }
}
</style>
