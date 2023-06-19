<template>
  <div ref="vditorRef" />
</template>

<script setup lang="ts">
import Vditor from 'vditor'

const vditor = ref<Vditor | null>(null)
const vditorRef = ref<HTMLElement>(null)

onMounted(async () => {
  await nextTick()
  vditor.value = new Vditor(vditorRef.value, {
    cache: {
      enable: false,
    },
    after: () => {
      // vditor.value is a instance of Vditor now and thus can be safely used here
      vditor.value!.setValue('Vue Composition API + Vditor + TypeScript Minimal Example')
    },
  })
})
</script>

<style scoped></style>
