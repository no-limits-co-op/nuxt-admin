<script setup>
const router = useRouter()
definePageMeta({
  layout: false,
})
useHead({
  title: '登录',
})

const loginForm = reactive({
  username: 'nuxtAdmin',
  password: 'nuxtAdmin',
  remember: false,
})

function onLogin() {
  router.push('/')
}
</script>

<template>
  <div wh-full flex-center>
    <ElCard shadow="always">
      <div w-300px sm:w-360px>
        <header mb-4 flex justify-between>
          <div>logo</div>
          <div>Nuxt Admin 管理系统</div>
        </header>
        <main>
          <h3 mb-4 font-500 text-blue>账号密码登录</h3>
          <ElForm v-model="loginForm" size="large">
            <ElFormItem prop="username">
              <ElInput v-model="loginForm.username" placeholder="用户名" />
            </ElFormItem>
            <ElFormItem prop="password">
              <ElInput v-model="loginForm.password" type="password" placeholder="密码" />
            </ElFormItem>
            <div mb5 flex-y-center justify-between>
              <ElFormItem prop="remember" mb-0>
                <ElCheckbox v-model="loginForm.remember"> 记住我 </ElCheckbox>
              </ElFormItem>
              <div mb-22px text-sm>忘记密码？</div>
            </div>
          </ElForm>
          <ElButton type="primary" size="large" round w-full @click="onLogin"> 登录 </ElButton>
        </main>
      </div>
    </ElCard>
  </div>
</template>

<style lang="scss" scoped></style>
