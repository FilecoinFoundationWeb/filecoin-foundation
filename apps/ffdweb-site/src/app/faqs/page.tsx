import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { PageHeader } from './components/PageHeader'
import FAQsMarkdown from './faqs.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = FAQsMarkdown

const FAQS_SEO = {
  title: 'FFDW FAQs | Answers About Our Mission & the Decentralized Web',
  description:
    'Discover how FFDW supports open, decentralized tech, funds projects, and fosters a resilient internet. Get quick answers to your pressing questions.',
} as const

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
