import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'

import { PATHS } from '@/constants/paths'
import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'

import placeholderImage from '@/page-assets/graphics/placeholder.webp'

export default function Home() {
  return (
    <>
      <section>
        <PageHeader
          fontVariant="homepage"
          title="A Better Web for Everyone"
          mobileLayout="image-above-content"
          image={{
            data: placeholderImage,
            alt: 'A Better Web for Everyone',
          }}
          cta={{
            href: PATHS.PROJECTS.path,
            text: 'View Projects',
          }}
        />
        <InternalTextLink href={PATHS.PROJECTS.path}>
          View Projects
        </InternalTextLink>
      </section>

      <section>
        <span>About FFDW</span>
        <h2>FFDW Exists to Help Build a Better Web</h2>
        <p>
          Filecoin Foundation for the Decentralized Web (FFDW) is the sister
          nonprofit of Filecoin Foundation. FFDW is a 501(c)(3) nonprofit
          committed to preserving humanity’s most important information and
          supporting the development and adoption of decentralized technologies.
          While Filecoin Foundation stewards the Filecoin network’s future, FFDW
          promotes the broader development of the decentralized web (DWeb).
        </p>
        <p>
          FFDW’s work includes supporting open source software and protocols
          that safeguard critical data from centralized control and single
          points of failure. FFDW also empowers institutions to preserve
          vulnerable information by leveraging the resilience of decentralized
          storage.
        </p>
        <InternalTextLink href={PATHS.ABOUT.path}>
          More About FFDW
        </InternalTextLink>
      </section>

      <section>
        <span>Featured Projects</span>
        <h2>Building Decentralized Solutions for Real-World Impact</h2>
        <div>
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do...
              </p>
            </div>
          ))}
        </div>
        <InternalTextLink href={PATHS.PROJECTS.path}>
          View All Projects
        </InternalTextLink>
      </section>

      <section>
        <span>Learning Resources</span>
        <h2>Discover the Power of Decentralization</h2>
        <p>
          Learn how decentralized technologies are creating a better future for
          a better web. Explore educational content, research papers, tutorials,
          interactive content, and more resources from FFDW and beyond.
        </p>

        <div>
          <div>
            <h3>Use Cases</h3>
            <InternalTextLink href="#">Explore</InternalTextLink>
          </div>
          <div>
            <h3>Interactive Tutorials</h3>
            <InternalTextLink href="#">Explore</InternalTextLink>
          </div>
          <div>
            <h3>Videos</h3>
            <InternalTextLink href="#">Explore</InternalTextLink>
          </div>
        </div>
        <InternalTextLink href={PATHS.LEARNING_RESOURCES.path}>
          View All Learning Resources
        </InternalTextLink>
      </section>

      <section>
        <span>FFDW Digest</span>
        <h2>Decentralization and Why it Matters</h2>
        <p>
          The DWeb Digest is an online magazine featuring articles from industry
          experts who teach people from newbies clearly to pique and satisfy
          their high digital ambition while to digital insights and learnings
          for digital future developers to build up the community inside DWeb to
          create a decentralized future.
        </p>
        <InternalTextLink href={PATHS.DIGEST.path}>
          Read FFDW Digest
        </InternalTextLink>
      </section>

      <section>
        <span>Latest News From FFDW</span>
        <h2>Updates from FFDW and DWeb Community</h2>
        <div>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <span>New</span>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do...
              </p>
              <InternalTextLink href="#">Read more</InternalTextLink>
            </div>
          ))}
        </div>
        <InternalTextLink href={PATHS.BLOG.path}>View All</InternalTextLink>
      </section>

      <CTASection
        kicker="Get Involved"
        title="Join the Conversation and Help Us Build a Better Internet"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'Rebuilding the Internet for Good',
  metaDescription:
    'Filecoin Foundation for the Decentralized Web is a nonprofit organization committed to preserving humanity’s most important information by funding the development of open-source tools',
})
