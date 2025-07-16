type HeroSectionCardGridProps = {
  children: React.ReactNode
}

export function HeroSectionCardGrid({ children }: HeroSectionCardGridProps) {
  return (
    <ul className="grid gap-x-8 gap-y-15 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  )
}
