'use client'

import { useState } from 'react'

import { FormRadioGroup } from '@/components/Form/FormRadioGroup'

import { CreateForm } from './CreateForm'
import { FormSection } from './FormSection'
import { UpdateFormSelect } from './UpdateFormSelect'

const options = [
  { id: 'create', name: 'Submit Project' },
  { id: 'update', name: 'Update Project' },
]

export function CreateOrUpdateRouter() {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div className="md:max-w-readable">
      <FormSection
        title="Submit or Update Project"
        description="Please select whether you are adding a new project to the Ecosystem Explorer or updating an existing one."
      >
        <FormRadioGroup
          value={selectedOption}
          options={options}
          onChange={setSelectedOption}
        />
      </FormSection>

      {selectedOption.id === 'create' && <CreateForm />}
      {selectedOption.id === 'update' && <UpdateFormSelect />}
    </div>
  )
}
