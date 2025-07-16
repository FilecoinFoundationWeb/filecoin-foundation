type NetworkSectionCardGridProps = {
  children: React.ReactNode
}

export function NetworkSectionCardGrid({
  children,
}: NetworkSectionCardGridProps) {
  return (
    <ul className="grid gap-16 md:grid-cols-2 xl:grid-cols-4">{children}</ul>
  )
}
