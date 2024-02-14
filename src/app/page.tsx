import { GetInvolvedList } from '@/components/GetInvolvedList'
import PageHeader from '@/components/PageHeader'
import { ResourcesList } from '@/components/ResourcesList'
import { Section } from '@/components/Section'
import { TextLink } from '@/components/TextLink'
import VideoArticle from '@/components/VideoArticle'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/home.md'

const { title, description, seo } = attributes

import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.HOME)

export default function Home() {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        link={{ url: '/get-involved', text: 'Get Involved' }}
      />

      <Section
        title="What we do"
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
        link={{ url: '/grants/', text: 'Learn More' }}
      />

      <Section
        kicker="Get Involved"
        title="Learn how to get involved in the Filecoin community"
        content="The Filecoin community includes thousands of developers, technologists, users, and enthusiasts all over the world."
        link={{ url: 'https://filecoin.io/slack', text: 'Learn More' }}
      >
        <GetInvolvedList />
      </Section>

      <Section
        title="Dive Deeper"
        content="Join our talks, community meetings, and other events. To explore them, visit our Youtube channel."
        link={{
          url: 'https://www.youtube.com/channel/UCeM5ezNgFM1Sle_gIz-KMMA',
          text: 'Visit our Youtube channel',
        }}
      >
        <VideoArticle
          title="FIL Austin"
          content="The first major IRL meetup of the Filecoin Community gathered hundreds of contributors from across the Filecoin ecosystem."
          link="https://www.youtube.com/watch?v=9Db0rXvscYY"
        />
        <VideoArticle
          title="DWeb Gateway @ Davos"
          content="The Decentralized Web Gateway brings together leaders, thinkers and activists to discuss the evolution of the internet and its ramifications for society."
          link="https://www.youtube.com/watch?v=hg8e3_gKtwU"
        />
      </Section>
    </>
  )
}
