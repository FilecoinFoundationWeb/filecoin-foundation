import CustomLink from '@/components/CustomLink'
import PageHeader from '@/components/PageHeader'
import StructuredDataScript from '@/components/StructuredDataScript'
import VideoArticle from '@/components/VideoArticle'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/get-involved.md'

import { PATHS } from '@/constants/paths'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.GET_INVOLVED)

const getInvolvedPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GOVERNANCE,
})

export default function GetInvolved() {
  return (
    <>
      <StructuredDataScript structuredData={getInvolvedPageBaseData} />
      <PageHeader title={title} description={description} />

      <section>
        <h2>Careers</h2>
        <p>
          The Filecoin Foundation is growing and hitting new milestones. And as
          we build, we&apos;re hiring for roles to promote the Filecoin
          ecosystem and the broader web3 movement. Check out our open roles.
        </p>
        <CustomLink href="https://boards.greenhouse.io/filecoinfoundation">
          View All
        </CustomLink>
      </section>

      <section>
        <header>
          <h2>Get Involved</h2>
          <p>How to get involved and key links.</p>
          <p>
            Join Filecoin Slack and participate in our bi-weekly community
            governance calls every other Tuesday.
          </p>
          <CustomLink href="https://filecoin.io/slack">
            Join the Community
          </CustomLink>
        </header>
        <ul>
          <li>
            <CustomLink href="http://hub.fil.org/events">
              <h3>Attend an event</h3>
              <p>Join or watch a Filecoin ecosystem event.</p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://www.meetup.com/Filecoin-San-Francisco">
              <h3>Join a meetup group</h3>
              <p>Find a group of people in your area who connect regularly.</p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://docs.filecoin.io/about-filecoin/ways-to-contribute/">
              <h3>Contribute to the Filecoin project</h3>
              <p>
                Shape the future by contributing to Filecoin’s code, research,
                or docs.
              </p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://filecoin.io/slack">
              <h3>Participate online</h3>
              <p>
                Participate in one of the many online forums about Filecoin,
                events, or the Filecoin Slack channel.
              </p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://sp.filecoin.io/">
              <h3>Become a storage provider or builder</h3>
              <p>
                Dive right in and become an essential part of the ecosystem.
              </p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://proto.school/">
              <h3>Learn more on ProtoSchool</h3>
              <p>
                Understand how it all works with interactive tutorials from
                ProtoSchool.
              </p>
            </CustomLink>
          </li>
        </ul>
      </section>

      <section>
        <header>
          <h2>Dive Deeper</h2>
          <p>
            Join our talks, community meetings, and other events. To explore
            them,{' '}
            <CustomLink href="https://www.youtube.com/channel/UCeM5ezNgFM1Sle_gIz-KMMA">
              visit our Youtube channel
            </CustomLink>
            .
          </p>
        </header>
        <div>
          <VideoArticle
            title="Accelerating the Filecoin Ecosystem"
            content="On these calls, we discussed recent DataCap allocation and application metrics, heard from various clients applying through the Large Dataset process, continued our discussion of Issue 217."
            link="https://www.youtube.com/watch?v=o0nPBRM-aMQ&t=3s"
          />

          <VideoArticle
            title="Welcome to Filecoin Plus Day"
            content="Learn about the fundamentals of Filecoin Plus, a program designed to incentivize useful storage on the Filecoin network."
            link="https://www.youtube.com/watch?v=wP4Bk8lBNUc"
          />
        </div>
      </section>
    </>
  )
}
