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
    return <p>No projects found.</p>
  }

  return (
    <ul className={className}>
      {projects.map((project) => (
        <EcosystemProjectListItem key={project.slug} project={project} />
      ))}
    </ul>
  )
}
