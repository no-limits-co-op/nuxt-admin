<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('menu.exception403'),
})
definePageMeta({
  title: 'menu.exception403',
})

const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div wh-full flex-col-center>
    <Icon403 />

    <ElButton type="primary" mt-16 @click="goHome"> 回到首页 </ElButton>
  </div>
</template>
