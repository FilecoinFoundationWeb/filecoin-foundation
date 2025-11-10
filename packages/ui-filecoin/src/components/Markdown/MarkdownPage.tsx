type MarkdownPageProps = {
  children: React.ReactNode
}

export function MarkdownPage({ children }: MarkdownPageProps) {
  return <article className="prose">{children}</article>
}
