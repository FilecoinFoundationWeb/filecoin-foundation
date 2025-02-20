import type { Metadata } from 'next'

export default function Projects() {
  return (
    <>
      <header>
        <span>Projects</span>
        <h1>Discover Current and Past FFDW Project Partners</h1>
      </header>

      <section>
        <span>Work with FFDW</span>
        <h2>Help FFDW Build a Better Web for Everyone</h2>
        <button>Contact Us</button>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'FFDW Projects | Explore Partnerships Advancing the Decentralized Web',
  description:
    'Explore how FFDW collaborates with nonprofits to build open-source solutions, preserve vital data, and shape a decentralized internet. See our partners in action.',
}
