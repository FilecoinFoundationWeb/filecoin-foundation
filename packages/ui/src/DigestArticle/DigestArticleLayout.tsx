type DigestArticleLayoutProps = {
  children: React.ReactNode
}

export function DigestArticleLayout({ children }: DigestArticleLayoutProps) {
  return <div className="m-auto max-w-2xl space-y-16">{children}</div>
}
