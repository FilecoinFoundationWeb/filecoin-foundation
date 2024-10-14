'use client'

import useSWR from 'swr'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { getInitialFormData } from '../actions/getInitialFormData'
import { getProjectData } from '../actions/getProjectData'
import { ACTIONS } from '../constants'
import { useUpdateEcosystemProjectForm } from '../hooks/useUpdateEcosystemProjectForm'
import { getFileFromPath } from '../utils/fileUtils'

import { EcosystemProjectForm } from './EcosystemProjectForm'
import { Loader } from './Loader'

type UpdateFormProps = {
  slug: EcosystemProject['slug']
}

export function UpdateForm({ slug }: UpdateFormProps) {
  const updateProject = useUpdateEcosystemProjectForm()

  const { data: project } = useSWR(ACTIONS.GET_PROJECTS_DATA + slug, () =>
    getProjectData(slug),
  )

  const { data: initialFormData } = useSWR(
    project ? ACTIONS.GET_INITIAL_FORM_DATA + slug : null,
    () => getInitialFormData(project),
  )

  const { data: logo } = useSWR(project ? ACTIONS.GET_LOGO + slug : null, () =>
    getFileFromPath(project?.image?.src),
  )

  if (!initialFormData || !project) {
    return <Loader />
  }

  return (
    <EcosystemProjectForm
      isUpdateForm
      initialFormData={initialFormData}
      logo={logo}
      onSubmit={updateProject}
    />
  )
}
