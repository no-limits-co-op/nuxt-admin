<script setup lang="ts">
interface Props {
  startColor: string
  endColor: string
}

const props = withDefaults(defineProps<Props>(), {
  startColor: '#d6e2fb',
  endColor: '#aec6f6',
})

const bgStyle = computed(() => ({
  backgroundImage: `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`,
}))
</script>

<template>
  <div rd-4 p-4 text-white :style="bgStyle">
    <slot />
  </div>
</template>
