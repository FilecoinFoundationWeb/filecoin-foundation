type StorageProviderSectionCardGridProps = {
  children: React.ReactNode
}

export function StorageProviderSectionCardGrid({
  children,
}: StorageProviderSectionCardGridProps) {
  return (
    <ul className="grid gap-12 md:grid-cols-2 md:gap-15 lg:grid-cols-3">
      {children}
    </ul>
  )
}
