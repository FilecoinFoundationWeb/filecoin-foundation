'use client'

import useSWR from 'swr'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { getInitialFormValue } from '../actions/getInitialFormValue'
import { getProjectData } from '../actions/getProjectData'

import { EcosystemProjectForm } from './EcosystemProjectForm'

type UpdateFormProps = {
  slug: EcosystemProject['slug']
}

export function UpdateForm({ slug }: UpdateFormProps) {
  const { data: project } = useSWR(`projects-${slug}`, () =>
    getProjectData(slug),
  )

  const { data: initialFormValues } = useSWR(
    project ? `update-${project.slug}` : null,
    () => getInitialFormValue(project),
  )

  if (!initialFormValues) {
    return
  }

  console.log(initialFormValues)

  return <EcosystemProjectForm initialValues={initialFormValues} />
}
