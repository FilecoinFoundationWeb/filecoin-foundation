export type TagProps = {
  children: string
}

export function TagLabel({ children }: TagProps) {
  return (
    <span className="font-mono text-sm text-[var(--color-paragraph-text-strong)] capitalize">
      {children}
    </span>
  )
}
