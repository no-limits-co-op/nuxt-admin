import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// @unocss-include

export default defineConfig({
  exclude: ['node_modules', '.git', '.vscode', 'public', './stats.html'],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['flex-center', 'flex items-center justify-center'],
    // ['n-link', 'op50 hover:(op100 text-primary) transition'],
    // ['n-link-text', 'n-link underline'],
    // ['n-tab', 'text-xl tracking-wide uppercase p3 border-b-2 border-transparent op20 transition'],
    // ['n-tab-active', 'border-current op100'],
    ['border-base', 'border-gray-400/20'],
    ['pointer', 'cursor-pointer'],
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--el-color-primary))',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        'pingfang-sc': 'PingFang SC',
        'sans': 'DM Sans',
        'serif': 'DM Serif Display',
        'mono': 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
