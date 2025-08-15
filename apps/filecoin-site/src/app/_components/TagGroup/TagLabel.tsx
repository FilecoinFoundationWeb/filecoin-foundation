export type TagProps = {
  children: string
}

export function TagLabel({ children }: TagProps) {
  return (
    <span className="font-mono text-sm text-[var(--color-text-paragraph-strong)] capitalize">
      {children}
    </span>
  )
}
