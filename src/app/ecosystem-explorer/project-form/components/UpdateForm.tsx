'use client'

import useSWR from 'swr'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { getInitialFormData } from '../actions/getInitialFormData'
import { getProjectData } from '../actions/getProjectData'
import { SWR_KEYS } from '../constants'
import { useUpdateEcosystemProjectForm } from '../hooks/useUpdateEcosystemProjectForm'
import { buildTemporaryLogoFile } from '../utils/fileUtils'

import { EcosystemProjectForm } from './EcosystemProjectForm'
import { Loader } from './Loader'

type UpdateFormProps = {
  slug: EcosystemProject['slug']
}

export function UpdateForm({ slug }: UpdateFormProps) {
  const updateProject = useUpdateEcosystemProjectForm()

  const { data: project } = useSWR(SWR_KEYS.project(slug), () =>
    getProjectData(slug),
  )

  const { data: initialFormData } = useSWR(
    SWR_KEYS.formUpdateData(project),
    () => getInitialFormData(project),
  )

  const { data: logo } = useSWR(SWR_KEYS.projectLogo(project), () =>
    buildTemporaryLogoFile(project!.image),
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
