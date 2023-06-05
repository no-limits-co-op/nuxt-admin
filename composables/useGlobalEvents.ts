export default function useGlobalEvents() {
  const route = useRoute()
  const { locale, t } = useI18n()
  const scope = effectScope()
  const { websiteName } = useGlobalConfig()

  scope.run(() => {
    // 国际化切换时更新浏览器标签文本
    watch(
      () => locale.value,
      () => {
        if (route.meta.title) document.title = `${t(route?.meta?.title as string)} | ${websiteName}`
      }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })
}
