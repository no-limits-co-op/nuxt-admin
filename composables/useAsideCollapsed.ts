export default function useAsideCollapsed() {
  const asideCollapsed = useState<boolean>('asideCollapsed', () => false)
  const toggleAsideCollapsed = () => {
    asideCollapsed.value = !asideCollapsed.value
  }
  return {
    asideCollapsed,
    toggleAsideCollapsed,
  }
}
