// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // build modules
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-lodash',
  ],

  app: {
    // head
    head: {
      title: 'Nuxt admin',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nuxt 3 Element Plus',
        },
      ],
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/vditor@3.9.3/dist/index.css' },
      ],
      script: [
        {
          src: 'https://unpkg.com/vditor@3.9.3/dist/js/lute/lute.min.js',
          defer: true,
          id: 'vditorLuteScript',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  build: {
    analyze: true,
    transpile: ['echarts'], // 用 Babel 转译特定的依赖
  },

  // css
  css: ['~/assets/scss/preflight.css', '~/assets/scss/index.scss'],

  // colorMode
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    preference: 'light',
    storageKey: 'color-mode',
  },

  devServer: {
    port: 8889,
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },

  imports: {
    dirs: ['./stores'],
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'zh-cn',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'zh-cn',
        name: '中文',
        file: 'zh-cn.ts',
      },
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'zh-cn',
  },

  autoImports: ['defineStore', 'acceptHMRUpdate'],

  // unocss: {
  //   uno: true,
  //   attributify: true,
  //   icons: {
  //     scale: 1.2,
  //   },
  // },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/element/index.scss" as element;',
        },
      },
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('element-plus/theme-chalk/')) return 'element-plus'
          },
        },
      },
    },
  },

  // ssr: false,

  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:5000', // 后台地址
    },
  },

  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {
      scrollBehavior: () => ({ x: 0, y: 0 }),
    },
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  typescript: {
    strict: true,
  },
})
