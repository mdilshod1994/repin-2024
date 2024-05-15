export const useMousemove = () => {
  const store = useChangeCursorState()

  const position = ref({ x: 0, y: 0 })

  const updatePosition = (event: any) => {
    position.value.x = event.clientX
    position.value.y = event.clientY
    const body = document.querySelector("body") as HTMLElement
    const halfScreen = body.clientWidth / 2
    if (event.pageX > halfScreen) {
      store.setArrowDirection("right")
    } else {
      store.setArrowDirection("left")
    }
  }

  const updateType = (type: string) => {
    if (type) {
      store.changeCursorType(type)
    } else {
      store.changeCursorType("")
    }
  }

  onMounted(() => document.addEventListener("mousemove", updatePosition))
  onUnmounted(() => document.removeEventListener("mousemove", updatePosition))
  return { position, updateType }
}
