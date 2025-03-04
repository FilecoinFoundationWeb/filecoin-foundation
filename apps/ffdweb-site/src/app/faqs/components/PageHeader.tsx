import { Heading } from '@filecoin-foundation/ui/Heading'

type TitleProps = {
  children: string
}

type PageHeaderProps = {
  heading: TitleProps['children']
  subheading: TitleProps['children']
  kicker?: string
}

export function PageHeader({ kicker, heading, subheading }: PageHeaderProps) {
  return (
    <header className="flex max-w-3xl flex-col gap-8">
      {kicker && <span>{kicker}</span>}
      <div className="flex flex-col gap-0">
        <PageHeader.Title>{heading}</PageHeader.Title>
        <PageHeader.Subtitle>{subheading}</PageHeader.Subtitle>
      </div>
    </header>
  )
}

PageHeader.Title = function Title({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl-fluid">
      {children}
    </Heading>
  )
}

PageHeader.Subtitle = function Subtitle({ children }: TitleProps) {
  return (
    <div className="text-neutral-400">
      <Heading tag="h2" variant="4xl-fluid">
        {children}
      </Heading>
    </div>
  )
}
