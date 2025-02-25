import Link from 'next/link'

import { PATHS } from '@/constants/paths'
import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <section>
        <h1>A Better Web for Everyone</h1>
        <Link href={PATHS.PROJECTS.path}>View Projects</Link>
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
        <Link href={PATHS.ABOUT.path}>More About FFDW</Link>
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
        <Link href={PATHS.PROJECTS.path}>View All Projects</Link>
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
            <a href="#">Explore</a>
          </div>
          <div>
            <h3>Interactive Tutorials</h3>
            <a href="#">Explore</a>
          </div>
          <div>
            <h3>Videos</h3>
            <a href="#">Explore</a>
          </div>
        </div>
        <Link href={PATHS.LEARNING_RESOURCES.path}>
          View All Learning Resources
        </Link>
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
        <Link href={PATHS.DIGEST.path}>Read FFDW Digest</Link>
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
              <a href="#">Read more</a>
            </div>
          ))}
        </div>
        <Link href={PATHS.BLOG.path}>View All</Link>
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
