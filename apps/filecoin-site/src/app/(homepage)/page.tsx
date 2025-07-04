import { Container } from '@/components/Container'
import { Title } from '@/components/PageHeader/Title'
import { PageSection } from '@/components/PageSection'

export default function Home() {
  return (
    <Container>
      <PageSection>
        <Title backgroundVariant="light">
          Preserving humanity's most important information
        </Title>
        <p>
          Keep your data accessible, verifiable, and free from centralized
          control with the world's largest decentralized storage network.
        </p>
      </PageSection>
    </Container>
  )
}
