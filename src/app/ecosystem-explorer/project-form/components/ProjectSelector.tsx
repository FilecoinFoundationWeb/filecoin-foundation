'use client'

import { useQueryState } from 'nuqs'
import useSWR from 'swr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { FormCombobox } from '@/components/Form/FormCombobox'
import { TextLink } from '@/components/TextLink'

import { getProjectListData } from '../actions/getProjectListData'
import { SWR_KEYS } from '../constants'
import { getProjectOptions } from '../utils/getProjectOptions'

import { EcosystemProjectUpdateForm } from './EcosystemProjectUpdateForm'
import { ErrorMessage } from './ErrorMessage'
import { FormSection } from './FormSection'
import { Loader } from './Loader'

const URL_QUERY_KEY = 'project'

export function ProjectSelector() {
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
            Welcome back! Please select your project. Don&apos;t see it? Select
            &quot;Submit Project&quot; above, or reach out to{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.marketing.email.href}>
              {extractEmailAddress(
                FILECOIN_FOUNDATION_URLS.marketing.email.href,
              )}
            </TextLink>{' '}
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
