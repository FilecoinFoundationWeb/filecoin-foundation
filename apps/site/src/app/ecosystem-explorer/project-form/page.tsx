import type { AsyncNextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'
import { mapCMSOptionsToListboxFormat } from '@/utils/mapCMSOptionsToListboxFormat'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { DescriptionText } from '@/components/DescriptionText'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'

import { EcosystemProjectForm } from './components/EcosystemProjectForm'
import { ErrorNotification } from './components/ErrorNotification'
import { SuccessMessage } from './components/SuccessMessage'
import { PROJECT_FORM_DESCRIPTION } from './constants/projectFormDescription'
import { SearchParamsSchema } from './schema/SearchParamsSchema'
import { generateStructuredData } from './utils/generateStructuredData'
import { getFormInitialValue } from './utils/getFormInitialValue'

const { header, seo } = getFrontmatter({
  path: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM,
  zodParser: BaseFrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo,
  path: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
})

const categories = getEcosystemCMSCategories()
const categoryOptions = mapCMSOptionsToListboxFormat(categories)

type Props = {
  searchParams: AsyncNextServerSearchParams
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

      <div className="space-y-4 md:max-w-readable">
        <PageHeader.Title>{header.title}</PageHeader.Title>
        <DescriptionText>{PROJECT_FORM_DESCRIPTION}</DescriptionText>
      </div>

      <EcosystemProjectForm
        categoryOptions={categoryOptions}
        initialValues={initialValues}
      />
      {safeParams.data?.status === 'error' && (
        <ErrorNotification message={safeParams.data.message} />
      )}
    </PageLayout>
  )
}
