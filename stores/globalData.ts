import { defineStore } from "pinia"

import type { Block2, Block2En } from "~/types/blockTypes"
import type { Contacts } from "~/types/contacts"
import type { Home } from "~/types/home"
import type { Footer, Header, Menu } from "~/types/menu-header-footer"

export const useGlobalData = defineStore("globaldata", () => {
  const { locale } = useI18n()
  const fetchState = ref(false)

  const handleLoader = (state?: boolean) => {
    if (state) {
      fetchState.value = state
    } else {
      fetchState.value = false
    }
  }

  // HEADER & FOOTER
  const footer = ref<Footer>()
  const header = ref<Header>()
  const menuHeaderFooter = ref<Menu>()
  const getMenuHeaderFooter = async () => {
    try {
      menuHeaderFooter.value = await $fetch("https://repin.agency/wp-json/api/v1/headerAndFooter")
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
      fetchState.value = true
    }
  }
  // HOME PAGE
  const home = ref<Home>()

  const getMainPageInfo = async () => {
    try {
      home.value = await $fetch("https://repin.agency/wp-json/api/v1/getHomePage")
    } catch (error) {
      console.log(error)
    } finally {
      fetchState.value = true
    }
  }

  // CONTACTS PAGE
  const contacts = ref<Contacts>()

  const getContactPageInfo = async () => {
    try {
      contacts.value = await $fetch("https://repin.agency/wp-json/api/v1/contacts")
    } catch (error) {
      console.log(error)
    } finally {
      fetchState.value = true
    }
  }
  // PRIVACY POLICY PAGE
  const privacyPolicy = ref<Block2En>()

  const getPrivacyPolicyPageInfo = async () => {
    try {
      const { en } = await $fetch<Block2>("https://repin.agency/wp-json/api/v1/privacy-policy")
      if (!en) return
      privacyPolicy.value = en
    } catch (error) {
      console.log(error)
    } finally {
      fetchState.value = true
    }
  }
  // OFFER AGREEMENT PAGE
  const offerAgreement = ref<Block2En>()

  const getOfferAgreementPageInfo = async () => {
    try {
      const { en } = await $fetch<Block2>("https://repin.agency/wp-json/api/v1/offer-agreement")
      if (!en) return
      offerAgreement.value = en
    } catch (error) {
      console.log(error)
    } finally {
      fetchState.value = true
    }
  }
  // OFFER AGREEMENT PAGE
  const cookiePrivacy = ref<Block2En>()

  const getCookiePrivacyPageInfo = async () => {
    try {
      const { en } = await $fetch<Block2>("https://repin.agency/wp-json/api/v1/cookie-privacy")
      if (!en) return
      cookiePrivacy.value = en
    } catch (error) {
      console.log(error)
    } finally {
      fetchState.value = true
    }
  }
  return {
    getMenuHeaderFooter,
    getMainPageInfo,
    getContactPageInfo,
    getPrivacyPolicyPageInfo,
    getOfferAgreementPageInfo,
    getCookiePrivacyPageInfo,
    handleLoader,
    header,
    footer,
    home,
    contacts,
    privacyPolicy,
    offerAgreement,
    cookiePrivacy,
    fetchState,
  }
})
