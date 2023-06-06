<script setup lang="ts">
import type { Message, MessageTabItem } from '@/types/components/message/message'
import MessageItem from './MessageItem.vue'

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

const messageList: Array<Message> = [
  {
    id: '1',
    icon: 'solar:bell-outline',
    content: '您好，Jenna',
    title: '提问is你好吗?',
    startTime: 'Nov 15, 2016 1:00 pm',
  },
  {
    id: '2',
    icon: 'solar:bell-outline',
    content: '您好，Jenna',
    title: '提问is你好吗?',
    startTime: 'Nov 15, 2016 1:00 pm',
  },
  {
    id: '3',
    icon: 'fluent-emoji-flat:boy-light',
    content: '您好，Jenna',
    title: '提问is你好吗?',
    startTime: 'Nov 15, 2016 1:00 pm',
  },
  {
    id: '4',
    icon: 'solar:bell-outline',
    content: '您好，Jenna',
    title: '提问is你好吗?',
    startTime: 'Nov 15, 2016 1:00 pm',
  },
]
</script>

<template>
  <ElTabs v-model="activeTab" class="message-tabs" stretch>
    <template v-for="item in TABS" :key="item.name">
      <ElTabPane :name="item.name" :label="item.label">
        <ElScrollbar :max-height="360" :height="360" :wrap-style="{ paddingBottom: '8px', paddingTop: '8px' }">
          <template v-for="_item in messageList" :key="_item.id">
            <message-item :item="_item" />
          </template>
        </ElScrollbar>
      </ElTabPane>
    </template>
  </ElTabs>
  <div flex-y-center pointer border-t-1 border-base>
    <div flex-1 border-r-1 border-base py-10px text-center>清空</div>
    <div flex-1 border-r-1 border-base py-10px text-center>全部已读</div>
    <div flex-1 py-10px text-center>查看更多</div>
  </div>
</template>

<style scoped lang="scss">
.message-tabs {
  :deep(.el-tabs__header) {
    margin: unset;
  }
}
</style>
