<script setup lang="ts">
import type { Message } from '@/types/components/message/message'

const props = defineProps<{
  item: Message
}>()

const item = computed<Message>(() => props.item)
</script>

<template>
  <div border-base flex pointer border-b-1 px-4 py-3 hover:bg-gray>
    <div pr-4>
      <Icon :name="item.icon" size="24" />
    </div>
    <div flex-col flex-auto>
      <div mb-1 text-4 font-bold>
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

<style scoped></style>
