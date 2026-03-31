import { Suspense } from 'react'

import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/filecoin-plus/monthly-updates.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { MonthlyUpdatesContent } from './components/MonthlyUpdatesContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getMonthlyUpdatesData } from './utils/getMonthlyUpdateData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default async function MonthlyUpdates() {
  const updates = await getMonthlyUpdatesData()

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={generateStructuredData(updates, seo)}
      />

      <section>
        <div className="mb-6 max-w-readable space-y-4">
          <Heading tag="h1" variant="4xl">
            {header.title}
          </Heading>
          <DescriptionText>{header.description}</DescriptionText>
        </div>

        <Suspense>
          <MonthlyUpdatesContent updates={updates} />
        </Suspense>
      </section>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  image: graphicsData.filPlus.data.src,
  path: PATHS.FIL_PLUS_MONTHLY_UPDATES.path,
})
