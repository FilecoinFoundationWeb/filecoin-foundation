import { Container } from './Container'
import { Section, type SectionProps } from './Section/Section'

type PageSectionProps = {
  backgroundVariant: SectionProps['backgroundVariant']
  paddingVariant?: keyof typeof paddingVariants
  children: React.ReactNode
}

const paddingVariants = {
  default: 'py-25 md:py-30',
  bottomNone: 'pt-25 md:pt-30 pb-0',
  topNone: 'pt-0 pb-25 md:pb-30',
  topCompact: 'pt-20 pb-25 md:pb-30',
  none: 'py-0',
}

export function PageSection({
  backgroundVariant,
  paddingVariant = 'default',
  children,
}: PageSectionProps) {
  return (
    <Section backgroundVariant={backgroundVariant}>
      <Container>
        <div className={paddingVariants[paddingVariant]}>{children}</div>
      </Container>
    </Section>
  )
}
