import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

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
          <a href={FFDW_URLS.social.twitter}>X</a>
          <a href={FFDW_URLS.social.linkedIn}>LinkedIn</a>
          <a href={FFDW_URLS.social.youTube}>YouTube</a>
        </nav>
      </section>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW DWeb Digest | In-Depth Exploration of the Decentralized Web',
  metaDescription:
    'Explore FFDW DWeb Digest for expert insights on cognitive liberty, privacy, and crypto policy. Discover the evolving landscape of digital autonomy and blockchain.',
  overrideTitle: true,
})
