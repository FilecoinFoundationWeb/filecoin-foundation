'use client'

import useSWR from 'swr'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { getInitialFormData } from '../actions/getInitialFormData'
import { getProjectData } from '../actions/getProjectData'
import { ACTIONS } from '../constants'
import { useSubmitEcosystemProjectForm } from '../hooks/useSubmitEcosystemProjectForm'
import { buildPlaceholderFileFromPath } from '../utils/buildPlaceholderFileFromPath'

import { EcosystemProjectForm } from './EcosystemProjectForm'

type UpdateFormProps = {
  slug: EcosystemProject['slug']
}

export function UpdateForm({ slug }: UpdateFormProps) {
  const { updateProject } = useSubmitEcosystemProjectForm()

  const { data: project } = useSWR(ACTIONS.GET_PROJECTS_DATA + slug, () =>
    getProjectData(slug),
  )

  const { data: initialFormData } = useSWR(
    project ? ACTIONS.GET_INITIAL_FORM_DATA + slug : null,
    () => getInitialFormData(project),
  )

  const { data: logo } = useSWR(project ? ACTIONS.GET_LOGO + slug : null, () =>
    buildPlaceholderFileFromPath(project?.image?.src),
  )

  if (!initialFormData || !project) {
    return
  }

  return (
    <EcosystemProjectForm
      initial={{ formData: initialFormData, logo }}
      onSubmit={updateProject}
    />
  )
}
