import type { User } from '@/types/user'

const userList: User[] = [
  {
    id: 1,
    username: 'NAE',
    name: 'NAE',
    gender: 'male',
    age: 18,
    mobile: '13889008899',
    email: 'nae@nae.com',
    status: 'active',
  },
  {
    id: 2,
    username: 'NAE的小号',
    name: 'NAE',
    gender: 'female',
    age: 12,
    mobile: '13889008899',
    email: 'nae.xiaohao@nae.com',
    status: 'inactive',
  },
]

export default () => {
  return userList
}
