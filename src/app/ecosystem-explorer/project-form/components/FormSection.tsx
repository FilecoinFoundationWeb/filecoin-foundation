import { Heading } from '@/components/Heading'

type FormSectionProps = {
  title: string
  description?: string
} & React.ComponentProps<'section'>

export function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="mb-10">
      <Heading tag="h3" variant="xl">
        {title}
      </Heading>
      {description && <p className="mt-2">{description}</p>}

      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
        {children}
      </div>
    </section>
  )
}
