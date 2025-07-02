import Link from 'next/link'

import clsx from 'clsx'

import { legalLinks } from '@/constants/navigation'

import { CONTAINER_SPACING } from '../Footer'

import { FilecoinFoundationLogo } from './FilecoinFoundationLogo'

export function LegalSection() {
  return (
    <>
      <hr className="border-zinc-400/10" />
      <div
        className={clsx(
          'flex flex-col-reverse items-center justify-between gap-16 sm:flex-row',
          CONTAINER_SPACING,
        )}
      >
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
    </>
  )
}
