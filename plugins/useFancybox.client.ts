import "@fancyapps/ui/dist/fancybox/fancybox.css"

import { Fancybox } from "@fancyapps/ui"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("fancybox", Fancybox.bind("[data-fancybox]"))
})
