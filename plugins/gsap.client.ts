import { useHead } from "@vueuse/head"

import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  useHead({
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/gsap.min.js",
        async: true,
        onload: () => {
          console.log("GSAP loaded:", window.gsap)
          if (window.gsap) {
            nuxtApp.provide("gsap", window.gsap)
          } else {
            console.error("GSAP is not available on window object.")
          }
        },
        onerror: () => {
          console.error("Failed to load GSAP from CDN")
        },
      },
      {
        src: "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js",
        async: true,
        onload: () => {
          console.log("ScrollTrigger loaded:", window.ScrollTrigger)
          if (window.ScrollTrigger) {
            nuxtApp.provide("ScrollTrigger", window.ScrollTrigger)
          } else {
            console.error("ScrollTrigger is not available on window object.")
          }
        },
        onerror: () => {
          console.error("Failed to load ScrollTrigger from CDN")
        },
      },
    ],
  })
})
