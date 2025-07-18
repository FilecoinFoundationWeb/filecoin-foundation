import { Button } from '@/components/Button'

export type StorageProviderCardProps = {
  name: string
}

export function StorageProviderCard({ name }: StorageProviderCardProps) {
  return (
    <li>
      <article className="space-y-8 border border-zinc-200 p-8">
        <p className="text-lg font-medium">{name}</p>

        <Button href="#" variant="ghost" className="w-full">
          Visit Provider
        </Button>
      </article>
    </li>
  )
}
