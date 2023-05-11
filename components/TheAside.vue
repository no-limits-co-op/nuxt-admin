<script setup>
const { asideCollapsed } = useAsideCollapsed()
const route = useRoute()
const activeMenu = ref(route.path)
const { menuList, websiteName, websiteShortName } = useAppConfig()

const name = computed(() => {
  return asideCollapsed.value ? websiteShortName : websiteName
})
</script>

<template>
  <ClientOnly>
    <ElMenu
      h-full
      w-60
      :default-active="activeMenu"
      :router="true"
      :collapse="asideCollapsed"
    >
      <a href="/" w-full h-56px flex items-center justify-center>
        {{ name }}
      </a>
      <ElScrollbar max-height="calc(100% - 56px)" always>
        <template v-for="item in menuList" :key="item.name">
          <ElSubMenu v-if="item.children" :index="item.path" :title="item.name">
            <template #title>
              <Icon mr-2 size="20" :name="item.icon" />
              <span>{{ item.name }}</span>
            </template>
            <ElMenuItem v-for="_item in item.children" :key="_item.name" :index="_item.path">
              <template #title>
                <template v-if="_item.icon">
                  <Icon mr-2 size="20" :name="_item.icon" />
                </template>
                {{ _item.name }}
              </template>
            </ElMenuItem>
          </ElSubMenu>
          <ElMenuItem v-else :index="item.path">
            <template #title>
              <template v-if="item.icon">
                <Icon mr-2 size="20" :name="item.icon" />
              </template>
              {{ item.name }}
            </template>
          </ElMenuItem>
        </template>
      </ElScrollbar>
    </ElMenu>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: unset !important;

  &.el-menu--collapse {
    :deep(.el-sub-menu__icon-arrow) {
      display: none;
    }

    .el-scrollbar {
      .el-scrollbar__wrap {
        .el-scrollbar__view {
          > .el-sub-menu {
            > .el-sub-menu__title {
              .icon {
                margin-right: 0;
                min-width: 20px;
              }

              > span {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
