// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // build modules
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  app: {
    // head
    head: {
      title: 'Nuxt admin',
      titleTemplate: (title = '') => title !== 'nuxt admin' ? `${title} · nuxt admin` : title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nuxt 3 Element Plus',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: { lang: 'en' },
    },
  },

  build: {
    analyze: true,
  },

  // css
  css: [
    '~/assets/scss/preflight.css',
    '~/assets/scss/index.scss',
  ],

  // colorMode
  colorMode: {
    classSuffix: '',
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

  autoImports: ['defineStore', 'acceptHMRUpdate'],

  // unocss: {
  //   uno: true,
  //   attributify: true,
  //   icons: {
  //     scale: 1.2,
  //   },
  // },

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
          manualChunks(id) {
            if (id.includes('element-plus/theme-chalk/'))
              return 'element-plus'
          },
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:5000', // 后台地址
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
