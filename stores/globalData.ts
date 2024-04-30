// Возможно данные стр будут загружены тут

import { defineStore } from "pinia"

import type { Footer, Header, Menu } from "~/types/menu-header-footer"

export const useGlobalData = defineStore("globaldata", () => {
  // HEADER & FOOTER
  const footer = ref<Footer>()
  const header = ref<Header>()

  const getMenuHeaderFooter = async () => {
    try {
      const { en } = await $fetch<Menu>("https://repin.agency/wp-json/api/v1/headerAndFooter")
      if (!en) return
      header.value = en.header
      footer.value = en.footer
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getMenuHeaderFooter,
    header,
    footer,
  }
})
