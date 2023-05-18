<script setup lang="ts">
import { Box, Delete, Plus, RefreshRight } from '@element-plus/icons-vue'
import type { User } from '@/types/user'
import { UserGender, UserStatus } from '@/types/user'

const config = useRuntimeConfig()
const visible = ref<boolean>(false)
const formData = reactive<User>({
  id: 0,
  username: '',
  name: '',
  age: 20,
  gender: 'other',
  mobile: '',
  status: 'active',
})

const rules = {
  name: [{ required: true, message: '请输入用户名' }],
  age: [{ required: true, message: '请输入年龄' }],
  mobile: [{ required: true, message: '请输入手机号' }],
  gender: [{ required: true, message: '请选择性别' }],
  status: [{ required: true, message: '请选择状态' }],
}

const multipleTableRef = ref()
const multipleSelection = ref<Array<User>>([])
const tableData = ref<Array<User>>([])

function handleSelectionChange(val: Array<User>) {
  multipleSelection.value = val
}

// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-08',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-06',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-07',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]

function toggle(val: boolean) {
  visible.value = val
}

onMounted(async () => {
  const { data } = await useFetch<Array<User>>('/tags', {
    baseURL: config.public.baseUrl,
    method: 'get',
  })
  tableData.value = data.value as Array<User>
})
</script>

<template>
  <div bg-white rd-2 p-4>
    <div text-4 font-600>
      用户管理
    </div>
    <div flex items-center justify-between mt-4>
      <div flex items-center>
        <ElButton type="primary" :icon="Plus" @click="toggle(true)">
          新增
        </ElButton>
        <ElButton type="danger" :icon="Delete">
          删除
        </ElButton>
        <ElButton type="success" :icon="Box">
          导出
        </ElButton>
      </div>
      <div flex items-center>
        <ElButton type="primary" :icon="RefreshRight">
          刷新
        </ElButton>
      </div>
    </div>
    <div mt-4>
      <ClientOnly>
        <ElTable
          ref="multipleTableRef"
          style="width: 100%"
          stripe
          border
          :data="tableData"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column type="index" label="序号" width="55" />
          <el-table-column label="Date" width="120">
            <template #default="scope">
              {{ scope.row.date }}
            </template>
          </el-table-column>
          <el-table-column property="name" label="Name" width="120" />
          <el-table-column property="address" label="Address" show-overflow-tooltip />
          <template #empty>
            <el-empty description="暂无数据" />
          </template>
        </ElTable>
      </ClientOnly>
    </div>
    <ClientOnly>
      <ElDialog v-model="visible" title="新增" width="700px">
        <ElForm label-width="80px" require-asterisk-position="right" :model="formData" :rules="rules">
          <div flex flex-col gap-2>
            <ElRow>
              <ElCol :span="12">
                <ElFormItem label="用户名" prop="name">
                  <ElInput v-model="formData.name" />
                </ElFormItem>
              </ElCol>
              <ElCol :span="12">
                <ElFormItem label="年龄" prop="age">
                  <ElInputNumber v-model="formData.age" controls-position="right" style="width:100%" :step="1" :min="1" />
                </ElFormItem>
              </ElCol>
            </ElRow>
            <ElRow>
              <ElCol :span="12">
                <ElFormItem label="性别" prop="gender">
                  <ElRadioGroup v-model="formData.gender">
                    <template v-for="item in UserGender" :key="item.value">
                      <ElRadio :label="item.value">
                        {{ item.label }}
                      </ElRadio>
                    </template>
                  </ElRadioGroup>
                </ElFormItem>
              </ElCol>
              <ElCol :span="12">
                <ElFormItem label="手机号" prop="mobile">
                  <ElInput v-model="formData.mobile" />
                </ElFormItem>
              </ElCol>
            </ElRow>
            <ElRow>
              <ElCol :span="12">
                <ElFormItem label="邮箱" prop="email">
                  <ElInput v-model="formData.email" />
                </ElFormItem>
              </ElCol>
              <ElCol :span="12">
                <ElFormItem label="状态" prop="status">
                  <ElSelect v-model="formData.status" w-full>
                    <template v-for="item in UserStatus" :key="item.value">
                      <ElOption :label="item.label" :value="item.value" />
                    </template>
                  </ElSelect>
                </ElFormItem>
              </ElCol>
            </ElRow>
          </div>
        </ElForm>
        <template #footer>
          <ElButton @click="toggle(false)">
            取消
          </ElButton>
          <ElButton type="primary">
            确定
          </ElButton>
        </template>
      </ElDialog>
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
