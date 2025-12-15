type StorageProviderSectionHeadingProps = {
  children: string
}

export function StorageProviderSectionHeading({
  children,
}: StorageProviderSectionHeadingProps) {
  return <h4 className="text-4xl font-medium">{children}</h4>
}
