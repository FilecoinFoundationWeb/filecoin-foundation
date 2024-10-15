import type { EcosystemProject } from '@/types/ecosystemProjectType'

export function getProjectOptions(projects: Array<EcosystemProject>) {
  return projects.map((project) => ({
    id: project.slug,
    name: project.title,
  }))
}
