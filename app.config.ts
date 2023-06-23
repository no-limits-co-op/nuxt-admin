import type { MenuOption } from '@/types/menu'

export default defineAppConfig({
  title: 'Nuxt3 Admin',
  menuList: [
    {
      name: 'dashboard',
      path: '/dashboard',
      redirect: 'dashboard-analysis',
      meta: {
        title: 'menu.dashboard',
        icon: 'uil:calculator-alt',
      },
      children: [
        {
          name: 'dashboard-analysis',
          path: '/dashboard/analysis',
          meta: {
            icon: 'vaadin:pie-bar-chart',
            title: 'menu.analysis',
          },
        },
        {
          name: 'dashboard-workbench',
          path: '/dashboard/workbench',
          meta: {
            icon: 'vaadin:desktop',
            title: 'menu.workbench',
          },
        },
      ],
    },
    {
      name: 'exception',
      path: '/error',
      redirect: 'exception-403',
      meta: {
        icon: 'bi:exclamation-diamond-fill',
        title: 'menu.exception',
      },
      children: [
        {
          name: 'exception-403',
          path: '/error/403',
          meta: {
            icon: 'bi:database-lock',
            title: 'menu.exception403',
          },
        },
        {
          name: 'exception-404',
          path: '/error/404',
          meta: {
            icon: 'bi:database-slash',
            title: 'menu.exception404',
          },
        },
        {
          name: 'exception-500',
          path: '/error/500',
          meta: {
            icon: 'bi:exclamation-diamond',
            title: 'menu.exception500',
          },
        },
      ],
    },
    {
      name: 'system',
      path: '/system',
      redirect: 'system-suer',
      meta: {
        icon: 'ic:outline-settings',
        title: 'menu.system',
      },
      children: [
        {
          name: 'system-user',
          path: '/system/user',
          meta: {
            icon: 'bi:person',
            title: 'menu.user',
          },
        },
        {
          name: 'system-role',
          path: '/system/role',
          meta: {
            icon: 'bi:person-rolodex',
            title: 'menu.role',
          },
        },
        {
          name: 'system-permission',
          path: '/system/permission',
          meta: {
            icon: 'bi:person-plus',
            title: 'menu.permission',
          },
        },
      ],
    },
    {
      name: 'about',
      path: '/about',
      meta: {
        icon: 'ic:twotone-sports-gymnastics',
        title: 'menu.about',
      },
    },
    {
      name: 'markdown',
      path: '/markdown',
      meta: {
        icon: 'teenyicons:markdown-outline',
        title: 'menu.markdown',
      },
      redirect: 'markdown-editor',
      children: [
        {
          name: 'markdown-editor',
          path: '/markdown/editor',
          meta: {
            icon: 'file-icons:rmarkdown',
            title: 'menu.markdownEditor',
          },
        },
        {
          name: 'markdown-preview',
          path: '/markdown/preview',
          meta: {
            icon: 'ant-design:file-markdown-outlined',
            title: 'menu.markdownPreview',
          },
        },
      ],
    },
  ] as MenuOption[],
})
