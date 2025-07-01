import {
  BracketsAngleIcon,
  ShieldCheckIcon,
} from '@phosphor-icons/react/dist/ssr'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'

import { Card } from '@/components/Card'

export default function Home() {
  return (
    <PageLayout>
      <section>
        <h1 className="text-brand-500 text-4xl font-bold">Filecoin.io V3</h1>
        <p className="mt-4 text-lg text-zinc-600">
          This is the new Filecoin.io website, built with Next.js and Tailwind.
        </p>
      </section>
      <ul className="bg-zinc-950">
        <Card
          as="li"
          title="Diversify revenue streams"
          description="Earn from both storage and retrieval deals — turning idle capacity and hardware into income in an ecosystem built for the future."
          variant="dark"
        />
      </ul>
      <div className="bg-zinc-950">
        <Card
          as="div"
          title="Earning Filecoin"
          description="Storage providers earn Filecoin by storing data for clients, and computing cryptographic proofs to verify storage across time."
          variant="dark"
          cta={{
            href: '/',
            text: 'Become a storage provider',
          }}
        />
      </div>
      <Card
        as="li"
        title="Verifiable storage"
        description="Cryptographic proofs ensure your data remains accessible and tamper-proof with onchain audits that guarantee authenticity and integrity."
        variant="light"
        icon={{
          component: ShieldCheckIcon,
          position: 'top',
        }}
      />
      <Card
        as="div"
        title="Build on Filecoin"
        description="Learn how to store AI data, deploy dApps, and integrate smart contracts with guides, tools, and a growing dev community."
        variant="light"
        icon={{
          component: BracketsAngleIcon,
          position: 'side',
        }}
      />
    </PageLayout>
  )
}
