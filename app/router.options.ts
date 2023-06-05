import type { RouterConfig } from '@nuxt/schema'

// 自定义路由配置
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [..._routes],
}
