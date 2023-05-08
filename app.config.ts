export default defineAppConfig({
  title: 'Nuxt3 Admin',
  menuList: [
    {
      name: '仪表盘',
      icon: 'uil:calculator-alt',
      path: '/dashboard',
      children: [
        {
          name: '分析页',
          path: '/dashboard/analysis',
        },
        {
          name: '工作台',
          path: '/dashboard/workbench',
        },
      ],
    },
    {
      name: '异常页',
      icon: 'ic:baseline-nearby-error',
      path: '/error',
      children: [
        {
          name: '异常页403',
          path: '/error/403',
        },
        {
          name: '异常页404',
          path: '/error/404',
        },
        {
          name: '异常页500',
          path: '/error/500',
        },
      ],
    },
    {
      name: '系统管理',
      icon: 'ic:outline-settings',
      path: '/system',
      children: [
        {
          name: '用户管理',
          path: '/system/user',
        },
        {
          name: '角色管理',
          path: '/system/role',
        },
        {
          name: '权限管理',
          path: '/system/permission',
        },
      ],
    },
    {
      name: '关于',
      icon: 'ic:twotone-sports-gymnastics',
      path: '/about',
    },
  ],
})
