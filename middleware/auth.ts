export default defineNuxtRouteMiddleware((to) => {
  // const { locale } = useI18n()

  if (to.params.id === '1')
    return abortNavigation()

  if (to.path !== '/')
    return navigateTo('/')
})
