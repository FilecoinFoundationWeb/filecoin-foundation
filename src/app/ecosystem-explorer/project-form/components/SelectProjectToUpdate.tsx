'use client'

import { useQueryState } from 'nuqs'
import useSWR from 'swr'

import { FormCombobox } from '@/components/Form/FormCombobox'

import { getProjectListData } from '../actions/getProjectListData'
import { SWR_KEYS } from '../constants'
import { getProjectOptions } from '../utils/getProjectOptions'

import { EcosystemProjectUpdateForm } from './EcosystemProjectUpdateForm'
import { ErrorMessage } from './ErrorMessage'
import { FormSection } from './FormSection'
import { Loader } from './Loader'

const MARKETING_DEPARTMENT_EMAIL = 'marketing@fil.org'

const URL_QUERY_KEY = 'project'

export function SelectProjectToUpdate() {
  const [projectSlug, setProjectSlug] = useQueryState(URL_QUERY_KEY)

  const { data: projects, error } = useSWR(
    SWR_KEYS.projects,
    getProjectListData,
  )

  if (!projects) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message="Couldn't load projects" />
  }

  const selectedProject = projects.find(
    (project) => project.slug === projectSlug,
  )

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
          options={getProjectOptions(projects)}
          value={{
            id: selectedProject?.slug || '',
            name: selectedProject?.title || '',
          }}
          onChange={(option) => setProjectSlug(option?.id || null)}
        />
      </FormSection>

      {selectedProject && (
        <EcosystemProjectUpdateForm project={selectedProject} />
      )}
    </>
  )
}
