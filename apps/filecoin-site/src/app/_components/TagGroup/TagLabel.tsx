export type TagProps = {
  children: string
}

export function TagLabel({ children }: TagProps) {
  return (
    <span className="font-mono text-sm text-zinc-800 capitalize">
      {children}
    </span>
  )
}
