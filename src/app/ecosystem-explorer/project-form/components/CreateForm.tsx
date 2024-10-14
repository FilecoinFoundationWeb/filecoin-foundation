'use client'

import useSWR from 'swr'

import { getInitialFormData } from '../actions/getInitialFormData'
import { SWR_KEYS } from '../constants'
import { useSubmitEcosystemProjectForm } from '../hooks/useSubmitEcosystemProjectForm'

import { EcosystemProjectForm } from './EcosystemProjectForm'
import { Loader } from './Loader'

export function CreateForm() {
  const { data: initialFormData } = useSWR(SWR_KEYS.formCreateData, () =>
    getInitialFormData(),
  )

  const createProject = useSubmitEcosystemProjectForm()

  if (!initialFormData) {
    return <Loader />
  }

  return (
    <EcosystemProjectForm
      initialFormData={initialFormData}
      onSubmit={createProject}
    />
  )
}
