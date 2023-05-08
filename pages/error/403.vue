<script setup lang="ts">
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div h-full w-full flex flex-col justify-center items-center>
    <Icon403 />

    <ElButton type="primary" mt-16 @click="goHome">
      回到首页
    </ElButton>
  </div>
</template>
