import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { PageHeaderTitle } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'

import { projectFormPageItem } from '@/qino/items/projectFormPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { getGroupedCategoryOptions } from '../utils/getGroupedCategoryOptions'

import { EcosystemProjectForm } from './components/EcosystemProjectForm'
import { ErrorNotification } from './components/ErrorNotification'
import { SuccessMessage } from './components/SuccessMessage'
import { PROJECT_FORM_DESCRIPTION } from './constants/projectFormDescription'
import { SearchParamsSchema } from './schema/SearchParamsSchema'
import { generateStructuredData } from './utils/generateStructuredData'
import { getFormInitialValue } from './utils/getFormInitialValue'

const groupedCategoryOptions = getGroupedCategoryOptions()

type Props = {
  searchParams: AsyncQueryParams
}

export default async function EcosystemExplorerProjectForm(props: Props) {
  const { header, seo } = await projectFormPageItem.getEntry()

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
        <PageHeaderTitle>{header.title}</PageHeaderTitle>
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

export async function generateMetadata() {
  const { seo } = await projectFormPageItem.getEntry()

  return createMetadata({
    title: seo.title,
    description: seo.description,
    image: graphicsData.ecosystem.data.src,
    path: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
  })
}
