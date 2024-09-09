import { useForm } from 'react-hook-form'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/ecosystem-explorer/project-form.md'

import { createMetadata } from '@/utils/createMetadata'

import { ControlledForm } from '@/components/Form/ControlledForm'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
})

export default function EcosystemExplorerProjectForm() {
  const methods = useForm()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader title={header.title} description={header.description} />

      <ControlledForm methods={methods} onSubmit={console.log}>
        <Heading tag="h3" variant="xl">
          Personal Information
        </Heading>
        <p className="mt-2">
          We'll use this to verify your site updates and reach out to you in
          case of questions.
        </p>

        <Heading tag="h3" variant="xl">
          Project Details
        </Heading>
      </ControlledForm>
    </PageLayout>
  )
}
