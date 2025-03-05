import { Heading } from '@filecoin-foundation/ui/Heading'

type PageHeaderProps = {
  kicker: string
  title: string
  subtitle: string
}

export function PageHeader({ kicker, title, subtitle }: PageHeaderProps) {
  return (
    <header className="flex max-w-3xl flex-col gap-8">
      <span>{kicker}</span>
      <div>
        <Heading tag="h1" variant="4xl-fluid">
          {title}
        </Heading>
        <div className="text-neutral-400">
          <Heading tag="h2" variant="4xl-fluid">
            {subtitle}
          </Heading>
        </div>
      </div>
    </header>
  )
}
