import type { ProjectPreview } from '@/qino/collections/projects'

export function filterByCurrentPartnership(entries: Array<ProjectPreview>) {
  return entries.filter((entry) => entry.activePartnership)
}

export function filterByPastPartnership(entries: Array<ProjectPreview>) {
  return entries.filter((entry) => !entry.activePartnership)
}
