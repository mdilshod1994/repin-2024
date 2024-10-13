import { joinURL } from "ufo"

import type { Blogs } from "~/types/blog"

export default defineEventHandler(async (event) => {
  const proxyUrl = useRuntimeConfig().public.baseUrl
  const path = event.path.replace(/^\/api\//, "")
  const target = joinURL(proxyUrl, path)
  return await $fetch<Blogs>(target)
})
