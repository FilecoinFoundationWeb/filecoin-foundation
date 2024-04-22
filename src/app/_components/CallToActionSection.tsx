import { Heading } from '@/components/Heading'

type CallToActionSectionProps = {
  title: string
  children?: React.ReactNode
}

export function CallToActionSection({
  title,
  children,
}: CallToActionSectionProps) {
  return (
    <section className="m-auto space-y-6 text-left sm:text-center [&>p]:max-w-[60ch]">
      <Heading tag="h2" variant="3xl">
        {title}
      </Heading>
      {children}
    </section>
  )
}
