import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { Social } from '@filecoin-foundation/ui/Social'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { socialLinksWithIcons } from '@/utils/socialConfig'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSectionWithImage } from '@/components/PageSectionWithImage'

import { DIGEST_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'
import { getDigestArticlesData } from './utils/getDigestArticleData'
import { getAllDigestIssuesData } from './utils/getDigestIssueData'

export default async function Digest() {
  const allIssues = await getAllDigestIssuesData()
  const allArticles = await getDigestArticlesData()

  const issueNumbersThatHaveArticles = new Set(
    allArticles.map((article) => article.issueNumber),
  )
  const digestIssues = allIssues.filter((issue) =>
    issueNumbersThatHaveArticles.has(issue.issueNumber),
  )

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(DIGEST_SEO)}
      />

      <PageHeader
        kicker="DWeb Digest"
        title="A Publication Exploring DWeb Ideas and Principles"
        image={graphicsData.digest}
      />

      {digestIssues.map(({ title, description, issueNumber, kicker }) => (
        <PageSectionWithImage
          key={issueNumber}
          kicker={kicker}
          title={`DWeb Digest: ${title}`}
          image={graphicsData.dWebDigestCover}
          description={description}
          layout={Number(issueNumber) % 2 === 1 ? 'regular' : 'reversed'}
          cta={{
            href: PATHS.DIGEST.issueUrl({
              issueNumber,
            }),
            children: `Read Issue ${issueNumber}`,
          }}
        />
      ))}

      <CTASection
        kicker="Social Media"
        title="Follow us and join the conversation."
      >
        <div className="text-brand-primary-300">
          <Social linksWithIcons={socialLinksWithIcons} size={40} />
        </div>
      </CTASection>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: DIGEST_SEO.title },
  description: DIGEST_SEO.description,
  path: PATHS.DIGEST.path,
  image: graphicsData.digest.data.src,
})
