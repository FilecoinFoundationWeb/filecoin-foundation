import { Container } from '@/components/Container'
import { Section, type SectionProps } from '@/components/Section'

type PageSectionProps = {
  children: React.ReactNode
  bg?: SectionProps['bg']
}

export function PageSection({ children, bg }: PageSectionProps) {
  return (
    <Section bg={bg}>
      <Container>
        <div className="py-36">{children}</div>
      </Container>
    </Section>
  )
}
