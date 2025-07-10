import { Container } from '@/components/Container'

type BlogPostContainerProps = {
  children: React.ReactNode
}

export function BlogPostContainer({ children }: BlogPostContainerProps) {
  return (
    <Container>
      <div className="mx-auto max-w-4xl">{children}</div>
    </Container>
  )
}
