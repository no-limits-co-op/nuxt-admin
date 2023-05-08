<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen()
const { asideCollapsed, toggleAsideCollapsed } = useAsideCollapsed()
const router = useRouter()
function onCommand(command: string) {
  if (command === 'userCenter') {
    router.replace('/login')
  }
  else if (command === 'logout') {
    ElMessageBox.confirm(
      '您确认要退出登录吗？',
      'Warning',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        title: '提示',
        autofocus: false,
        draggable: true,
      },
    )
      .then(() => {
        router.replace('/login')
      })
  }
}
</script>

<template>
  <div class="nuxt-admin-header">
    <div flex items-center h-full>
      <div w-10 h-full flex items-center justify-center cursor-pointer @click="toggleAsideCollapsed">
        <Icon v-if="asideCollapsed" name="mdi:arrow-collapse-right" size="24" />
        <Icon v-else name="mdi:arrow-collapse-left" size="24" />
      </div>
      面包屑导航
    </div>
    <div class="nuxt-admin-header__operation">
      <ClientOnly>
        <el-tooltip content="github">
          <NuxtLink class="operation-item" to="/">
            <Icon name="uil:github" size="20" />
          </NuxtLink>
        </el-tooltip>
        <el-tooltip content="fullscreen">
          <div class="operation-item" @click="toggle">
            <Icon v-if="isFullscreen" name="solar:quit-full-screen-outline" size="20" />
            <Icon v-else name="solar:full-screen-bold" size="20" />
          </div>
        </el-tooltip>
        <el-tooltip content="主题模式">
          <div class="operation-item">
            <Icon name="solar:sun-2-bold" size="20" />
            <!-- <Icon name="solar:moon-bold" size="20" /> -->
          </div>
        </el-tooltip>
        <el-tooltip content="消息通知">
          <div class="operation-item">
            <el-badge :value="200" :max="99">
              <Icon name="solar:bell-outline" size="20" />
            </el-badge>
          </div>
        </el-tooltip>
        <el-dropdown class="operation-item user" @command="onCommand">
          <div class="user-info">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="用户头像" width="32" height="32" rd="1/2" object-cover>
            <span class="username">
              NuxtAdmin
            </span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="userCenter">
                <Icon name="carbon:user-avatar-filled-alt" size="20" mr-1 />
                用户中心
              </el-dropdown-item>
              <el-dropdown-item divided command="logout">
                <Icon name="mingcute:exit-line" size="20" mr-1 />
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nuxt-admin-header {
  @apply w-full h-full flex items-center justify-between;

  &__operation {
    @apply h-full flex items-center;

    .operation-item {
      @apply w-10 h-full flex items-center justify-center cursor-pointer;
      transition: all 0.1s ease-in-out;

      &.user {
        @apply w-auto;

        &:focus-visible {
          outline: none;
        }

        .user-info {
          @apply h-full flex items-center px-4;

          &:focus-visible {
            outline: none;
          }

          .username {
            @apply ml-1;
          }
        }
      }

      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
