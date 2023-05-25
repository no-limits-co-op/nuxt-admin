export interface MessageTabItem {
  label: string
  name: 'notification' | 'message' | 'todo'
}

export interface Message {
  id: string
  icon: string
  content: string
  title: string
  startTime: string
}
