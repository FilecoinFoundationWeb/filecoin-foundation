'use client'

import { useQueryState, parseAsString } from 'nuqs'

import { FormRadioGroup } from '@/components/Form/FormRadioGroup'

import { EcosystemProjectCreateForm } from './EcosystemProjectCreateForm'
import { FormSection } from './FormSection'
import { ProjectSelector } from './ProjectSelector'

const URL_QUERY_KEY = 'action'

const actionOptions = [
  { id: 'create', name: 'Submit Project' },
  { id: 'update', name: 'Update Project' },
] as const

const createOption = actionOptions[0]

export function CreateOrUpdateRouter() {
  const [action, setAction] = useQueryState(
    URL_QUERY_KEY,
    parseAsString.withDefault(createOption.id),
  )

  return (
    <>
      <FormSection
        title="Submit or Update Project"
        description="Please select whether you are adding a new project to the Ecosystem Explorer or updating an existing one."
      >
        <FormRadioGroup
          options={actionOptions}
          value={actionOptions.find((option) => option.id === action)}
          onChange={(option) => setAction(option.id)}
        />
      </FormSection>

      {action === 'create' && <EcosystemProjectCreateForm />}
      {action === 'update' && <ProjectSelector />}
    </>
  )
}
