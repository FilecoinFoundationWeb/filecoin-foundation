type CardGridContainerProps = {
  children: React.ReactNode
}

export function CardGridContainer({ children }: CardGridContainerProps) {
  return <div className="max-w-4xl">{children}</div>
}
