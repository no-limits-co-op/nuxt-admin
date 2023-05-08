export default defineNuxtRouteMiddleware((to, from) => {
  console.warn(to, from)
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // return navigateTo('/')
})
