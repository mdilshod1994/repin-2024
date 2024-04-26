import { defineStore } from "pinia"

import type { GlobalData } from "~/types/globaldata"

export const useGlobalData = defineStore("globaldata", () => {
  const globalData = ref<GlobalData>()
  const setData = (data?: any) => (globalData.value = data)

  const getData = async () => {
    try {
      const res = await $fetch<GlobalData>("https://repin.agency/wp-json/api/v1/projects/all/0")
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getData,
    globalData,
  }
})
