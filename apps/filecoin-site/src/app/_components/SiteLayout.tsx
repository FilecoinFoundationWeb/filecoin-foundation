import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SharedSiteLayout
      font="font-sans"
      Navigation={() => <header className="bg-zinc-50 p-8">Header</header>}
      Footer={() => <footer className="bg-zinc-50 p-8">Footer</footer>}
    >
      {children}
    </SharedSiteLayout>
  )
}
