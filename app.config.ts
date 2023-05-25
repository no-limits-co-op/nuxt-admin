export default defineAppConfig({
  title: 'Nuxt3 Admin',
  menuList: [
    {
      name: 'menu.dashboard',
      icon: 'uil:calculator-alt',
      path: '/dashboard',
      children: [
        {
          icon: 'vaadin:pie-bar-chart',
          name: 'menu.analysis',
          path: '/dashboard/analysis',
        },
        {
          icon: 'vaadin:desktop',
          name: 'menu.workbench',
          path: '/dashboard/workbench',
        },
      ],
    },
    {
      name: 'menu.exception',
      icon: 'bi:exclamation-diamond-fill',
      path: '/error',
      children: [
        {
          icon: 'bi:database-lock',
          name: 'menu.exception403',
          path: '/error/403',
        },
        {
          icon: 'bi:database-slash',
          name: 'menu.exception404',
          path: '/error/404',
        },
        {
          icon: 'bi:exclamation-diamond',
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
          icon: 'bi:person',
          name: 'menu.user',
          path: '/system/user',
        },
        {
          icon: 'bi:person-rolodex',
          name: 'menu.role',
          path: '/system/role',
        },
        {
          icon: 'bi:person-plus',
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
