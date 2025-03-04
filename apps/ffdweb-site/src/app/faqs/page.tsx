import { PageLayout } from '@filecoin-foundation/ui/PageLayout'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { PageHeader } from './components/PageHeader'
import faqsMarkdown from './faqs.md'

const { body } = faqsMarkdown

const SEO = {
  metaTitle: 'FFDW FAQs | Answers About Our Mission & the Decentralized Web',
  metaDescription:
    'Discover how FFDW supports open, decentralized tech, funds projects, and fosters a resilient internet. Get quick answers to your pressing questions.',
} as const

export default function FAQs() {
  return (
    <PageLayout gap={32}>
      <PageHeader
        kicker="FAQs"
        heading="Need help with something?"
        subheading="Here are our most frequently asked questions"
      />
      <MarkdownContent className="faq-content">{body}</MarkdownContent>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  ...SEO,
  overrideTitle: true,
})
