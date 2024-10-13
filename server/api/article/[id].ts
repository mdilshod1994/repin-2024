import { joinURL } from "ufo"

import type { Blog } from "~/types/blog-case"

export default defineEventHandler(async (event) => {
  const proxyUrl = useRuntimeConfig().public.baseUrl
  const path = event.path.replace(/^\/api\//, "")
  const target = joinURL(proxyUrl, path)
  return await $fetch<Blog>(target)
})
