export type PeerIDProps = {
  id: string
}

export function PeerID({ id }: PeerIDProps) {
  return (
    <p className="font-mono text-sm font-medium text-zinc-800 bg-zinc-50 px-1 py-0.5 rounded-sm">
      {id}
    </p>
  )
}
