<template>
  <div rd-2 bg-fill-3>
    <section p-4>
      <MarkdownPreview :text="markdownText" />
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

const markdownText = ref('# Markdown syntax Guide')
</script>

<style scoped></style>
