<script setup lang="ts">
const { elLocale, buttonConfig, messageConfig, websiteName } = useGlobalConfig()
useGlobalEvents()

// 不切换国际化时
useHead({
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} | ${websiteName}` : `${websiteName}`
  },
})
</script>

<template>
  <ElConfigProvider :locale="elLocale" :button="buttonConfig" :message="messageConfig">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>

<style>
html,
body,
#__nuxt {
  @apply wh-full;
}
</style>
