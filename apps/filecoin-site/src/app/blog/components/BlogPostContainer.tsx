type BlogPostContainerProps = {
  children: React.ReactNode
}

export function BlogPostContainer({ children }: BlogPostContainerProps) {
  return <div className="mx-auto max-w-4xl">{children}</div>
}
