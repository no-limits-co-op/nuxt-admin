export interface MenuOption {
  name: string
  path: string
  children?: MenuOption[]
  meta?: MenuMeta
  redirect?: string
}

export interface MenuMeta {
  title: string
  icon: string
  breadcrumb?: boolean
}
