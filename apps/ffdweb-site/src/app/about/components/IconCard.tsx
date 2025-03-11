import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

type IconCardProps = {
  icon: {
    src: IconProps['component']
    style: 'regular' | 'fill'
    size: 40 | 64
    color: IconProps['color']
  }
  title: string
  description: string
}

export function IconCard({ icon, title, description }: IconCardProps) {
  const { src: IconComponent, style, size, color } = icon

  const iconWrapperStyles: Record<IconCardProps['icon']['style'], string> = {
    regular: 'text-brand-secondary-100',
    fill: 'bg-brand-secondary-100 flex size-20 items-center justify-center text-neutral-950',
  }

  return (
    <li>
      <div className={iconWrapperStyles[style]}>
        <Icon component={IconComponent} color={color} size={size} />
      </div>

      <div className="max-w-readable mt-8 flex flex-col gap-3">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </li>
  )
}
