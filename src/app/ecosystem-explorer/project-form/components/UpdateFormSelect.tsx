'use client'

import { useState } from 'react'

import useSWR from 'swr'

import { FormCombobox } from '@/components/Form/FormCombobox'

import { getProjectsData } from '../actions/getProjectsData'

import { FormSection } from './FormSection'
import { UpdateForm } from './UpdateForm'

const MARKETING_DEPARTMENT_EMAIL = 'marketing@fil.org'

export function UpdateFormSelect() {
  // Fetch once on page load and never again
  const { data } = useSWR('projects', getProjectsData)
  const [selectedProject, setSelectedProject] = useState({
    id: '',
    name: '',
  })

  console.log(selectedProject)

  if (!data) {
    return
  }

  const projectIsSelected = Boolean(selectedProject.id)

  const options = data.map((project) => ({
    id: project.slug,
    name: project.title,
  }))

  return (
    <>
      <FormSection
        title="Select Your Project"
        description={
          <p>
            Welcome back! Please select your project. Don't see it? Select
            "Submit Project" above, or reach out to{' '}
            <a
              className="text-brand-300 underline"
              href={`mailto:${MARKETING_DEPARTMENT_EMAIL}`}
            >
              {MARKETING_DEPARTMENT_EMAIL}
            </a>{' '}
            for more support.
          </p>
        }
      >
        <FormCombobox
          value={selectedProject}
          label="Select Your Project"
          options={options}
          onChange={(option) => {
            if (option) {
              setSelectedProject(option)
            }
          }}
        />
      </FormSection>

      {projectIsSelected && <UpdateForm slug={selectedProject.id} />}
    </>
  )
}
