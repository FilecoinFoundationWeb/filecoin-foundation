'use client'

import useSWR from 'swr'

import { getInitialFormData } from '../actions/getInitialFormData'
import { SWR_KEYS } from '../constants'
import { useCreateEcosystemProjectForm } from '../hooks/useCreateEcosystemProjectForm'

import { EcosystemProjectForm } from './EcosystemProjectForm'
import { ErrorMessage } from './ErrorMessage'
import { Loader } from './Loader'

export function EcosystemProjectCreateForm() {
  const { data: initialFormData, error } = useSWR(SWR_KEYS.formCreateData, () =>
    getInitialFormData(),
  )

  const createProject = useCreateEcosystemProjectForm()

  if (!initialFormData) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message="Couldn't load form data" />
  }

  return (
    <EcosystemProjectForm
      initialFormData={initialFormData}
      onSubmit={createProject}
    />
  )
}
