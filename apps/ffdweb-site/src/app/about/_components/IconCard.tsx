import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

type IconCardProps = {
  icon: { src: IconProps['component']; style: 'regular' | 'fill' }
  title: string
  description: string
}

export function IconCard({ icon, title, description }: IconCardProps) {
  const { src: IconComponent, style } = icon

  return (
    <li className="icon-card">
      {style === 'regular' && (
        <Icon component={IconComponent} size={64} color="accent" />
      )}

      {style === 'fill' && (
        <div className="bg-brand-secondary-100 flex size-20 items-center justify-center text-neutral-950">
          <Icon component={IconComponent} size={40} color="inherit" />
        </div>
      )}

      <h3 className="mb-3 mt-8 text-lg font-bold text-neutral-50">{title}</h3>
      <p className="text-neutral-50">{description}</p>
    </li>
  )
}
