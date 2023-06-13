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
  content: {
    pipeline: {
      exclude: ['node_modules', '.git', '.vscode', 'public', './stats.html'],
    },
  },
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['flex-center', 'flex items-center justify-center'],
    ['flex-col-center', 'flex-center flex-col'],
    ['flex-x-center', 'flex justify-center'],
    ['flex-y-center', 'flex items-center'],
    ['flex-col', 'flex flex-col'],
    // ['n-link', 'op50 hover:(op100 text-primary) transition'],
    // ['n-link-text', 'n-link underline'],
    // ['n-tab', 'text-xl tracking-wide uppercase p3 border-b-2 border-transparent op20 transition'],
    // ['n-tab-active', 'border-current op100'],
    ['pointer', 'cursor-pointer'],
    ['bg-fill-3', 'bg-$bg-fill-3'],
  ],
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
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
