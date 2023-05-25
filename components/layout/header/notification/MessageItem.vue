<script setup lang="ts">
import type { Message } from '@/types/components/message/message'

const props = defineProps<{
  item: Message
}>()

const item = computed<Message>(() => props.item)
</script>

<template>
  <div flex px-4 py-3 hover:bg-gray pointer border-b-1 border-base>
    <div pr-4>
      <Icon :name="item.icon" size="24" />
    </div>
    <div flex flex-col flex-auto>
      <div font-bold mb-1 text-4>
        {{ item.title }}
      </div>
      <div>
        <span>
          {{ item.content }}
        </span>
        <p mt-1>
          {{ item.startTime }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
