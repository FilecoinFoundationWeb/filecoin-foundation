import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { PageHeader } from './components/PageHeader'
import FAQsMarkdown from './faqs.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = FAQsMarkdown

const SEO = {
  metaTitle: 'FFDW FAQs | Answers About Our Mission & the Decentralized Web',
  metaDescription:
    'Discover how FFDW supports open, decentralized tech, funds projects, and fosters a resilient internet. Get quick answers to your pressing questions.',
} as const

export default function FAQs() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />

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
  ...SEO,
  path: PATHS.FAQS.path,
  overrideTitle: true,
})
