import { clsx } from 'clsx'

import { Container } from '@/components/Container'
import { pageSectionStyle } from '@/components/PageSection'

type RelatedArticlesContainerProps = {
  children: React.ReactNode
}

export function RelatedArticlesContainer({
  children,
}: RelatedArticlesContainerProps) {
  return (
    <Container>
      <div className={clsx(pageSectionStyle, 'mx-auto max-w-5xl')}>
        {children}
      </div>
    </Container>
  )
}
