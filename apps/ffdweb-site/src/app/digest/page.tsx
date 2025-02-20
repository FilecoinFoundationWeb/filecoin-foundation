import type { Metadata } from 'next'

export default function Digest() {
  return (
    <>
      <header>
        <span>FFDW Digest</span>
        <h1>The Go-to Publication for Exploring DWeb Ideas and Principles</h1>
      </header>

      <section>
        <span>Social Media</span>
        <h2>Follow us and join the conversation.</h2>
        <nav>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </nav>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'FFDW DWeb Digest | In-Depth Exploration of the Decentralized Web',
  description:
    'Explore FFDW DWeb Digest for expert insights on cognitive liberty, privacy, and crypto policy. Discover the evolving landscape of digital autonomy and blockchain.',
}
