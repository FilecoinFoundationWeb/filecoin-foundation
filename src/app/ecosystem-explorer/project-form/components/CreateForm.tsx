'use client'

import useSWR from 'swr'

import { getInitialFormData } from '../actions/getInitialFormData'
import { ACTIONS } from '../constants'
import { useSubmitEcosystemProjectForm } from '../hooks/useSubmitEcosystemProjectForm'

import { EcosystemProjectForm } from './EcosystemProjectForm'

export function CreateForm() {
  const { data: initialFormData } = useSWR(ACTIONS.GET_INITIAL_FORM_DATA, () =>
    getInitialFormData(),
  )

  const { create } = useSubmitEcosystemProjectForm()

  if (!initialFormData) {
    return
  }

  return (
    <EcosystemProjectForm initialFormData={initialFormData} onSubmit={create} />
  )
}
