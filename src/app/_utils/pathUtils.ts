import { PATHS, DynamicPathValues } from '@/constants/paths'

export function isDynamicPath(path: string): path is DynamicPathValues {
  return (
    path.startsWith(`${PATHS.BLOG.path}/`) ||
    path.startsWith(`${PATHS.ECOSYSTEM.path}/`) ||
    path.startsWith(`${PATHS.EVENTS.path}/`)
  )
}
