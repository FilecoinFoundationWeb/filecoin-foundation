import { PageLayout } from '@filecoin-foundation/ui/PageLayout'

import { Title } from '@/components/PageHeader/Title'

export default function Home() {
  return (
    <PageLayout>
      <section>
        <Title backgroundVariant="light">
          Preserving humanity’s most important information
        </Title>
        <p>
          Keep your data accessible, verifiable, and free from centralized
          control with the world’s largest decentralized storage network.
        </p>
      </section>
    </PageLayout>
  )
}
