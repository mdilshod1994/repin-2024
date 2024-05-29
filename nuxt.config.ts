import vueCssModule from "vite-plugin-vue-css-module"

export default defineNuxtConfig({
  modules: [
    "nuxt-svgo",
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "ru",
            name: "Russian",
          },
        ],
        defaultLocale: "en",
        strategy: "prefix_except_default",
      },
    ],
  ],
  css: ["@/styles/main.scss"],
  plugins: [
    {
      src: "~/plugins/use-scroll.ts",
      ssr: false,
      mode: "client",
    },
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
    },
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
      baseURL: process.env.BASE_URL || "https://repin.agency/wp-json/api/v1",
    },
  },
  build: {
    transpile: ["gsap"],
  },
})
