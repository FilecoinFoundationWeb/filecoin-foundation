import { createMetadata } from '@/utils/createMetadata'

export default function DigestArticle() {
  return (
    <>
      <article>
        <time>Lorem ipsum dolor sit amet.</time>

        <h1>Lorem ipsum dolor sit amet.</h1>
      </article>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: '', // [Headline of Article] | FFDW
  metaDescription: '', // [Article Standfirst]
  overrideTitle: true,
})
