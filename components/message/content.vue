<script setup lang="ts">
interface MessageTabItem {
  label: string
  name: 'notification' | 'message' | 'todo'
}
const activeTab = ref('notification')

const TABS: Array<MessageTabItem> = [
  {
    name: 'notification',
    label: '通知',
  },
  {
    name: 'message',
    label: '消息',
  },
  {
    name: 'todo',
    label: '待办',
  },
]
</script>

<template>
  <ElTabs v-model="activeTab" stretch>
    <template v-for="item in TABS" :key="item.name">
      <ElTabPane :name="item.name" :label="item.label">
        <div h-360px>
          {{ item.label }}
        </div>
      </ElTabPane>
    </template>
  </ElTabs>
</template>

<style scoped>

</style>
