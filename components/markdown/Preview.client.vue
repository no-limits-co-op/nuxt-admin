<template>
  <div ref="vditorRef" />
</template>

<script setup lang="ts">
import Vditor from 'vditor'

const props = defineProps({
  text: { type: String, default: 'xxxxx' },
})

const colorMode = useColorMode()
const theme = computed(() => (colorMode.preference === 'dark' ? 'dark' : 'light'))

watch(theme, () => {
  setContentTheme()
  setCodeTheme()
})

const setCodeTheme = () => {
  Vditor.setCodeTheme(`solarized-${theme.value}`)
}

const setContentTheme = () => {
  Vditor.setContentTheme(theme.value, 'https://cdn.jsdelivr.net/npm/vditor@3.9.4/dist/css/content-theme')
}

const vditorRef = ref<HTMLDivElement | null>(null)

watch(
  () => vditorRef.value,
  (val: HTMLDivElement | null) => {
    if (val) {
      Vditor.preview(vditorRef.value!, props.text, {
        mode: 'light',
        after: () => {
          setContentTheme()
          setCodeTheme()
        },
      })
    }
  },
  { immediate: true }
)
</script>
