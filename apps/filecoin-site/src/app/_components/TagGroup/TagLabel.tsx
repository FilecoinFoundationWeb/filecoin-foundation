export type TagProps = {
  children: string
}

export function TagLabel({ children }: TagProps) {
  return (
    <span className="tag-label inline-flex max-w-fit gap-1 text-xs font-light">
      {children}
    </span>
  )
}
