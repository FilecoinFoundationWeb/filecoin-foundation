import { Heading } from '@/components/Heading'

export function HeadingWithIcon({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="text-brand-300" aria-hidden={true}>
        {icon}
      </span>
      <Heading tag="h3" variant="lg">
        {children}
      </Heading>
    </div>
  )
}
