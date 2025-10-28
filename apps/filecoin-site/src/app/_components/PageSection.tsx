import { Section, type SectionProps } from '@filecoin-foundation/ui-filecoin/Section'

import { Container } from '@/components/Container'

type PageSectionProps = {
  backgroundVariant: SectionProps['backgroundVariant']
  paddingVariant?: keyof typeof paddingVariants
  children: React.ReactNode
}

const paddingVariants = {
  default: 'py-24 md:py-32',
  wide: 'py-28 md:py-40',
  medium: 'py-12 md:py-20',
  compact: 'pt-10 pb-28 md:pb-32',
  none: 'py-0',
  topOnly: 'pt-24 md:pt-32 pb-0',
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
