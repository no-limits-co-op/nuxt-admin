<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('menu.workbench'),
})
definePageMeta({
  title: 'menu.workbench',
})

const data = reactive({
  projectCount: 12,
  todoCount: 4,
  total: 16,
  unreadMessageCount: 12,
})

const todoData = computed(() => {
  return [
    {
      title: '项目数',
      value: data.projectCount,
    },
    {
      title: '待办',
      value: `${data.todoCount}/${data.total}`,
    },
    {
      title: '消息',
      value: data.unreadMessageCount,
    },
  ]
})

const techList = [
  {
    title: 'Nuxt.js',
    subtitle: 'The Intuitive Web Framework',
    href: 'https://nuxt.com',
  },
  {
    title: 'TypeScript',
    subtitle: 'JavaScript类型的超集，它可以编译成纯JavaScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    title: 'Element Plus',
    subtitle: '基于 Vue 3，面向设计师和开发者的组件库',
    href: 'https://element-plus.org',
  },
  {
    title: 'UnoCSS',
    subtitle: '下一代实用优先的CSS框架',
    href: 'https://unocss.dev/interactive/?s=',
  },
  {
    title: 'Pinia',
    subtitle: 'vue状态管理框架，支持vue2、vue3',
    href: 'https://pinia.esm.dev/',
  },
]
</script>

<template>
  <div>
    <div flex-y-center justify-between rd-2 bg-fill-3 p-4>
      <div flex>
        <div>
          <img
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            alt="用户头像"
            width="60"
            height="60"
            rd="1/2"
            object-cover
          />
        </div>
        <div flex="~ col" ml-2>
          <div text-4 font-bold>早安，Nuxt Admin, 今天又是元气满满的一天！加油💪🏻奥利给！</div>
          <div mt-2>今日多云转晴，20℃ - 28℃！</div>
        </div>
      </div>
      <div flex>
        <template v-for="(item, index) in todoData" :key="index">
          <div flex-y-center px-2>
            <div font-400>
              {{ item.title }}
            </div>
            <div font-300>
              {{ item.value }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <div mt-4 flex gap-4>
      <ElCard shadow="never" flex-1 rd-2 border-none :body-style="{ padding: '1rem' }">
        <template #header>
          <div flex-y-center justify-between>
            <span>项目主要技术栈</span>
            <ElLink type="primary" :underline="false"> 更多技术栈 </ElLink>
          </div>
        </template>
        <div flex flex-wrap gap-4>
          <template v-for="(item, index) in techList" :key="index">
            <NuxtLink flex-col border border-green rd-2 p-2 :to="item.href" :external="true">
              <div font-600>
                {{ item.title }}
              </div>
              <div>{{ item.subtitle }}</div>
            </NuxtLink>
          </template>
        </div>
      </ElCard>
      <ElCard shadow="never" flex-1 rd-2 border-none>
        <template #header>
          <div flex-y-center flex-nowrap justify-between>
            <span ws-nowrap>快捷操作</span>
          </div>
        </template>
        <div>xxx</div>
      </ElCard>
    </div>
    <div mt-4 flex gap-4>
      <div rd-2 bg-fill-3 p-4>xxx</div>
    </div>
  </div>
</template>

<style scoped></style>
