import type { Project } from '../types/ProjectType'

export function filterByCurrentPartnership(entries: Array<Project>) {
  return entries.filter((entry) => entry.activePartnership)
}

export function filterByPastPartnership(entries: Array<Project>) {
  return entries.filter((entry) => !entry.activePartnership)
}
