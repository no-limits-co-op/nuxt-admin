<script setup lang="ts">
const { websiteName } = useGlobalConfig()
</script>

<template>
  <div>
    Copyright ©{{ new Date().getFullYear() }} {{ websiteName }}
  </div>
</template>
