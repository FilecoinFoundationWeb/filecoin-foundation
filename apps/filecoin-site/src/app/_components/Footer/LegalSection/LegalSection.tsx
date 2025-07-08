import Link from 'next/link'

import { legalLinks } from '@/constants/navigation'

import { Container } from '@/components/Container'

import { FilecoinFoundationLogo } from './FilecoinFoundationLogo'

export function LegalSection() {
  return (
    <>
      <hr className="mb-12 border-zinc-400/10 md:mb-16" />
      <Container>
        <div className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row md:gap-16">
          <span className="flex items-center gap-3 text-xs text-zinc-400">
            Managed by <FilecoinFoundationLogo />
          </span>
          <ul className="order-1 flex items-center space-x-10 text-sm text-zinc-400 md:space-x-16">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
