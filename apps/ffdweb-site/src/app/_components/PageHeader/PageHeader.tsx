import { clsx } from 'clsx'

import type { PageHeaderImageProps } from '@filecoin-foundation/ui/PageHeader'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { Button } from '@/components/Button'
import { Kicker } from '@/components/Kicker'

import { PageHeaderImage } from './PageHeaderImage'
import { type PageHeaderTitleProps, PageHeaderTitle } from './PageHeaderTitle'

type PageHeaderProps = {
  title: PageHeaderTitleProps['children']
  image: PageHeaderImageProps
  kicker?: string
  cta?: CTAProps
  isHomepage?: boolean
}

export function PageHeader({
  title,
  image,
  kicker,
  cta,
  isHomepage,
}: PageHeaderProps) {
  return (
    <header className="grid items-center gap-16 lg:grid-cols-2">
      <div
        className={clsx(
          'grid grid-cols-1 content-start justify-center gap-8 text-center',
          'sm:justify-items-center sm:gap-16 lg:order-1 lg:max-w-lg lg:justify-items-start lg:text-left',
          isHomepage ? 'order-2' : 'order-1',
        )}
      >
        <div className="flex flex-col gap-8">
          {kicker && <Kicker as="div">{kicker}</Kicker>}
          <PageHeaderTitle isHomepage={isHomepage}>{title}</PageHeaderTitle>
        </div>

        {cta && (
          <Button href={cta.href} aria-label={cta.ariaLabel}>
            {cta.text}
          </Button>
        )}
      </div>

      <div
        className={clsx(
          'flex justify-center lg:order-2 lg:justify-end',
          isHomepage ? 'order-1' : 'order-2',
        )}
      >
        {image && <PageHeaderImage {...image} />}
      </div>
    </header>
  )
}
