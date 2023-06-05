<script setup lang="ts">
</script>

<template>
  <div>
    <ClientOnly>
      <ElPopover trigger="click" placement="bottom-end" width="360px" :popper-style="{ padding: 0 }">
        <template #reference>
          <div wh-full flex-center>
            <el-badge :value="200" :max="99">
              <Icon name="solar:bell-outline" size="20" />
            </el-badge>
          </div>
        </template>
        <LayoutHeaderNotificationMessagePopoverContent />
      </ElPopover>
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
