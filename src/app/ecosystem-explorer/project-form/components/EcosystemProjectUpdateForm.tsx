'use client'

import useSWR from 'swr'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { getInitialFormData } from '../actions/getInitialFormData'
import { SWR_KEYS } from '../constants'
import { useUpdateEcosystemProjectForm } from '../hooks/useUpdateEcosystemProjectForm'
import { buildTemporaryLogoFile } from '../utils/fileUtils'

import { EcosystemProjectForm } from './EcosystemProjectForm'
import { Loader } from './Loader'

type UpdateFormProps = {
  project: EcosystemProject
}

export function EcosystemProjectUpdateForm({ project }: UpdateFormProps) {
  const updateProject = useUpdateEcosystemProjectForm()

  const { data: initialFormData } = useSWR(
    SWR_KEYS.formUpdateData(project),
    () => getInitialFormData(project),
  )

  const { data: logo } = useSWR(SWR_KEYS.projectLogo(project), () =>
    buildTemporaryLogoFile(project.image),
  )

  if (!initialFormData) {
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
