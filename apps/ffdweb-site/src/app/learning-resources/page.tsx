import type { Metadata } from 'next'

export default function LearningResources() {
  return (
    <>
      <header>
        <span>Learning Resources</span>
        <h1>Explore Decentralized Tech with Content from FFDW and Beyond</h1>
      </header>

      <section>
        <h2>Contribute</h2>
        <h3>Add to FFDW&apos;s Learning Resources Page</h3>
        <button>Submit a Resource</button>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'FFDW Learning Resources | Decentralized Tech & Social Impact',
  description:
    'Discover case studies, tutorials, and tools on decentralized technologies driving social change. Learn, share, and help shape the future with FFDW.',
}
