import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

type IconCardProps = {
  icon: { src: IconProps['component']; style: 'regular' | 'fill' }
  title: string
  description: string
}

export function IconCard({ icon, title, description }: IconCardProps) {
  const { src: IconComponent, style } = icon

  return (
    <li>
      {style === 'regular' && (
        <Icon component={IconComponent} color="accent" size={64} />
      )}

      {style === 'fill' && (
        <div className="bg-brand-secondary-100 flex size-20 items-center justify-center text-neutral-950">
          <Icon component={IconComponent} size={40} color="inherit" />
        </div>
      )}

      <div className="max-w-readable mt-8 flex flex-col gap-3">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </li>
  )
}
