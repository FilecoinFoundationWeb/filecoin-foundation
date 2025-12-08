import type { ReactNode } from 'react'

type StorageProviderCardTextProps = {
  children: ReactNode
}

export function StorageProviderCardText({
  children,
}: StorageProviderCardTextProps) {
  return <span className="text-sm text-zinc-950">{children}</span>
}
