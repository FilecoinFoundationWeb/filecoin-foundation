import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/ecosystem-explorer/project-form.md'

import { createMetadata } from '@/utils/createMetadata'

import { DescriptionText } from '@/components/DescriptionText'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { CreateOrUpdateRouter } from './components/CreateOrUpdateRouter'
import { ErrorNotification } from './components/ErrorNotification'
import { SuccessMessage } from './components/SuccessMessage'
import { SearchParamsSchema } from './schema/SearchParamsSchema'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
})

type Props = {
  searchParams: NextServerSearchParams
}

export default function EcosystemProjectFormPage({ searchParams }: Props) {
  const safeParams = SearchParamsSchema.safeParse(searchParams)

  if (safeParams.data?.status === 'success') {
    return <SuccessMessage prNumber={safeParams.data.prNumber} />
  }

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />

      <div className="md:max-w-readable">
        <div className="space-y-4">
          <PageHeader.Title>{header.title}</PageHeader.Title>
          <DescriptionText>{header.description}</DescriptionText>
        </div>

        <CreateOrUpdateRouter />
      </div>

      {safeParams.data?.status === 'error' && (
        <ErrorNotification message={safeParams.data.message} />
      )}
    </PageLayout>
  )
}
