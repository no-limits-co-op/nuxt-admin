<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('menu.exception404'),
})
definePageMeta({
  title: 'menu.exception404',
})
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div wh-full flex-col-center>
    <Icon404 />

    <ElButton type="primary" mt-16 @click="goHome"> 回到首页 </ElButton>
  </div>
</template>
