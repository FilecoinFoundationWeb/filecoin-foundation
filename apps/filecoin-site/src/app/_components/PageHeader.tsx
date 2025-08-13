import { Button } from '@/components/Button'
import { Heading, type HeadingProps } from '@/components/Heading'
import { Kicker, type KickerProps } from '@/components/Kicker'

type PageHeaderProps = {
  title: HeadingProps['children']
  kicker?: KickerProps['children']
  description?: string
  cta?: React.ReactElement<typeof Button>
}

export function PageHeader({
  title,
  kicker,
  description,
  cta,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="flex max-w-3xl flex-col gap-6">
        {kicker && <Kicker size="md">{kicker}</Kicker>}
        <Heading tag="h1" variant="section-heading">
          {title}
        </Heading>

        {description && (
          <p className="font-sans tracking-tighter text-pretty text-[var(--text-color-paragraph-important)] md:text-xl">
            {description}
          </p>
        )}
      </div>

      {cta && <div className="mt-10 grid md:block">{cta}</div>}
    </header>
  )
}
