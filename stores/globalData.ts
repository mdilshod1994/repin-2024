import { defineStore } from "pinia"

import type { Block2, Block2En } from "~/types/blockTypes"
import type { Contacts } from "~/types/contacts"
import type { Home } from "~/types/home"
import type { Footer, Header, Menu } from "~/types/menu-header-footer"

export const useGlobalData = defineStore("globaldata", () => {
  const { locale } = useI18n()
  const store = usePreloaderTrigger()
  const footer = ref<Footer>()
  const header = ref<Header>()
  const menuHeaderFooter = ref<Menu>()
  const getMenuHeaderFooter = async () => {
    try {
      menuHeaderFooter.value = await $fetch(
        "https://api.repin.agency/wp-json/api/v1/headerAndFooter",
      )
      if (!menuHeaderFooter.value) return
      if (locale.value === "en") {
        header.value = menuHeaderFooter.value.en.header
        footer.value = menuHeaderFooter.value.en.footer
      } else {
        header.value = menuHeaderFooter.value.ru.header
        footer.value = menuHeaderFooter.value.ru.footer
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
  // HOME PAGE
  const home = ref<Home>()

  const getMainPageInfo = async () => {
    try {
      home.value = await $fetch("https://api.repin.agency/wp-json/api/v1/getHomePage")
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  // CONTACTS PAGE
  const contacts = ref<Contacts>()

  const getContactPageInfo = async () => {
    try {
      contacts.value = await $fetch("https://api.repin.agency/wp-json/api/v1/contacts")
      if (contacts.value) {
        store.handlePreloader(true)
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
  // PRIVACY POLICY PAGE
  const privacyPolicy = ref<Block2En>()

  const getPrivacyPolicyPageInfo = async () => {
    try {
      const data = await $fetch<Block2>("https://api.repin.agency/wp-json/api/v1/privacy-policy")
      if (!data) return
      store.handlePreloader(true)
      if (locale.value === "en") {
        privacyPolicy.value = data.en
      } else {
        privacyPolicy.value = data.ru
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
  // OFFER AGREEMENT PAGE
  const offerAgreement = ref<Block2En>()

  const getOfferAgreementPageInfo = async () => {
    try {
      const data = await $fetch<Block2>("https://api.repin.agency/wp-json/api/v1/offer-agreement")
      if (!data) return
      store.handlePreloader(true)
      if (locale.value === "en") {
        offerAgreement.value = data.en
      } else {
        offerAgreement.value = data.ru
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
  // OFFER AGREEMENT PAGE
  const cookiePrivacy = ref<Block2En>()

  const getCookiePrivacyPageInfo = async () => {
    try {
      const data = await $fetch<Block2>("https://api.repin.agency/wp-json/api/v1/cookie-privacy")
      if (!data) return
      store.handlePreloader(true)
      if (locale.value === "en") {
        cookiePrivacy.value = data.en
      } else {
        cookiePrivacy.value = data.ru
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
  return {
    getMenuHeaderFooter,
    getMainPageInfo,
    getContactPageInfo,
    getPrivacyPolicyPageInfo,
    getOfferAgreementPageInfo,
    getCookiePrivacyPageInfo,
    header,
    footer,
    home,
    contacts,
    privacyPolicy,
    offerAgreement,
    cookiePrivacy,
  }
})
