import { clsx } from 'clsx'

import { Container } from '@/components/Container'
import { pageSectionPadding } from '@/components/PageSection'

type RelatedArticlesContainerProps = {
  children: React.ReactNode
}

export function RelatedArticlesContainer({
  children,
}: RelatedArticlesContainerProps) {
  return (
    <Container>
      <div className={clsx(pageSectionPadding, 'mx-auto max-w-5xl')}>
        {children}
      </div>
    </Container>
  )
}
