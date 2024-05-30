import { defineStore } from "pinia"

export const usePreloaderTrigger = defineStore("loader-trigger", () => {
  const dataIsload = ref(false)
  const videoIsload = ref(false)
  const handleLoadData = (data: boolean) => {
    if (data) {
      dataIsload.value = true
    }
  }
  const handleLoadVideo = (state: boolean) => {
    if (state) {
      videoIsload.value = true
    }
  }
  const finishLoader = () => {
    videoIsload.value = false
    dataIsload.value = false
  }
  return {
    dataIsload,
    videoIsload,
    handleLoadData,
    handleLoadVideo,
    finishLoader,
  }
})
