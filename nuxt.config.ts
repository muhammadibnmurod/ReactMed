// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    [
      "@nuxtjs/color-mode",
      {
        preference: "system",
        fallback: "light",
        classSuffix: "",
      },
    ],
    "nuxt-svgo",
  ],

  devServer: {
    host: "*",
    port: 3000,
  },

  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },
    { path: "~/components/layout", pathPrefix: false },
  ],

  i18n: {
    strategy: "no_prefix",
    langDir: "../locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "uz",
      alwaysRedirect: true,
    },
    locales: [
      { code: "uz", file: "uz/uz-UZ.json", language: "uz" },
      { code: "uz-cyr", file: "uz-cyr/cr-CR.json", language: "uz-cyr" },
      { code: "ru", file: "ru/ru-RU.json", language: "ru" },
      { code: "en", file: "en/en-EN.json", language: "en" },
    ],
    defaultLocale: "uz",
  },

  ssr: false,

  svgo: {
    componentPrefix: "icon",
    autoImportPath: "./assets/icon/",
    defaultImport: "component",
    svgoConfig: {
      multipass: false, // Отключаем многоходовую оптимизацию
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // Отключаем ВСЕ плагины оптимизации
              removeDoctype: false,
              removeXMLProcInst: false,
              removeComments: false,
              removeMetadata: false,
              removeEditorsNSData: false,
              cleanupIds: false,
              convertColors: false,
              convertPathData: false,
              convertTransform: false,
              removeUnknownsAndDefaults: false,
              removeNonInheritableGroupAttrs: false,
              removeUselessStrokeAndFill: false,
              removeUnusedNS: false,
              cleanupNumericValues: false,
              moveElemsAttrsToGroup: false,
              moveGroupAttrsToElems: false,
              collapseGroups: false,
              mergePaths: false,
              convertShapeToPath: false,
              sortAttrs: false,
              removeTitle: false,
              removeDesc: false,
              removeEmptyContainers: false,
              removeViewBox: false,
              cleanupEnableBackground: false,
              removeHiddenElems: false,
              removeEmptyText: false,
              inlineStyles: false,
              minifyStyles: false,
            },
          },
        },
      ],
    },
  },

  app: {
    head: {
      title: "Infra-Kiosk",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "description", content: "NBT - Next Big Thing" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    autoImport: true,
  },

  css: ["@/assets/css/global.css"],

  tailwindcss: {
    // Options
  },
});
