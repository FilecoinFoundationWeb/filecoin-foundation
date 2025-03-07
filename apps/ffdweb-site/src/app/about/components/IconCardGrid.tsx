type IconCardGridProps = {
  children: Array<React.ReactNode>
}

export function IconCardGrid({ children }: IconCardGridProps) {
  return <ul className="grid grid-cols-1 gap-16 lg:grid-cols-3">{children}</ul>
}
