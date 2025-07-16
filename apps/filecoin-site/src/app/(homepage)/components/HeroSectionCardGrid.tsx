type HeroSectionCardGridProps = {
  children: React.ReactNode
}

export function HeroSectionCardGrid({ children }: HeroSectionCardGridProps) {
  return <ul className="grid grid-cols-3 gap-8">{children}</ul>
}
