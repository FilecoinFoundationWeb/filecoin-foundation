type StorageProviderListLayoutProps = {
  children: React.ReactNode
}

export function StorageProviderListLayout({
  children,
}: StorageProviderListLayoutProps) {
  return <div className="mt-20 space-y-20">{children}</div>
}
