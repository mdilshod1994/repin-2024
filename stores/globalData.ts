// Возможно данные стр будут загружены тут

import { defineStore } from "pinia"

import type { Block2, Block2En } from "~/types/blockTypes"
import type { Contacts, Page } from "~/types/contacts"
import type { Home, HomeEn } from "~/types/home"
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
  // HOME PAGE
  const home = ref<HomeEn>()

  const getMainPageInfo = async () => {
    try {
      const { en } = await $fetch<Home>("https://repin.agency/wp-json/api/v1/getHomePage")
      if (!en) return
      home.value = en
    } catch (error) {
      console.log(error)
    }
  }

  // CONTACTS PAGE
  const contacts = ref<Page>()

  const getContactPageInfo = async () => {
    try {
      const { en } = await $fetch<Contacts>("https://repin.agency/wp-json/api/v1/contacts")
      if (!en) return
      contacts.value = en.page
    } catch (error) {
      console.log(error)
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
