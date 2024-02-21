import { GetInvolvedList } from '@/components/GetInvolvedList'
import { PageHeader } from '@/components/PageHeader'
import { ResourcesList } from '@/components/ResourcesList'
import { Section } from '@/components/Section'
import { SectionDeepDive } from '@/components/SectionDeepDive'
import { TextLink } from '@/components/TextLink'
import { VideoArticle } from '@/components/VideoArticle'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/home.md'

const { title, description, seo } = attributes

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

export const metadata = createMetadata(seo, PATHS.HOME.path)

export default function Home() {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        link={{ href: PATHS.GET_INVOLVED.path, text: 'Get Involved' }}
      />

      <Section
        title="What We Do"
        content="We exist to help people build their vision on Filecoin and to support the growth of the decentralized web."
      />

      <section>
        <p>
          Filecoin Foundation (FF) and Lockheed Martin are working together to
          develop a program for deploying the Interplanetary File System (IPFS)
          in space.
        </p>
        <TextLink href="https://www.youtube.com/watch?v=6OY4xAs3Grg?si=1ySPxDLCx9Ha6bbD">
          Watch Video
        </TextLink>
        <iframe
          allowFullScreen
          width="560"
          height="315"
          aria-label="Embedded YouTube Video"
          src="https://www.youtube.com/embed/WqwVq0921Y8?si=ycT2_CNrzZc2CVxG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        />
      </section>

      <section>
        <p>
          The Foundation provides resources, guidance, and fair, equitable
          principles to help the ecosystem flourish, and to open up the internet
          for a safer, stronger, and more reliable environment where everyone,
          not just a few giants, can thrive.
        </p>
      </section>

      <Section
        kicker="Resources"
        title="Explore the Filecoin Project Ecosystem and Tooling"
        content="Decentralized networks aren’t bound by geography. The brightest minds around the world are working together to advance the next generation of the internet."
      >
        <ResourcesList />
      </Section>

      <Section
        kicker="Dev Grants"
        title="We fund talented and eager teams that want to work with us to build a more robust, efficient, and decentralized web."
        content="We're enabling more contributors to solve open problems and engage with the Filecoin project."
        link={{ href: PATHS.GRANTS.path, text: 'Learn More' }}
      />

      <Section
        kicker="Get Involved"
        title="Learn How To Get Involved in the Filecoin Community"
        content="The Filecoin community includes thousands of developers, technologists, users, and enthusiasts all over the world."
        link={{ href: FILECOIN_URLS.social.slack.href, text: 'Learn More' }}
      >
        <GetInvolvedList />
      </Section>

      <SectionDeepDive>
        <VideoArticle
          title="FIL Austin"
          description="The first major IRL meetup of the Filecoin Community gathered hundreds of contributors from across the Filecoin ecosystem."
          href="https://www.youtube.com/watch?v=9Db0rXvscYY"
        />
        <VideoArticle
          title="DWeb Gateway @ Davos"
          description="The Decentralized Web Gateway brings together leaders, thinkers and activists to discuss the evolution of the internet and its ramifications for society."
          href="https://www.youtube.com/watch?v=hg8e3_gKtwU"
        />
      </SectionDeepDive>
    </>
  )
}
