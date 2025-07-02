import { SharePost } from '@/components/SharePost'

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <SharePost
        articleTitle="Blog Post Title"
        path="/blog/blog-post-title"
        baseUrl="https://filecoin.io"
      />
    </div>
  )
}
