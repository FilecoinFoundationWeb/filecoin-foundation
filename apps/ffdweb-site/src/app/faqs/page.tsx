import {
  ExternalTextLink,
  InternalTextLink,
} from '@filecoin-foundation/ui/TextLink'

import { PATHS } from '@/constants/paths'
import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

export default function FAQs() {
  return (
    <>
      <>
        <span>FAQs</span>
        <h1>
          Need help with something? Here are our most frequently asked
          questions.
        </h1>
      </>

      <section>
        <article>
          <h2>
            What is the difference between Filecoin Foundation and Filecoin
            Foundation for the Decentralized Web?
          </h2>
          <p>
            Filecoin Foundation (FF) focuses primarily on the Filecoin network,
            supporting the growth of the Filecoin community and ecosystem.
            Filecoin Foundation for the Decentralized Web (FFDW) is a 501(c)(3)
            nonprofit that focuses on charitable activities that support and
            promote the development of open, decentralized technologies,
            including but not limited to Filecoin and related technologies.
          </p>
        </article>

        <article>
          <h2>
            How does FFDW support the development of the decentralized web?
          </h2>
          <p>
            FFDW does this through education on the benefits of decentralized
            technologies, initiatives that accelerate their adoption, and
            community building that fosters a network of decentralized web
            advocates and builders. This includes{' '}
            <InternalTextLink href={PATHS.PROJECTS.path}>
              collaborations
            </InternalTextLink>{' '}
            with developers, researchers, nonprofit organizations, and others to
            build robust decentralized infrastructure and introduce and
            highlight new and impactful use cases for decentralized
            technologies.
          </p>
        </article>

        <article>
          <h2>
            What types of projects does the FFDW prioritize for funding and
            support?
          </h2>
          <p>
            At FFDW, we prioritize projects that contribute to the development
            of decentralized technologies, including infrastructure, tools, and
            applications. We evaluate projects based on their commitment to
            decentralized and open-source principles. For example, Internet
            Archive is leveraging the Filecoin network to make digital culture
            more resilient; Starling Lab is leveraging decentralized storage to
            establish trust in digital assets; Guardian Project is building
            decentralized tools for human rights defenders, journalists, and
            activists; Distributed Press is creating alternatives to centralized
            publishing platforms; and Spritely is creating ways to authorize and
            process data without centralized gatekeepers –– see more in the{' '}
            <InternalTextLink href="/blog/filecoin-foundation-2024-annual-report">
              2024 Report
            </InternalTextLink>
            . All these projects are designed to drive the development and
            adoption of open, decentralized technologies. FFDW works
            hand-in-hand with funded projects to drive meaningful change.
          </p>
        </article>

        <article>
          <h2>
            What educational resources does the FFDW offer to promote
            decentralized technologies?
          </h2>
          <p>
            Check out the{' '}
            <InternalTextLink href={PATHS.LEARNING_RESOURCES.path}>
              Learning Resources
            </InternalTextLink>{' '}
            page! We have a variety of education resources – sourced from FFDW
            and beyond – including reading, research, webinars, and more,
            offering a look into decentralized technologies and its
            applications. These resources start from an introductory level and
            expand upward for more experienced users and builders. The{' '}
            <InternalTextLink href={PATHS.DIGEST.path}>
              DWeb Digest
            </InternalTextLink>{' '}
            is also a deep dive into different perspectives from the
            decentralized web community.
          </p>
        </article>

        <article>
          <h2>
            How does the FFDW collaborate with other organizations and
            initiatives in the decentralized web ecosystem?
          </h2>
          <p>
            FFDW actively collaborates with other groups across the
            decentralized web ecosystem following the principle that collective
            experience and resources can lead to greater impact! In the past,
            FFDW has co-funded projects with{' '}
            <ExternalTextLink href="https://artizen.fund/">
              Artizen
            </ExternalTextLink>{' '}
            and{' '}
            <ExternalTextLink href="https://unfinished.com/">
              Unfinished
            </ExternalTextLink>
            co-hosted the Social Impact Summit with Blockchain Law Center for
            Social Good at the{' '}
            <ExternalTextLink href="https://www.usfca.edu/law/engaged-learning/center-law-tech-social-good">
              University of San Francisco
            </ExternalTextLink>
            ; and participated in{' '}
            <ExternalTextLink href="https://dwebcamp.org/">
              DWeb Camp
            </ExternalTextLink>
            , among other things. Interested in working together?{' '}
            <ExternalTextLink href={FFDW_URLS.email}>
              Get in touch with our FFDW team
            </ExternalTextLink>
            .
          </p>
        </article>

        <article>
          <h2>Where can I find updates on the progress on FFDW projects?</h2>
          <p>
            Check out the{' '}
            <InternalTextLink href={PATHS.PROJECTS.path}>
              Projects
            </InternalTextLink>{' '}
            page. Additionally, updates can be found on our{' '}
            <InternalTextLink href={PATHS.BLOG.path}>blog</InternalTextLink> and
            across social media channels:{' '}
            <a href={FFDW_URLS.social.twitter}>X</a>,{' '}
            <a href={FFDW_URLS.social.youTube}>YouTube</a>, and{' '}
            <a href={FFDW_URLS.social.linkedIn}>LinkedIn</a>.
          </p>
        </article>
      </section>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW FAQs | Answers About Our Mission & the Decentralized Web',
  metaDescription:
    'Discover how FFDW supports open, decentralized tech, funds projects, and fosters a resilient internet. Get quick answers to your pressing questions.',
  overrideTitle: true,
})
