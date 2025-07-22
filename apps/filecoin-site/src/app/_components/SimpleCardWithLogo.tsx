import { CTALink } from './CTALink'
import { SimpleCard, type SimpleCardProps } from './SimpleCard'

export type SimpleCardWithLogoProps = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  cta: NonNullable<SimpleCardProps['cta']>
  logoBackgroundColor: `#${string}`
}

export function SimpleCardWithLogo({
  title,
  description,
  cta,
  logoBackgroundColor,
}: SimpleCardWithLogoProps) {
  return (
    <li className="card-border-color relative flex h-full flex-col border sm:flex-row">
      {/* @todo: replace with logo */}
      <div
        className="card-border-color h-44 w-full flex-shrink-0 border-b sm:size-48 sm:border-r sm:border-b-0"
        style={{ backgroundColor: logoBackgroundColor }}
      />

      <SimpleCard
        as="div"
        border="none"
        title={title}
        description={description}
      />

      <CTALink
        inset
        href={cta.href}
        aria-label={cta.text}
        textClassName="absolute bottom-6 sm:left-54 left-6"
      >
        {cta.text}
      </CTALink>
    </li>
  )
}
