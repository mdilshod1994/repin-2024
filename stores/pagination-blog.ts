import { defineStore } from "pinia"

export const useBlogPagination = defineStore(
  "blog",
  () => {
    const page = ref(1)
    const encrease = () => {
      page.value++
    }
    return {
      page,
      encrease,
    }
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  },
)
