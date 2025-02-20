import type { Metadata } from 'next'

export default function BlogPost() {
  return (
    <>
      <article>
        <time>Lorem ipsum dolor sit amet.</time>

        <h1>Lorem ipsum dolor sit amet.</h1>
      </article>
    </>
  )
}

export const metadata: Metadata = {
  title: '', // [Headline of Blog] | FFDW
  description: '', // [Blog Standfirst]
}
