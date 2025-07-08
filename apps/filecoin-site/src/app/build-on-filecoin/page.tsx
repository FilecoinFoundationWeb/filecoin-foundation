import { Title } from '@/components/PageHeader/Title'
import { PageSection } from '@/components/PageSection'

export default function BuildOnFilecoin() {
  return (
    <PageSection backgroundVariant="light">
      <Title backgroundVariant="light">
        Build on Filecoin with programmable storage
      </Title>
      <p>
        Deploy Ethereum-compatible smart contracts on the Filecoin Virtual
        Machine (FVM) and power dApps with verifiable, persistent data—perfect
        for AI, cross-chain storage, and storage-native apps.
      </p>
    </PageSection>
  )
}
