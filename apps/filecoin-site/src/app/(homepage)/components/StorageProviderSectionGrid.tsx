type StorageProviderSectionGridProps = {
  children: React.ReactNode
}

export function StorageProviderSectionGrid({
  children,
}: StorageProviderSectionGridProps) {
  return (
    <ul className="grid gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
      {children}
    </ul>
  )
}
