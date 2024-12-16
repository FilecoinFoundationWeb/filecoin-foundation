type TagGroupContainerProps = {
  children: React.ReactNode
}

export function TagGroupContainer({ children }: TagGroupContainerProps) {
  return <span className="flex gap-2">{children}</span>
}
