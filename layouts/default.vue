<template>
  <ElContainer class="nuxt-admin-container">
    <ElAside class="nuxt-admin__aside-wrap" width="fitcontent">
      <TheAside />
    </ElAside>
    <ElContainer class="nuxt-admin__body">
      <ElHeader class="nuxt-admin__header-wrap" height="56px">
        <TheHeader />
      </ElHeader>
      <ElMain class="nuxt-admin__content-wrap">
        <ElScrollbar max-height="100%" always>
          <div min-h-520px rd-2 p-4 h="calc(100% - 2rem)">
            <slot />
          </div>
        </ElScrollbar>
      </ElMain>
      <ElFooter flex items-center justify-center height="40px">
        Copyright ©{{ new Date().getFullYear() }} Nuxt Admin
      </ElFooter>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
.nuxt-admin-container {
  @apply h-full w-full;

  .nuxt-admin__aside-wrap {
    @apply h-full overflow-hidden;
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.05);
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
    }
  }
}
</style>
