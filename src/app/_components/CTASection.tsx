import { Heading } from '@/components/Heading'

type CTASectionProps = {
  title: string
  children?: React.ReactNode
}

export function CTASection({ title, children }: CTASectionProps) {
  return (
    <section className="m-auto space-y-6 text-left sm:text-center [&>p]:max-w-[60ch]">
      <Heading tag="h2" variant="3xl">
        {title}
      </Heading>
      {children}
    </section>
  )
}
