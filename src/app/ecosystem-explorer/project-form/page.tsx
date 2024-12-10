import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { DescriptionText } from '@/components/DescriptionText'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getCategoriesFromDirectory } from '../utils/getCategoriesFromDirectory'

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

const { categories, subcategories } = getCategoriesFromDirectory()

const categoryOptions = categories.map((category) => ({
  id: category.slug,
  name: category.name,
}))

const subCategoryOptions = subcategories.map((subcategory) => ({
  id: subcategory.slug,
  name: subcategory.name,
}))

type Props = {
  searchParams: NextServerSearchParams
}

export default function EcosystemExplorerProjectForm({ searchParams }: Props) {
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
        subCategoryOptions={subCategoryOptions}
        initialValues={initialValues}
      />
      {safeParams.data?.status === 'error' && (
        <ErrorNotification message={safeParams.data.message} />
      )}
    </PageLayout>
  )
}
