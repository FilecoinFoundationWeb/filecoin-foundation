type PageSectionProps = {
  children: React.ReactNode
}

export function PageSection({ children }: PageSectionProps) {
  return <section className="py-36">{children}</section>
}
