type BlogPostsGridProps = {
  children: React.ReactNode
}

export function BlogPostsGrid({ children }: BlogPostsGridProps) {
  return <ul className="grid gap-x-8 gap-y-15 lg:grid-cols-2">{children}</ul>
}
