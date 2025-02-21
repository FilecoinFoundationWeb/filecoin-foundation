import { createMetadata } from '@/utils/createMetadata'

export default function Home() {
  return (
    <>
      <section>
        <h1>A Better Web for Everyone</h1>
        <button>View Projects</button>
      </section>

      <section>
        <span>About FFDW</span>
        <h2>FFDW Exists to Help Build a Better Web</h2>
        <p>
          Filecoin Foundation for the Decentralized Web (FFDW) is a 501(c)(3)
          nonprofit with a mission to guarantee humanity&apos;s most important
          information survives. FFDW works with academics, developers, and
          organizations to advance the benefits of open, decentralized
          technologies, initiatives that accelerate their adoption, and
          community building that fosters a network of decentralized web
          advocates and builders.
        </p>
        <a href="#">More About FFDW</a>
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
        <button>View All Projects</button>
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
        <a href="#">View All Learning Resources</a>
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
        <a href="#">Read FFDW Digest</a>
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
        <button>View All</button>
      </section>

      <section>
        <span>Get Involved</span>
        <h2>Join the Conversation and Help Us Build a Better Internet</h2>
        <button>Contact Us</button>
      </section>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'Rebuilding the Internet for Good',
  metaDescription:
    'Filecoin Foundation for the Decentralized Web is a nonprofit organization committed to preserving humanity’s most important information by funding the development of open-source tools',
})
