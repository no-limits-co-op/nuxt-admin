<template>
  <div ref="vditorRef" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])
const { domRef: vditorRef, vditor } = useVditor({
  minHeight: 500,
  height: 500,
  cache: {
    enable: false,
  },
  input: () => {
    const val = vditor.value!.getValue()
    emit('update:modelValue', val)
  },
  after: () => {
    vditor.value!.setValue(props.modelValue)
  },
})
</script>
