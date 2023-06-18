<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('menu.about'),
})
definePageMeta({
  title: 'menu.about',
})
const { packageInfos } = usePackageInfos()
const devDependenciesNames = Object.keys(packageInfos.devDependencies)
</script>

<template>
  <div rd-2 bg-fill-3>
    <section rd-2 p-4>
      <header py-2 text-4 font-600>关于</header>
      <main text-14px lh-normal>
        Nuxt Admin 是一个基于 Nuxt3.x、Vue3、Element Plus、TypeScript5.x
        的中后台解决方案，它使用了最新的前端技术栈，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你。
      </main>
    </section>
    <div mt-4 rd-2 p-4>
      <header py-2 text-4 font-600>项目信息</header>
      <main>
        <ElDescriptions border :column="2">
          <ElDescriptionsItem>
            <template #label> 版本 </template>
            <ElTag>
              {{ packageInfos.version }}
            </ElTag>
          </ElDescriptionsItem>
          <ElDescriptionsItem>
            <template #label> 最后编译时间 </template>
            kooriookami
          </ElDescriptionsItem>
          <ElDescriptionsItem>
            <template #label> github地址 </template>
            暂无
          </ElDescriptionsItem>
          <ElDescriptionsItem>
            <template #label> 预览地址 </template>
            暂无
          </ElDescriptionsItem>
        </ElDescriptions>
      </main>
    </div>
    <div mt-4 rd-2 p-4>
      <header py-2 text-4 font-600>项目依赖</header>
      <main>
        <ElDescriptions border :column="2">
          <template v-for="name in devDependenciesNames" :key="name">
            <ElDescriptionsItem>
              <template #label>
                {{ name }}
              </template>
              {{ packageInfos.devDependencies[name] }}
            </ElDescriptionsItem>
          </template>
        </ElDescriptions>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
