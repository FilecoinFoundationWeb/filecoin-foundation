import type { NextServerSearchParams } from '@/types/searchParams'

import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
  PATHS,
} from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { getCategoryDataFromDirectory } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { DescriptionText } from '@/components/DescriptionText'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

import { EcosystemProjectForm } from './components/EcosystemProjectForm'
import { ErrorNotification } from './components/ErrorNotification'
import { SuccessMessage } from './components/SuccessMessage'
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

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

const subCategoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
)

type Props = {
  searchParams: NextServerSearchParams
}

export default function EcosystemExplorerProjectForm({ searchParams }: Props) {
  const safeParams = SearchParamsSchema.safeParse(searchParams)

  if (safeParams.data?.status === 'success') {
    return <SuccessMessage prNumber={safeParams.data.prNumber} />
  }

  const initialValues = getFormInitialValue()

  const descriptionWithCta = [
    <>
      {header.description[0]} To update an existing project, send an email to{' '}
      <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.ecosystem.email.href}>
        {extractEmailAddress(FILECOIN_FOUNDATION_URLS.ecosystem.email.href)}
      </ExternalTextLink>
      .
    </>,
    <>
      {header.description[1]} Share your project page on X and tag{' '}
      <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.social.twitter.href}>
        {FILECOIN_FOUNDATION_URLS.social.twitter.handle}
      </ExternalTextLink>{' '}
      to be considered!
    </>,
  ]

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />

      <div className="space-y-4 md:max-w-readable">
        <PageHeader.Title>{header.title}</PageHeader.Title>
        <DescriptionText>{descriptionWithCta}</DescriptionText>
      </div>

      <EcosystemProjectForm
        categoryData={categoryData}
        subCategoryData={subCategoryData}
        initialValues={initialValues}
      />
      {safeParams.data?.status === 'error' && (
        <ErrorNotification message={safeParams.data.message} />
      )}
    </PageLayout>
  )
}
