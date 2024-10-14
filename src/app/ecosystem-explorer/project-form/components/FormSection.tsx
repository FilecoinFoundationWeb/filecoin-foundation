import { Heading } from '@/components/Heading'

type FormSectionProps = {
  title: string
  description?: React.ReactNode
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

      {description && (
        <div className="mt-2">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
        {children}
      </div>
    </section>
  )
}
