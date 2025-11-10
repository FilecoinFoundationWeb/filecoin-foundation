import type { ComponentType, SVGProps } from 'react'

import { BaseLink } from '../BaseLink'
import {
  InternalTextLink,
  type InternalTextLinkProps,
} from '../TextLink/InternalTextLink'
import { type GenericLinkType } from '../TextLink/types'

type LegalLinkItem = Pick<InternalTextLinkProps, 'href'> & {
  label: string
}

type CreatorProps = {
  companyName: string
  websiteUrl: string
  LogoComponent: ComponentType<SVGProps<SVGSVGElement>>
}

type LegalSectionProps = {
  baseDomain: string
  creators: Array<CreatorProps>
  leadingText?: string
  legalItems?: Array<LegalLinkItem>
  InternalLinkComponent?: GenericLinkType
}

export function LegalSection({
  baseDomain,
  leadingText = 'Created by',
  creators,
  legalItems,
  InternalLinkComponent,
}: LegalSectionProps) {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 py-16 sm:flex-row md:gap-16">
      <div className="flex items-center gap-4">
        <span className="text-xs text-white">{leadingText}</span>

        <div className="flex items-center gap-6">
          {creators.map(({ companyName, websiteUrl, LogoComponent }) => (
            <BaseLink
              key={companyName}
              href={websiteUrl}
              baseDomain={baseDomain}
              className="focus:brand-outline text-xs text-(--color-paragraph-text) hover:text-white"
              aria-label={`${companyName} – Visit website`}
            >
              <LogoComponent height={24} aria-hidden="true" focusable="false" />
            </BaseLink>
          ))}
        </div>
      </div>

      {legalItems && (
        <ul className="order-1 flex items-center gap-10 text-sm text-(--color-paragraph-text) md:gap-16">
          {legalItems.map(({ href, label }) => (
            <li key={href}>
              <InternalTextLink
                href={href}
                InternalLinkComponent={InternalLinkComponent}
              >
                {label}
              </InternalTextLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
