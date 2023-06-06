<script setup>
const { asideCollapsed, websiteName, websiteShortName } = useGlobalConfig()
const route = useRoute()
const activeMenu = ref(route.path)
const { menuList } = useAppConfig()

const name = computed(() => {
  return asideCollapsed.value ? websiteShortName : websiteName
})
</script>

<template>
  <div class="aside-menu">
    <a href="/" h-56px w-full flex-center>
      {{ name }}
    </a>
    <ClientOnly>
      <ElMenu w-60 :default-active="activeMenu" :router="true" :collapse="asideCollapsed">
        <ElScrollbar max-height="100%" always>
          <template v-for="item in menuList" :key="item.name">
            <ElSubMenu v-if="item.children" :index="item.path" :title="$t(item.meta.title)">
              <template #title>
                <Icon class="el-icon" mr-2 size="20" :name="item.meta.icon" />
                <span>{{ $t(item.meta.title) }}</span>
              </template>
              <ElMenuItem v-for="_item in item.children" :key="_item.name" :index="_item.path">
                <template v-if="_item.meta.icon">
                  <Icon class="el-icon" mr-2 size="20" :name="_item.meta.icon" />
                </template>
                <template #title>
                  {{ $t(_item.meta.title) }}
                </template>
              </ElMenuItem>
            </ElSubMenu>
            <ElMenuItem v-else :index="item.path">
              <template v-if="item.meta.icon">
                <Icon class="el-icon" mr-2 size="20" :name="item.meta.icon" />
              </template>
              <template #title>
                {{ $t(item.meta.title) }}
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
          }
        }
      }
    }

    :deep(.el-menu-item) {
      .icon {
        width: var(--el-menu-icon-width);
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
      }
    }
  }
}
</style>
