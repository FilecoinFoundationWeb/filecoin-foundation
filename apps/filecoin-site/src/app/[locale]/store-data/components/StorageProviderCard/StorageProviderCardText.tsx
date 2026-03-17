import type { ReactNode } from 'react'

type StorageProviderCardTextProps = {
  children: ReactNode
}

export function StorageProviderCardText({
  children,
}: StorageProviderCardTextProps) {
  return <div className="text-sm text-zinc-950">{children}</div>
}
