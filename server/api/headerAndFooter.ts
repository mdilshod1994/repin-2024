import { joinURL } from "ufo"

import { Menu } from "~/types/menu-header-footer"

export default defineEventHandler(async (event) => {
  const proxyUrl = useRuntimeConfig().public.baseUrl
  const path = event.path.replace(/^\/api\//, "")
  const target = joinURL(proxyUrl, path)
  return await $fetch<Menu>(target)
})
