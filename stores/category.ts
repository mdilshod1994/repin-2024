import { defineStore } from "pinia"

export const useCategory = defineStore("category", () => {
  const category = ref("")

  const setActiveCategory = (ctgry: string) => {
    category.value = ctgry
  }

  const activeCategory = computed(() => (category.value ? category.value : "all"))

  return {
    activeCategory,
    setActiveCategory,
  }
})
