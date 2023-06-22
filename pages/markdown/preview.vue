<template>
  <div rd-2 bg-fill-3>
    <section p-4>
      <MarkdownPreview />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('menu.markdownPreview'),
})
definePageMeta({
  title: 'menu.markdownPreview',
})
</script>

<style scoped></style>
