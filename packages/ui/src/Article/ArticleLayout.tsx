type ArticleLayoutProps = {
  children: React.ReactNode
}

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return <div className="m-auto max-w-2xl space-y-16">{children}</div>
}
