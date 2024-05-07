import { useScroll } from "@vueuse/core"

export default defineNuxtPlugin(() => {
  const { isScrolling, directions, arrivedState } = useScroll(window)
  return {
    provide: {
      useScroll: () => {
        return {
          isScrolling,
          directions,
          arrivedState,
        }
      },
    },
  }
})
