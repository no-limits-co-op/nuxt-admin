export interface User {
  id: number
  username: string
  name: string
  gender: 'male' | 'female' | 'other'
  age: number
  mobile: string
  email?: string
  status?: 'active' | 'inactive'
}

interface KeyValue {
  label: string
  value: string | number
}

// 用户状态
export const UserStatus: Array<KeyValue> = [
  {
    value: 'active',
    label: '启用',
  },
  {
    value: 'inactive',
    label: '禁用',
  },
]

// 性别
export const UserGender: Array<KeyValue> = [
  {
    value: 'male',
    label: '男',
  },
  {
    value: 'female',
    label: '女',
  },
  {
    value: 'other',
    label: '不公开',
  },
]
