type CommunitySectionCardGridProps = {
  children: React.ReactNode
}

export function CommunitySectionCardGrid({
  children,
}: CommunitySectionCardGridProps) {
  return <ul className="grid max-w-4xl gap-8 md:grid-cols-2">{children}</ul>
}
