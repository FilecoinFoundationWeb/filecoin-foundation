import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { PageHeader } from './components/PageHeader'
import { FAQS_SEO } from './constants/seo'
import FAQsMarkdown from './faqs.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = FAQsMarkdown

export default function FAQs() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(FAQS_SEO)} />

      <PageHeader
        kicker="FAQs"
        title="Need help with something?"
        subtitle="Here are our most frequently asked questions"
      />
      <MarkdownContent>{body}</MarkdownContent>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: FAQS_SEO.title },
  description: FAQS_SEO.description,
  path: PATHS.FAQS.path,
})
