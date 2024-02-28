import vueCssModule from "vite-plugin-vue-css-module"

export default defineNuxtConfig({
  modules: ["nuxt-svgo"],
  css: ["@/styles/main.scss"],
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
})
