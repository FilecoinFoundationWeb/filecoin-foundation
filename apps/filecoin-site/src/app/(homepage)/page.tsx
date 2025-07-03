import { PageLayout } from '@filecoin-foundation/ui/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <section>
        <h1 className="text-brand-500 text-4xl font-bold">Filecoin.io V3</h1>
        <p className="mt-4 text-lg text-zinc-600">
          This is the new Filecoin.io website, built with Next.js and Tailwind.
        </p>
      </section>
    </PageLayout>
  )
}
