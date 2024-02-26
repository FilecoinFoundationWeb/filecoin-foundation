import { EcosystemProjectListItem } from '@/components/EcosystemProjectListItem'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

type ProjectsListProps = {
  projects: EcosystemProjectData[]
  className?: string
}

export function EcosystemProjectsList({
  projects,
  className,
}: ProjectsListProps) {
  if (projects.length === 0) {
    return <p>No projects available.</p>
  }

  return (
    <ul className={className}>
      {projects.map((ecosystemProject) => (
        <EcosystemProjectListItem
          key={ecosystemProject.slug}
          project={ecosystemProject}
        />
      ))}
    </ul>
  )
}
