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
      title: "Repin agency",
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
