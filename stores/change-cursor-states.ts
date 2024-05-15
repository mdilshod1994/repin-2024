import { defineStore } from "pinia"

export const useChangeCursorState = defineStore("change-cursor-state", () => {
  const cursorType = ref<string>("")
  const arrowDirection = ref<string>("")
  const changeCursorType = (type: string) => {
    cursorType.value = type
  }
  const setArrowDirection = (direction: string) => {
    arrowDirection.value = direction
  }
  return {
    cursorType,
    arrowDirection,
    changeCursorType,
    setArrowDirection,
  }
})
