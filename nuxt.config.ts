import vueCssModule from "vite-plugin-vue-css-module"

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/partytown",
    "nuxt-svgo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            name: "English",
          },
          // {
          //   code: "ru",
          //   name: "Russian",
          // },
        ],
        defaultLocale: "en",
      },
    ],
    [
      "nuxt-delay-hydration",
      {
        delayHydration: {
          mode: "manual",
        },
      },
    ],
  ],
  css: ["@/styles/main.scss"],
  plugins: [
    {
      src: "~/plugins/use-scroll.ts",
    },
    { src: "~/plugins/gsap.client.ts" },
  ],
  vite: {
    plugins: [
      vueCssModule({
        attrName: "cls",
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/mixins";',
        },
      },
    },
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      script: [
        {
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(87539657, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
            });
          `,
          type: "text/javascript",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  svgo: {
    explicitImportsOnly: true,
  },
  features: {
    inlineStyles: false,
  },
  postcss: {
    plugins: {
      // предотвращает проблему с загрузкой шрифтов (с пробелами в имени) в прод-сборке
      cssnano: {
        preset: [
          "default",
          {
            normalizeUrl: false,
          },
        ],
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "https://api.repin.agency/wp-json/api/v1/",
    },
  },
})
