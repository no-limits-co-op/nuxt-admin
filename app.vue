<script setup lang="ts">
const globalConfig = useGlobalConfig()

const { locale, buttonConfig, messageConfig } = globalConfig
</script>

<template>
  <ElConfigProvider :locale="locale" :button="buttonConfig" :message="messageConfig">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>

<style>
html, body, #__nuxt {
  @apply w-full h-full;
}
</style>
