'use client'

import { useQueryState, parseAsString } from 'nuqs'
import useSWR from 'swr'

import { FormCombobox } from '@/components/Form/FormCombobox'

import { getProjectsData } from '../actions/getProjectsData'
import { ACTIONS } from '../constants'

import { FormSection } from './FormSection'
import { UpdateForm } from './UpdateForm'

const MARKETING_DEPARTMENT_EMAIL = 'marketing@fil.org'

const URL_QUERY_NAME = 'project'

export function UpdateFormSelect() {
  const { data: projects } = useSWR(ACTIONS.GET_PROJECTS_DATA, getProjectsData) // Fetch once on page load and never again

  const [project, setProject] = useQueryState(
    URL_QUERY_NAME,
    parseAsString.withDefault(''),
  )

  if (!projects) {
    return
  }

  const selectedProject = projects.find((p) => p.slug === project)

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
          label="Select Your Project"
          options={projects.map((project) => ({
            id: project.slug,
            name: project.title,
          }))}
          value={{
            id: selectedProject?.slug || '',
            name: selectedProject?.title || '',
          }}
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
