export type BadgeProps = {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="text-brand-950 border-brand-600 inline-block rounded-full border px-4 py-1 text-sm font-medium capitalize">
      {children}
    </span>
  )
}
