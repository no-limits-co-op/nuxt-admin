<template>
  <ElContainer class="nuxt-admin-container">
    <ElAside class="nuxt-admin__aside-wrap" width="fitcontent">
      <LayoutTheAside />
    </ElAside>
    <ElContainer class="nuxt-admin__body">
      <ElHeader class="nuxt-admin__header-wrap" height="56px">
        <LayoutTheHeader />
      </ElHeader>
      <ElMain class="nuxt-admin__content-wrap">
        <ElScrollbar id="scroll-area" max-height="100%" always>
          <div min-h-520px rd-2 p-4 h="calc(100% - 2rem)">
            <slot />
          </div>
        </ElScrollbar>
        <el-backtop target="#scroll-area .el-scrollbar__wrap" :bottom="60" :right="20">
          <div id="backtop-icon-wrap">
            <Icon size="24" name="mdi:arrow-collapse-up" />
          </div>
        </el-backtop>
      </ElMain>
      <ElFooter flex-center height="40px">
        <LayoutTheFooter />
      </ElFooter>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
.nuxt-admin-container {
  @apply wh-full;

  .nuxt-admin__aside-wrap {
    @apply h-full overflow-hidden;
    box-shadow: 2px 0 8px #1d23290d;
    z-index: 1;
  }
  .nuxt-admin__body {
    .nuxt-admin__header-wrap {
      @apply px-0;
      box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.05);
      z-index: 1;
    }

    .nuxt-admin__content-wrap {
      background-color: #f7f9f8;
      padding: 0;

      :deep(#backtop-icon-wrap) {
        @apply h-full w-full text-center lh-40px rd-1/2;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
