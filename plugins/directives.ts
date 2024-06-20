export default defineNuxtPlugin((nuxtApp) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  nuxtApp.vueApp.directive("parallax", {
    mounted(el) {
      $gsap.registerPlugin($ScrollTrigger)
      const img = el.querySelector("img")
      img.style.transform = `scale(1.2)`
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: true,
          pin: false,
        },
      })
      tl.fromTo(
        img,
        {
          yPercent: 11,
          ease: "none",
        },
        {
          yPercent: -11,
          ease: "none",
        },
      )
    },
  })
})
