import { useMediaQuery } from "@vueuse/core"

const isSmallScreen = useMediaQuery("(max-width: 1024px)")
let scrollPosition = 0
export const useScrollLock = (state: boolean) => {
  const body = document.querySelector("body") as HTMLElement
  const disable = () => {
    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = "0px"
    body.style.width = "100%"
  }
  const enable = () => {
    body.style.removeProperty("overflow")
    body.style.removeProperty("position")
    body.style.removeProperty("top")
    body.style.removeProperty("width")
  }
  if (isSmallScreen.value) {
    if (state) {
      scrollPosition = window.pageYOffset
      disable()
    } else {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition)
      }, 100)
      enable()
    }
  } else {
    if (state) {
      body.style.overflow = "hidden"
    } else {
      body.style.removeProperty("overflow")
    }
  }
}
