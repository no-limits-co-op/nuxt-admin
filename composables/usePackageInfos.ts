import packageInfo from '@/package.json'

export default function usePackageInfos() {
  const packageInfos = packageInfo
  return {
    packageInfos,
  }
}
