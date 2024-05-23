<script setup lang="ts">
import { useMediaQuery, useResizeObserver } from "@vueuse/core"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"

const isLargeScreen = useMediaQuery("(min-width: 768px)")
const isTabletScreen = useMediaQuery("(max-width: 768px)")
defineProps<{
  img?: string
}>()

const carouselmob = ref<HTMLElement | null>(null),
  carouselWidth = ref(0),
  scrollbar = ref<HTMLElement | null>(null),
  thumb = ref<HTMLElement | null>(null),
  scrollPosition = ref(0),
  curIdx = ref(1),
  pause = ref(false),
  interval = ref(),
  setTime = ref()

useResizeObserver(carouselmob, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  carouselWidth.value = width
})

const maxScrollLeft = computed(() => {
  if (carouselmob.value) return carouselmob.value?.scrollWidth - carouselWidth.value
})

const updateThumbPosition = () => {
  if (scrollbar.value && thumb.value && carouselmob.value && maxScrollLeft.value) {
    scrollPosition.value = carouselmob.value.scrollLeft
    thumb.value.style.left = `${
      (scrollPosition.value / maxScrollLeft.value) *
      (scrollbar.value.clientWidth - thumb.value.offsetWidth)
    }px`
  }
}

const setObserver = () => {
  if (!carouselmob.value) return
  const cards = Array.from(carouselmob.value.childNodes)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("-vissible", entry.isIntersecting)
        curIdx.value = cards.indexOf(entry.target)
      })
    },
    {
      threshold: 0.95,
    },
  )

  for (let idx = 0; idx < cards.length; idx++) {
    const element = cards[idx] as HTMLElement
    observer.observe(element)
  }
}

const setThumbWidth = () => {
  if (thumb.value && carouselmob.value) {
    thumb.value.style.width = `${carouselmob.value.clientWidth / carouselmob.value.children.length}px`
  }
}

const updateOnScroll = () => {
  if (!carouselmob.value) return
  carouselmob.value.addEventListener("scroll", () => {
    updateThumbPosition()
  })
}

const stopAnimation = () => {
  pause.value = true
  clearInterval(interval.value)
  autoPlay()
  pause.value = false
}

const autoPlay = () => {
  gsap.registerPlugin(ScrollToPlugin)

  interval.value = setInterval(() => {
    if (!carouselmob.value) return
    const cards = carouselmob.value.childNodes as NodeListOf<HTMLElement>
    if (curIdx.value < cards.length - 1) {
      curIdx.value++
    } else {
      curIdx.value = 0
    }
    const body = document.querySelector("body")
    if (cards) {
      if (!body) return
      gsap.to(carouselmob.value, {
        duration: 1,
        ease: "power1.inOut",
        paused: pause.value,
        scrollTo: {
          x:
            cards[curIdx.value].offsetLeft -
            (body?.clientWidth - cards[curIdx.value].clientWidth) / 2,
        },
      })
    }
  }, 3000)
}

onMounted(() => {
  setThumbWidth()
  setObserver()
  updateOnScroll()
  autoPlay()
})

watch(isTabletScreen, (nv) => {
  if (nv) {
    setTimeout(() => {
      setObserver()
      setThumbWidth()
      updateOnScroll()
    }, 500)
  }
})
</script>

<template>
  <div cls="photos">
    <div cls="photos__top">
      <r-title pretitle="Our team" text-align="center">
        <template #title>
          <div cls="photos__top-title"><span>Meet the</span> Trailblazers</div>
        </template>
      </r-title>
    </div>
    <div cls="photos__carousels">
      <div v-if="isLargeScreen" cls="photos__carousels-wrap">
        <div v-for="(img, idx) in 2" :key="idx" cls="photos__carousels-box">
          <div cls="photos__card">
            <img src="@/assets/images/about/1.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Dmitry <span>Kotenko</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Mobile developer</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/2.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Evgeny <span>Fedorovsky</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Web developer</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/3.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Vadim <span>Timofeev</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">CTO of Mobicom</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/4.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Ivan <span>Repin</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Founder</div>
                <div cls="photos__card-position">Art-director</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/5.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Ilya <span>Semenov</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">CEO of Mobicom</div>
                <div cls="photos__card-position">Chief of Development</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/6.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Elina <span>Liubinskaya</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">UI Designer</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/7.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Vladimir <span>Savichev</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Project manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLargeScreen" cls="photos__carousels-wrap">
        <div v-for="(img, idx) in 2" :key="idx" cls="photos__carousels-box">
          <div cls="photos__card">
            <img src="@/assets/images/about/8.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Dmitry <span>Kotenko</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Mobile developer</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/9.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Evgeny <span>Fedorovsky</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Web developer</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/10.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Vadim <span>Timofeev</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">CTO of Mobicom</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/11.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Ivan <span>Repin</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Founder</div>
                <div cls="photos__card-position">Art-director</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/12.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Ilya <span>Semenov</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">CEO of Mobicom</div>
                <div cls="photos__card-position">Chief of Development</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/13.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Elina <span>Liubinskaya</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">UI Designer</div>
              </div>
            </div>
          </div>
          <div cls="photos__card">
            <img src="@/assets/images/about/14.webp" alt="" cls="photos__card-img" />
            <div cls="photos__card-info">
              <div cls="photos__card-name">Vladimir <span>Savichev</span></div>
              <div cls="photos__card-positions">
                <div cls="photos__card-position">Project manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isTabletScreen"
        ref="carouselmob"
        cls="photos__carousels-mob"
        @touchstart="stopAnimation"
        @touchend="setTime = null"
      >
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/1.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Dmitry <span>Kotenko</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Mobile developer</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/2.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Evgeny <span>Fedorovsky</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Web developer</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/3.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Vadim <span>Timofeev</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">CTO of Mobicom</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/4.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Ivan <span>Repin</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Founder</div>
              <div cls="photos__card-position">Art-director</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/5.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Ilya <span>Semenov</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">CEO of Mobicom</div>
              <div cls="photos__card-position">Chief of Development</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/6.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Elina <span>Liubinskaya</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">UI Designer</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/7.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Vladimir <span>Savichev</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Project manager</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/8.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Dmitry <span>Kotenko</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Mobile developer</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/9.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Evgeny <span>Fedorovsky</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Web developer</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/10.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Vadim <span>Timofeev</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">CTO of Mobicom</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/11.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Ivan <span>Repin</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Founder</div>
              <div cls="photos__card-position">Art-director</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/12.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Ilya <span>Semenov</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">CEO of Mobicom</div>
              <div cls="photos__card-position">Chief of Development</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/13.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Elina <span>Liubinskaya</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">UI Designer</div>
            </div>
          </div>
        </div>
        <div cls="photos__card" class="team-card">
          <img
            src="@/assets/images/about/14.webp"
            alt=""
            cls="photos__card-img"
            class="team-card-img"
          />
          <div cls="photos__card-info" class="team-card-info">
            <div cls="photos__card-name">Vladimir <span>Savichev</span></div>
            <div cls="photos__card-positions">
              <div cls="photos__card-position">Project manager</div>
            </div>
          </div>
        </div>
      </div>
      <div ref="scrollbar" cls="photos__carousels-scrollbar">
        <div ref="thumb" cls="photos__carousels-thumbnail" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.team-card {
  &.-vissible {
    transition: 0.3s ease-in-out;
    transform: scale(1.05);
    .team-card {
      &-img {
        transition: 0.45s ease-in-out;
        transform: scale(1.7) translateX(-50%) translateY(-15px);
      }
      &-info {
        transition: 0.5s ease-in-out;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>

<style lang="scss" module>
.photos {
  max-width: 1920px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;

  &__carousels {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 0;
    overflow: hidden;
    &-mob {
      display: none;
    }
    &-wrap {
      display: flex;
      gap: 24px;
      animation: scroll 30s linear infinite;
      &:hover {
        animation-play-state: paused !important;
      }
      &:nth-child(2) {
        animation: scroll 30s linear infinite reverse;
      }
    }
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
    &-box {
      display: flex;
      gap: 24px;
    }
    &-scrollbar {
      display: none;
    }
  }
  &__card {
    width: 280px;
    height: 368px;
    padding: 8px;
    flex-shrink: 0;
    border-radius: 24px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
    position: relative;
    &:hover {
      transform: scale(1.05);
      .photos {
        &__card {
          &-img {
            transform: scale(1.7) translateX(-50%) translateY(-15px);
          }
          &-info {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
    &-img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 0;
      transform-origin: left top;
      transform: scale(1) translateX(-50%);
      transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &-info {
      display: flex;
      width: 100%;
      padding: 16px;
      flex-direction: column;
      gap: 8px;
      border-radius: 16px;
      z-index: 1;
      border: 1px solid var(--White);
      background: linear-gradient(
        73deg,
        rgba(255, 255, 255, 0.2) 45.82%,
        rgba(255, 255, 255, 0.06) 137.11%
      );
      box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.06);
      backdrop-filter: blur(18px);
      transition: 1.3s cubic-bezier(0.19, 1, 0.22, 1);
      transform: translateY(-15px);
      transition-delay: 0.2s;
      opacity: 0;
    }
    &-positions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    &-position {
      border-radius: 48px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      padding: 5px 12px 7px 12px;
      justify-content: center;
      align-items: center;
      color: var(--White);
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 12px;
    }
    &-name {
      color: var(--White);
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: -0.96px;
      span {
        font-family: "Ramillas Trial";
        font-style: italic;
      }
    }
  }
}
@include mobile {
  .photos {
    padding: 16px 0 0;
    gap: 40px;
    &__top {
      &-title {
        max-width: 325px;
      }
    }
    &__carousels {
      padding: 16px 0 0;
      &-scrollbar {
        width: 50%;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        position: relative;
        margin: 4.5px auto;
      }
      &-thumbnail {
        height: 3px;
        background-color: var(--Black);
        border-radius: 2px;
        position: absolute;
      }
      &-wrap {
        display: none;
      }
      &-mob {
        display: flex;
        gap: 16px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        padding: 10px 16px;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    &__card {
      scroll-snap-align: center;
      pointer-events: none;
    }
  }
}
</style>
