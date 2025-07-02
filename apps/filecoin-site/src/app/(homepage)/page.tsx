import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'

import { PageLayout } from '@filecoin-foundation/ui/PageLayout'

import { Button } from '@/components/Button'

export default function Home() {
  return (
    <PageLayout>
      <section>
        <h1 className="text-brand-500 text-4xl font-bold">Filecoin.io V3</h1>
        <p className="mt-4 text-lg text-zinc-600">
          This is the new Filecoin.io website, built with Next.js and Tailwind.
        </p>
      </section>

      <section className="flex gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary" href="https://example.com">
          Primary Link
        </Button>
        <Button variant="ghost" href="https://example.com">
          Ghost Link
        </Button>
      </section>

      <section className="-m-3 flex gap-3 bg-zinc-950 p-3">
        <Button variant="primaryDark">Primary Dark</Button>
        <Button variant="ghostDark">Ghost Dark</Button>
        <Button variant="primaryDark" href="https://example.com">
          Primary Dark Link
        </Button>
        <Button variant="ghostDark" href="https://example.com">
          Ghost Dark Link
        </Button>
      </section>

      <section className="flex gap-3">
        <Button variant="ghost" icon={GithubLogoIcon}>
          GitHub
        </Button>
        <Button variant="ghostDark" icon={GithubLogoIcon}>
          GitHub
        </Button>
      </section>
    </PageLayout>
  )
}
