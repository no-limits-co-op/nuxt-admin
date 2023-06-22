import Vditor from 'vditor'

export default function useVditor(options: Record<string, any> = {}) {
  const domRef = ref<HTMLElement>()
  const vditor = ref<Vditor>()
  const colorMode = useColorMode()

  const theme = computed(() => (colorMode.preference === 'dark' ? 'dark' : 'light'))

  const setCodeTheme = () => {
    Vditor.setCodeTheme(`solarized-${theme.value}`)
  }

  const setContentTheme = () => {
    Vditor.setContentTheme(theme.value, 'https://cdn.jsdelivr.net/npm/vditor@3.9.4/dist/css/content-theme')
  }

  const setTheme = () => {
    vditor?.value!.setTheme(theme.value === 'dark' ? 'dark' : 'classic')
  }

  const init = () => {
    if (domRef.value) {
      const opt = {
        theme: 'classic',
        mode: 'ir',
        toolbar: [
          // 'undo',
          // 'redo',
          'outline',
          '|',
          'headings',
          'bold',
          'italic',
          'strike',
          'table',
          '|',
          'list',
          'ordered-list',
          'check',
          'outdent',
          'indent',
          'emoji',
          '|',
          'link',
          'quote',
          'line',
          'code',
          'inline-code',
          'insert-before',
          'insert-after',
          '|',
          'upload',
          '|',
          'edit-mode',
          '|',
          'fullscreen',
          'preview',
          // {
          //   name: 'more',
          //   toolbar: ['both', 'code-theme', 'content-theme', 'export', 'outline', 'preview', 'devtools', 'info', 'help'],
          // },
        ],
        toolbarConfig: {
          pin: true,
          hide: false,
        },

        preview: {
          hljs: {
            defaultLang: '',
            style: 'dracula',
            lineNumber: true,
          },
        },
        ...options,
        ...{
          after: () => {
            setTheme()
            setContentTheme()
            setCodeTheme()
            options?.after()
          },
        },
      }

      vditor.value = new Vditor(domRef.value, opt as Record<string, any>)
    }
  }

  const scope = effectScope()

  scope.run(() => {
    init()

    watch(
      () => colorMode.preference,
      () => {
        setTheme()
        setCodeTheme()
        setContentTheme()
      }
    )

    watch(
      () => domRef.value,
      () => {
        init()
      }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })

  return {
    domRef,
    vditor,
  }
}
