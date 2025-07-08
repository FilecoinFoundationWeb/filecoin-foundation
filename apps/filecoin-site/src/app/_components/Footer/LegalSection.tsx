import Link from 'next/link'

import { legalLinks } from '@/constants/navigation'

import { FilecoinFoundationLogo } from './FilecoinFoundationLogo'

export function LegalSection() {
  return (
    <div className="my-16 flex flex-col-reverse items-center justify-between gap-8 sm:flex-row md:gap-16">
      <span className="flex items-center gap-2 text-xs text-zinc-400">
        Managed by <FilecoinFoundationLogo />
      </span>
      <ul className="order-1 flex items-center gap-10 text-sm text-zinc-400 md:gap-16">
        {legalLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
