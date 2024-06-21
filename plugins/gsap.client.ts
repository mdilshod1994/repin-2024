let gsapLoaded = false
let gsapScrollTriggerLoaded = false

function loadGsap() {
  if (gsapLoaded) {
    return Promise.resolve(window.gsap)
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
    script.onload = () => {
      gsapLoaded = true
      resolve(window.gsap)
    }
    script.onerror = () => reject(new Error("Failed to load GSAP script"))
    document.head.appendChild(script)
  })
}
function loadGsapScrollTrigger() {
  if (gsapScrollTriggerLoaded) {
    return Promise.resolve(window.ScrollTrigger)
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
    script.onload = () => {
      gsapScrollTriggerLoaded = true
      resolve(window.ScrollTrigger)
    }
    script.onerror = () => reject(new Error("Failed to load GSAP script"))
    document.head.appendChild(script)
  })
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const gsap = await loadGsap()
  nuxtApp.provide("gsap", gsap)
  const ScrollTrigger = await loadGsapScrollTrigger()
  nuxtApp.provide("ScrollTrigger", ScrollTrigger)
  gsap.registerPlugin(ScrollTrigger)
})
