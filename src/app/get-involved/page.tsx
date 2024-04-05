import { GetInvolvedList } from '@/components/GetInvolvedList'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { SectionDeepDive } from '@/components/SectionDeepDive'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'
import { VideoArticle } from '@/components/VideoArticle'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/get-involved.md'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_URLS,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'

const { header, seo } = attributes
export const metadata = createMetadata(seo, PATHS.GET_INVOLVED.path)

const getInvolvedPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GET_INVOLVED.path,
})

export default function GetInvolved() {
  return (
    <>
      <StructuredDataScript structuredData={getInvolvedPageBaseData} />
      <PageHeader title={header.title} description={header.description} />

      <section>
        <Heading tag="h2" variant="xl">
          Careers
        </Heading>
        <p>
          The Filecoin Foundation is growing and hitting new milestones. And as
          we build, we&apos;re hiring for roles to promote the Filecoin
          ecosystem and the broader Web3 movement. Check out our open roles.
        </p>
        <TextLink href={FILECOIN_FOUNDATION_URLS.greenhouse}>View All</TextLink>
      </section>

      <Section
        kicker="Get Involved"
        title="How To Get Involved and Key Links"
        content="Join Filecoin Slack and participate in our bi-weekly community governance calls every other Tuesday."
        link={{
          href: FILECOIN_URLS.social.slack.href,
          text: 'Join the Community',
        }}
      >
        <GetInvolvedList />
      </Section>

      <SectionDeepDive>
        <VideoArticle
          title="Accelerating the Filecoin Ecosystem"
          description="On these calls, we discussed recent DataCap allocation and application metrics, heard from various clients applying through the Large Dataset process, continued our discussion of Issue 217."
          href="https://www.youtube.com/watch?v=o0nPBRM-aMQ&t=3s"
        />
        <VideoArticle
          title="Welcome to Filecoin Plus Day"
          description="Learn about the fundamentals of Filecoin Plus, a program designed to incentivize useful storage on the Filecoin network."
          href="https://www.youtube.com/watch?v=wP4Bk8lBNUc"
        />
      </SectionDeepDive>
    </>
  )
}
