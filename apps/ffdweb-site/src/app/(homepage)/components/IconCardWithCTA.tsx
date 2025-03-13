import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

import { CTALink } from '@/components/CTALink'

export type IconCardWithCTAProps = {
  title: string
  icon: IconProps['component']
  cta: {
    href: string
    text: string
  }
}

export function IconCardWithCTA({ title, icon, cta }: IconCardWithCTAProps) {
  return (
    <li className="border-brand-primary-700 relative flex items-center gap-6 border-2 p-6 sm:h-auto md:flex-col md:items-start">
      <div className="accent-icon-regular">
        <Icon component={icon} size={64} />
      </div>
      <div className="flex flex-col gap-3">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <div className="h-6"></div>
        <CTALink
          isCardLink
          cardLinkClassName="bottom-6 md:left-6 left-28"
          href={cta.href}
        >
          {cta.text}
        </CTALink>
      </div>
    </li>
  )
}
