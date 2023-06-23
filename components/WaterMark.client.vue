<template>
  <div pointer-events-none position-fixed z-10 wh-full overflow-hidden :style="elStyles"></div>
</template>
<script setup lang="ts">
const props = defineProps({
  text: { type: String, default: 'NAE admin' },
  rotateAngle: { type: Number, default: -45 },
  fontSize: { type: Number, default: 14 },
})

const elStyles = ref<Record<string, string>>()
const colorMode = useColorMode()

const createWatermark = () => {
  const ratio = window.devicePixelRatio
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const textWidth = ctx!.measureText(props.text).width
  // 调整 width 和 height 以控制水印的数量
  const [width, height] = [4 * textWidth * ratio, 4 * props.fontSize * ratio]
  ctx!.scale(ratio, ratio)
  canvas.width = width
  canvas.height = height
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  const textColor = colorMode.preference === 'dark' ? '#fff' : '#000'
  const opacity = 0.2
  const fontFamily = 'PingFang SC, Roboto, sans-serif'

  ctx!.font = `normal ${props.fontSize}px ${fontFamily}`
  ctx!.fillStyle = textColor
  ctx!.globalAlpha = opacity
  ctx!.save()
  ctx!.translate(width / 2, height / 2)
  ctx!.rotate((props.rotateAngle * Math.PI) / 360)
  ctx!.textAlign = 'center'
  ctx!.textBaseline = 'middle'
  ctx!.fillText(props.text, 0, 0)
  ctx!.restore()

  const watermarkURL = canvas.toDataURL()

  elStyles.value = {
    backgroundImage: `url(${watermarkURL})`,
    backgroundRepeat: 'repeat',
  }
}

watch(
  () => colorMode.preference,
  () => {
    createWatermark()
  },
  { immediate: true }
)

watch(
  props,
  () => {
    createWatermark()
  },
  { deep: true, immediate: true }
)
</script>

<style scoped></style>
