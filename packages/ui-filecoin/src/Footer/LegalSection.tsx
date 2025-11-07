import { BaseLink } from '../BaseLink'
import type { LinkItemProps } from '../Navigation/types'
import { InternalTextLink } from '../TextLink/InternalTextLink'

type CreatorProps = {
  companyName: string
  websiteUrl: string
  logo: React.ReactNode
}

type LegalSectionProps = {
  baseDomain: string
  creators: Array<CreatorProps>

  leadingText?: string
  legalItems?: Array<LinkItemProps>
}

export function LegalSection({
  baseDomain,
  leadingText = 'Created by',
  creators,
  legalItems,
}: LegalSectionProps) {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 py-16 sm:flex-row md:gap-16">
      <div className="flex items-center gap-4">
        <span className="text-xs text-white">{leadingText}</span>

        <div className="flex items-center gap-6">
          {creators.map(({ companyName, websiteUrl, logo }) => (
            <BaseLink
              key={companyName}
              href={websiteUrl}
              baseDomain={baseDomain}
              className="focus:brand-outline text-xs text-(--color-paragraph-text) hover:text-white"
              aria-label={`${companyName} – Visit website`}
            >
              {logo}
            </BaseLink>
          ))}
        </div>
      </div>

      {legalItems && (
        <ul className="order-1 flex items-center gap-10 text-sm text-(--color-paragraph-text) md:gap-16">
          {legalItems.map(({ href, label }) => (
            <li key={href}>
              <InternalTextLink href={href}>{label}</InternalTextLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
