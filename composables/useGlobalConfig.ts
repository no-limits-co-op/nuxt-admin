import type { ButtonConfigContext, MessageConfigContext } from 'element-plus'
import type { Language } from 'element-plus/es/locales'
import { en, zhCn } from 'element-plus/es/locales'

export default function useGlobalConfig() {
  const asideCollapsed = useState<boolean>('asideCollapsed', () => false)
  const toggleAsideCollapsed = () => {
    asideCollapsed.value = !asideCollapsed.value
  }

  const { locale, setLocale } = useI18n()
  const elLocale = computed<Language>(() =>
    locale.value === 'en' ? { el: en, name: 'en' } : { el: zhCn, name: 'zh-cn' }
  )
  const toggleLanguage = (val: string) => {
    setLocale(val)
  }

  const buttonConfig = useState<ButtonConfigContext>('buttonConfig', () => ({
    autoInsertSpace: false,
  }))

  const messageConfig = useState<MessageConfigContext>('messageConfig', () => ({
    max: 5,
  }))

  const websiteName = 'NAE Admin'
  const websiteShortName = 'NAE'

  const colorMode = useColorMode()
  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
  }

  return {
    asideCollapsed,
    toggleAsideCollapsed,
    elLocale,
    toggleLanguage,
    buttonConfig,
    messageConfig,
    websiteName,
    websiteShortName,
    toggleTheme,
  }
}
