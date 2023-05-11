<script setup lang="ts">
const { websiteName } = useAppConfig()
</script>

<template>
  <div>
    Copyright ©{{ new Date().getFullYear() }} {{ websiteName }}
  </div>
</template>

<style scoped>

</style>
