type LatestNewsSectionCardGridProps = {
  children: React.ReactNode
}

export function LatestNewsSectionCardGrid({
  children,
}: LatestNewsSectionCardGridProps) {
  return (
    <ul className="grid gap-x-15 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </ul>
  )
}
