import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { attributes } from '@/content/pages/ecosystem-explorer/project-form.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { PageHeader } from '@/components/PageHeader'

import { getGroupedCategoryOptions } from '../utils/getGroupedCategoryOptions'

import { EcosystemProjectForm } from './components/EcosystemProjectForm'
import { ErrorNotification } from './components/ErrorNotification'
import { SuccessMessage } from './components/SuccessMessage'
import { PROJECT_FORM_DESCRIPTION } from './constants/projectFormDescription'
import { SearchParamsSchema } from './schema/SearchParamsSchema'
import { generateStructuredData } from './utils/generateStructuredData'
import { getFormInitialValue } from './utils/getFormInitialValue'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

const groupedCategoryOptions = getGroupedCategoryOptions()

type Props = {
  searchParams: AsyncQueryParams
}

export default async function EcosystemExplorerProjectForm(props: Props) {
  const searchParams = await props.searchParams
  const safeParams = SearchParamsSchema.safeParse(searchParams)

  if (safeParams.data?.status === 'success') {
    return <SuccessMessage prNumber={safeParams.data.prNumber} />
  }

  const initialValues = getFormInitialValue()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />

      <div className="md:max-w-readable space-y-4">
        <PageHeader.Title>{header.title}</PageHeader.Title>
        <DescriptionText>{PROJECT_FORM_DESCRIPTION}</DescriptionText>
      </div>

      <EcosystemProjectForm
        groupedCategoryOptions={groupedCategoryOptions}
        initialValues={initialValues}
      />
      {safeParams.data?.status === 'error' && (
        <ErrorNotification message={safeParams.data.message} />
      )}
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: seo.title,
  description: seo.description,
  image: graphicsData.ecosystem.data.src,
  path: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
})
