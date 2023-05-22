export default defineAppConfig({
  title: 'Nuxt3 Admin',
  menuList: [
    {
      name: 'menu.dashboard',
      icon: 'uil:calculator-alt',
      path: '/dashboard',
      children: [
        {
          name: 'menu.analysis',
          path: '/dashboard/analysis',
        },
        {
          name: 'menu.workbench',
          path: '/dashboard/workbench',
        },
      ],
    },
    {
      name: 'menu.exception',
      icon: 'ic:baseline-nearby-error',
      path: '/error',
      children: [
        {
          name: 'menu.exception403',
          path: '/error/403',
        },
        {
          name: 'menu.exception404',
          path: '/error/404',
        },
        {
          name: 'menu.exception500',
          path: '/error/500',
        },
      ],
    },
    {
      name: 'menu.system',
      icon: 'ic:outline-settings',
      path: '/system',
      children: [
        {
          name: 'menu.user',
          path: '/system/user',
        },
        {
          name: 'menu.role',
          path: '/system/role',
        },
        {
          name: 'menu.permission',
          path: '/system/permission',
        },
      ],
    },
    {
      name: 'menu.about',
      icon: 'ic:twotone-sports-gymnastics',
      path: '/about',
    },
  ],

  websiteName: 'NAE Admin',
  websiteShortName: 'NAE',
})
