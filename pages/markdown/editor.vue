<template>
  <div rd-2 bg-fill-3>
    <section p-4>
      <MarkdownEditor v-model="markdownText" />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('menu.markdownEditor'),
})
definePageMeta({
  title: 'menu.markdownEditor',
})

const markdownText = ref<string>('')
</script>

<style scoped></style>
