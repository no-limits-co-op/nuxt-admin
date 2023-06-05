import type { ButtonConfigContext, MessageConfigContext } from 'element-plus'
import type { Language } from 'element-plus/es/locales'
import { en, zhCn } from 'element-plus/es/locales'

export default function useGlobalConfig() {
  const asideCollapsed = useState<boolean>('asideCollapsed', () => false)
  const toggleAsideCollapsed = () => {
    asideCollapsed.value = !asideCollapsed.value
  }

  const language = useState<string>('language', () => 'zh-cn')
  const locale = computed<Language>(() =>
    language.value === 'en' ? { el: en, name: 'en' } : { el: zhCn, name: 'zh-cn' }
  )
  const toggleLanguage = () => {
    language.value = language.value === 'en' ? 'zh-cn' : 'en'
  }

  const buttonConfig = useState<ButtonConfigContext>('buttonConfig', () => ({
    autoInsertSpace: false,
  }))

  const messageConfig = useState<MessageConfigContext>('messageConfig', () => ({
    max: 5,
  }))

  const websiteName = 'NAE Admin'
  const websiteShortName = 'NAE'

  return {
    asideCollapsed,
    toggleAsideCollapsed,
    language,
    locale,
    toggleLanguage,
    buttonConfig,
    messageConfig,
    websiteName,
    websiteShortName,
  }
}
