<script setup lang="ts">
import type { MenuOption } from '@/types/menu'

const { t } = useI18n()
const levelList = ref<MenuOption[]>([])
const route = useRoute()
const router = useRouter()

onMounted(() => {
  getBreadcrumb()
})

watch(
  route,
  () => {
    getBreadcrumb()
  },
  { deep: true }
)

function getBreadcrumb() {
  let matched = route.matched.filter((item) => {
    return item.meta && item.meta.title
  }) as unknown as MenuOption[]
  const first = matched[0]
  if (!isDashboard(first)) {
    const dashboard: MenuOption = {
      path: '/dashboard',
      name: '/dashboard',
      meta: {
        title: 'menu.dashboard',
        icon: 'home',
      },
    }
    matched = [dashboard].concat(matched)
  }

  levelList.value = _cloneDeep(matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false))
  // console.log('matched: ', matched)

  levelList.value.forEach((item) => {
    if (item.meta) item.meta.title = t(item.meta.title)
  })
}

function isDashboard(route: MenuOption) {
  const name = route && route.name
  if (!name) return false

  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}
function handleLink(item: MenuOption) {
  const { redirect } = item
  if (redirect) router.push(redirect)

  // router.push(pathCompile(path))
}
</script>

<template>
  <div>
    <ElBreadcrumb separator="/" flex-y-center>
      <ElBreadcrumbItem v-for="(item, index) in levelList" :key="item.path">
        <div v-if="item.redirect === 'noRedirect' || index === levelList.length - 1" flex-y-center cursor-default>
          <!-- <pre>{{ item }}</pre> -->
          <template v-if="item?.meta?.icon">
            <Icon :name="item?.meta.icon" size="16" class="mr-1" />
          </template>
          {{ item?.meta?.title }}
        </div>
        <a v-else @click.prevent="handleLink(item)">{{ item?.meta?.title }}</a>
      </ElBreadcrumbItem>
    </ElBreadcrumb>
  </div>
</template>

<style scoped></style>
