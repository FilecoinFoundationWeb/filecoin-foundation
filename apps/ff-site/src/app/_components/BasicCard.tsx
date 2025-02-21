type BasicCardProps = {
  children: React.ReactNode
}

export function BasicCard({ children }: BasicCardProps) {
  return (
    <div className="rounded-lg border border-brand-500 p-4">{children}</div>
  )
}
