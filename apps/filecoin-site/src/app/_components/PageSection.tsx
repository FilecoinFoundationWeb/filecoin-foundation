import { Container } from '@/components/Container'
import { Section, type SectionProps } from '@/components/Section'

type PageSectionProps = {
  backgroundVariant: SectionProps['backgroundVariant']
  children: React.ReactNode
}

export function PageSection({ backgroundVariant, children }: PageSectionProps) {
  return (
    <Section backgroundVariant={backgroundVariant}>
      <Container>
        <div className="py-25 md:py-35">{children}</div>
      </Container>
    </Section>
  )
}
