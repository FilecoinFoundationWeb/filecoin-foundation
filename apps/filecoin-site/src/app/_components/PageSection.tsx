import { Container } from '@/components/Container'
import { Section, type SectionProps } from '@/components/Section'

type PageSectionProps = {
  backgroundVariant: SectionProps['backgroundVariant']
  children: React.ReactNode
}

export const pageSectionPadding = 'pt-8 pb-24 sm:py-36'

export function PageSection({ backgroundVariant, children }: PageSectionProps) {
  return (
    <Section backgroundVariant={backgroundVariant}>
      <Container>
        <div className={pageSectionPadding}>{children}</div>
      </Container>
    </Section>
  )
}
