import { Heading, type HeadingProps } from '@/components/Heading'

type SectionSubContentProps = {
  title: HeadingProps['children']
  description?: string
  children?: React.ReactNode
}

export function SectionSubContent({
  title,
  description,
  children,
}: SectionSubContentProps) {
  return (
    <div>
      <div className="max-w-3xl">
        <Heading
          tag="h2"
          variant="3xl-medium"
          className="section-sub-content-heading-text"
        >
          {title}
        </Heading>
        {description && (
          <p className="section-sub-content-description-text pt-6 text-lg leading-6 font-normal text-balance">
            {description}
          </p>
        )}
      </div>
      {children && <div className="mt-20">{children}</div>}
    </div>
  )
}
