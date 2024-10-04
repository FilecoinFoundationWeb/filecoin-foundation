'use client'

import useSWR from 'swr'

import { getInitialFormValue } from '../actions/getInitialFormValue'

import { EcosystemProjectForm } from './EcosystemProjectForm'

export function CreateForm() {
  const { data: initialFormValues } = useSWR('create', () =>
    getInitialFormValue(),
  )

  if (!initialFormValues) {
    return
  }

  return <EcosystemProjectForm initialValues={initialFormValues} />
}
