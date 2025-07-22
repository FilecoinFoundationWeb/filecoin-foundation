import { CTALink } from './CTALink'
import { SimpleCard, type SimpleCardProps } from './SimpleCard'

type SimpleCardWithLogoProps = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  cta: NonNullable<SimpleCardProps['cta']>
}

export function SimpleCardWithLogo({
  title,
  description,
  cta,
}: SimpleCardWithLogoProps) {
  return (
    <li className="card-border-color relative flex h-full border">
      {/* @todo: replace with logo */}
      <div className="size-48 flex-shrink-0 bg-blue-100" />

      <SimpleCard
        as="div"
        border="only-left"
        title={title}
        description={description}
      />

      <CTALink
        inset
        href={cta.href}
        aria-label={cta.text}
        textClassName="absolute bottom-6 left-54"
      >
        {cta.text}
      </CTALink>
    </li>
  )
}
