'use client'

import { useQueryState, parseAsString } from 'nuqs'
import useSWR from 'swr'

import { FormCombobox } from '@/components/Form/FormCombobox'

import { getProjectsData } from '../actions/getProjectsData'
import { ACTIONS } from '../constants'

import { FormSection } from './FormSection'
import { Loader } from './Loader'
import { UpdateForm } from './UpdateForm'

const MARKETING_DEPARTMENT_EMAIL = 'marketing@fil.org'

const URL_QUERY_NAME = 'project'

export function UpdateFormSelect() {
  const [project, setProject] = useQueryState(
    URL_QUERY_NAME,
    parseAsString.withDefault(''),
  )

  const { data: projects } = useSWR(ACTIONS.GET_PROJECTS_DATA, getProjectsData)

  if (!projects) {
    return <Loader />
  }

  const selectedProject = projects.find((p) => p.slug === project)

  const options = projects.map((project) => ({
    id: project.slug,
    name: project.title,
  }))
  const selectedOption = {
    id: selectedProject?.slug || '',
    name: selectedProject?.title || '',
  }

  return (
    <>
      <FormSection
        title="Select Your Project"
        description={
          <p>
            {`Welcome back! Please select your project. Don't see it? Select
            "Submit Project" above, or reach out to `}
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
          label="Select Your Project"
          options={options}
          value={selectedOption}
          onChange={(option) => {
            if (option) {
              setProject(option.id)
            }

            if (!option) {
              setProject('')
            }
          }}
        />
      </FormSection>

      {selectedProject && (
        <UpdateForm key={selectedProject.slug} slug={selectedProject.slug} />
      )}
    </>
  )
}
