import { defineStore } from "pinia"

export const usePreloaderTrigger = defineStore("loader-trigger", () => {
  const i = ref(0)
  const width = ref(0)
  const count = ref(0)
  const id = ref()
  function handlePreloader(data?: boolean) {
    const body = document.querySelector("body")
    if (i.value == 0 && !data) {
      i.value = 1
      body?.classList.add("lock")
      width.value = 1
      setTimeout(() => {
        id.value = setInterval(frame, 100)
      }, 700)
      function frame() {
        width.value += Math.floor(Math.random() * 5)
        if (width.value >= 81) {
          clearInterval(id.value)
        }
      }
    } else {
      clearInterval(id.value)
      width.value = 100
      setTimeout(() => {
        i.value = 0
        count.value++
        width.value = 0
      }, 700)
    }
  }
  return {
    handlePreloader,
    width,
    count,
    i,
  }
})
