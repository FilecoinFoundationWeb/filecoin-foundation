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
      {/* @todo: add logo */}
      <div
        className="h-44 w-full flex-shrink-0 sm:h-full sm:w-42"
        style={{ backgroundColor: logoBackgroundColor }}
      />

      <div
        aria-hidden="true"
        className="card-border-color border-b sm:border-r sm:border-b-0"
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
        textClassName="absolute bottom-6 sm:left-48 left-6"
      >
        {cta.text}
      </CTALink>
    </li>
  )
}
