'use client'

import { useQueryState, parseAsString } from 'nuqs'
import useSWR from 'swr'

import { FormCombobox } from '@/components/Form/FormCombobox'

import { getProjectsData } from '../actions/getProjectsData'
import { SWR_KEYS } from '../constants'

import { EcosystemProjectUpdateForm } from './EcosystemProjectUpdateForm'
import { ErrorMessage } from './ErrorMessage'
import { FormSection } from './FormSection'
import { Loader } from './Loader'

const MARKETING_DEPARTMENT_EMAIL = 'marketing@fil.org'

const URL_QUERY_NAME = 'project'

export function SelectProjectToUpdate() {
  const [projectSlug, setProjectSlug] = useQueryState(
    URL_QUERY_NAME,
    parseAsString.withDefault(''),
  )

  const { data: projects, error } = useSWR(SWR_KEYS.projects, getProjectsData)

  if (!projects) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message="Couldn't load projects" />
  }

  const options = projects.map((project) => ({
    id: project.slug,
    name: project.title,
  }))

  const selectedProject = projects.find(
    (project) => project.slug === projectSlug,
  )
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
              setProjectSlug(option.id)
            }

            if (!option) {
              setProjectSlug('')
            }
          }}
        />
      </FormSection>

      {selectedProject && (
        <EcosystemProjectUpdateForm project={selectedProject} />
      )}
    </>
  )
}
