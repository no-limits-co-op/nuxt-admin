<script setup lang="ts">
const { packageInfos } = usePackageInfos()
const { isFullscreen, toggle } = useFullscreen()
const { t, locale, locales } = useI18n()
// TODO：有点恶心人
const localeList = locales as Ref<Array<{ name: string; code: string }>>
const { asideCollapsed, toggleAsideCollapsed, toggleTheme, toggleLanguage } = useGlobalConfig()
const router = useRouter()

const tooltipHideAfter = ref(0)
const fullscreen = computed(() =>
  isFullscreen.value ? t('websiteHeader.exitFullScreen') : t('websiteHeader.fullScreen')
)

function onCommand(command: string) {
  if (command === 'userCenter') {
    router.replace('/login')
  } else if (command === 'logout') {
    ElMessageBox.confirm(t('logoutConfirm.content'), 'Warning', {
      confirmButtonText: t('common.yes'),
      cancelButtonText: t('common.no'),
      type: 'warning',
      title: t('common.tip'),
      autofocus: false,
      draggable: true,
    }).then(() => {
      router.replace('/login')
    })
  }
}
</script>

<template>
  <div class="nuxt-admin-header">
    <div h-full flex-y-center>
      <div h-full w-10 flex-center pointer @click="toggleAsideCollapsed">
        <Icon v-if="asideCollapsed" name="mdi:arrow-collapse-right" size="24" />
        <Icon v-else name="mdi:arrow-collapse-left" size="24" />
      </div>
      <LayoutHeaderBreadCrumb />
    </div>
    <div class="nuxt-admin-header__operation">
      <ClientOnly>
        <ElTooltip :content="$t('websiteHeader.github')" :hide-after="tooltipHideAfter">
          <NuxtLink class="operation-item" :external="true" target="_blank" :to="packageInfos.repository.url">
            <Icon name="uil:github" size="20" />
          </NuxtLink>
        </ElTooltip>
        <ElTooltip :hide-after="tooltipHideAfter" :content="fullscreen">
          <div class="operation-item" @click="toggle">
            <Icon v-if="isFullscreen" name="solar:quit-full-screen-outline" size="20" />
            <Icon v-else name="solar:full-screen-bold" size="20" />
          </div>
        </ElTooltip>
        <ElTooltip :content="$t('websiteHeader.themeMode')" :hide-after="tooltipHideAfter">
          <div class="operation-item" @click="toggleTheme">
            <Icon name="solar:sun-2-bold" size="20" />
            <!-- <Icon name="solar:moon-bold" size="20" /> -->
          </div>
        </ElTooltip>

        <el-dropdown class="operation-item" @command="toggleLanguage">
          <div class="focus-visited-none" wh-full flex-center>
            <IconLocale />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <template v-for="item in localeList" :key="item.code">
                <el-dropdown-item :command="item.code" :class="{ selected: locale === item.code }">
                  {{ item.name }}
                </el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <ElTooltip :content="$t('websiteHeader.notification')" :hide-after="tooltipHideAfter">
          <LayoutHeaderNavMessage class="operation-item" />
        </ElTooltip>
        <el-dropdown class="operation-item user" @command="onCommand">
          <div class="focus-visited-none user-info">
            <img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              alt="用户头像"
              width="32"
              height="32"
              rd="1/2"
              object-cover
            />
            <!-- <Icon name="fluent-emoji-flat:boy-light" size="32" border-base border-1 rd="1/2" /> -->
            <span class="username"> NuxtAdmin </span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="userCenter">
                <Icon name="carbon:user-avatar-filled-alt" size="20" mr-1 />
                {{ $t('websiteHeader.userCenter') }}
              </el-dropdown-item>
              <el-dropdown-item divided command="logout">
                <Icon name="mingcute:exit-line" size="20" mr-1 />
                {{ $t('websiteHeader.logout') }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-dropdown-menu__item) {
  &.selected {
    color: var(--el-dropdown-menuItem-hover-color);
  }
}
.nuxt-admin-header {
  @apply wh-full flex-y-center justify-between;

  &__operation {
    @apply h-full flex-y-center pointer;

    :deep(.focus-visited-none) {
      &:focus-visible {
        outline: none;
      }
    }

    .operation-item {
      @apply w-10 h-full flex-center pointer;
      transition: all 0.1s ease-in-out;

      &.user {
        @apply w-auto;

        .user-info {
          @apply h-full flex-y-center px-4;

          &:focus-visible {
            outline: none;
          }

          .username {
            @apply ml-1;
          }
        }
      }

      &:hover {
        background-color: var(--hover-bg-color);
      }
    }
  }
}
</style>
