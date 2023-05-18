<script setup lang="ts">
const activeTab = ref('notification')
</script>

<template>
  <ElTabs v-model="activeTab" stretch>
    <ElTabPane label="通知" name="notification">
      <div h-360px>
        通知
      </div>
    </ElTabPane>
    <ElTabPane label="消息" name="message">
      <div h-360px>
        消息
      </div>
    </ElTabPane>
    <ElTabPane label="待办" name="todo">
      <div h-360px>
        待办
      </div>
    </ElTabPane>
  </ElTabs>
</template>

<style scoped>

</style>
