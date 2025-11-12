export type PeerIDProps = {
  id: string
}

export function PeerID({ id }: PeerIDProps) {
  return (
    <span
      className="rounded-sm bg-zinc-50 px-1 py-0.5 font-mono text-sm font-medium text-zinc-800"
      title={id}
    >
      {id}
    </span>
  )
}
