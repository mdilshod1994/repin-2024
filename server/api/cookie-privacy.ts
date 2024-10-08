import { joinURL } from "ufo"

import type { Block2 } from "~/types/blockTypes"

export default defineEventHandler(async (event) => {
  const proxyUrl = useRuntimeConfig().public.baseUrl
  const path = event.path.replace(/^\/api\//, "")
  const target = joinURL(proxyUrl, path)
  return await $fetch<Block2>(target)
})
