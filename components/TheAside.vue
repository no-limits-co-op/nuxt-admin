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
  <div class="aside-menu">
    <a href="/" w-full h-56px flex items-center justify-center>
      {{ name }}
    </a>
    <ClientOnly>
      <ElMenu
        w-60
        :default-active="activeMenu"
        :router="true"
        :collapse="asideCollapsed"
      >
        <ElScrollbar max-height="100%" always>
          <template v-for="item in menuList" :key="item.name">
            <ElSubMenu v-if="item.children" :index="item.path" :title="item.name">
              <template #title>
                <Icon class="el-icon" mr-2 size="20" :name="item.icon" />
                <span>{{ item.name }}</span>
              </template>
              <ElMenuItem v-for="_item in item.children" :key="_item.name" :index="_item.path">
                <template v-if="_item.icon">
                  <Icon class="el-icon" mr-2 size="20" :name="_item.icon" />
                </template>
                <template #title>
                  {{ _item.name }}
                </template>
              </ElMenuItem>
            </ElSubMenu>
            <ElMenuItem v-else :index="item.path">
              <template v-if="item.icon">
                <Icon class="el-icon" mr-2 size="20" :name="item.icon" />
              </template>
              <template #title>
                {{ item.name }}
              </template>
            </ElMenuItem>
          </template>
        </ElScrollbar>
      </ElMenu>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.aside-menu {
  height: 100%;
  .el-menu {
    border-right: unset !important;
    height: calc(100% - 56px);
    overflow-y: hidden;

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
                }

                > span {
                  display: none;
                }
              }
            }

            > .el-menu-item {
              > .el-menu-tooltip__trigger {
                .icon {
                  margin-right: 0;
                  font-size: 18px;
                  width: var(--el-menu-icon-width);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
