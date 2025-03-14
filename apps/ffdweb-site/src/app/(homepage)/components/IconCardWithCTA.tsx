import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

import { CTALink, type CTALinkProps } from '@/components/CTALink'

export type IconCardWithCTAProps = {
  title: string
  icon: IconProps['component']
  cta: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
}

export function IconCardWithCTA({ title, icon, cta }: IconCardWithCTAProps) {
  return (
    <li className="border-brand-primary-700 relative flex items-center gap-6 border-2 p-6 md:flex-col md:items-start">
      <div className="accent-icon-regular">
        <Icon component={icon} size={64} />
      </div>
      <div className="flex flex-col gap-3 pb-8">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <CTALink
          inset
          href={cta.href}
          textClassName="absolute bottom-6 md:left-6 left-28"
        >
          {cta.text}
        </CTALink>
      </div>
    </li>
  )
}
