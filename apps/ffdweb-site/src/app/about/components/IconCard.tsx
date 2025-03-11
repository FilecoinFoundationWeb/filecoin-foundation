import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

type IconCardProps = {
  title: string
  description: string
  icon: {
    src: IconProps['component']
    style: keyof typeof iconStyles
  }
}

const iconStyles = {
  regular: {
    container: 'text-brand-secondary-100',
    size: 64,
  },
  fill: {
    container:
      'bg-brand-secondary-100 flex size-20 items-center justify-center text-neutral-950',
    size: 40,
  },
} as const

export function IconCard({ icon, title, description }: IconCardProps) {
  const { src: IconComponent, style } = icon
  const iconStyle = iconStyles[style]

  return (
    <li>
      <div className={iconStyle.container}>
        <Icon component={IconComponent} size={iconStyle.size} />
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
