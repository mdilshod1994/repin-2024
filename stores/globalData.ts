import { defineStore } from "pinia"

import type { GlobalData } from "~/types"

export const useGlobalData = defineStore("globaldata", () => {
  const globalData = ref<GlobalData>()

  const setData = (data?: any) => (globalData.value = data)

  const getData = async () => {
    try {
      const res = await $fetch<GlobalData>("https://repin.agency/wp-json/api/v1/getHomePage")
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
