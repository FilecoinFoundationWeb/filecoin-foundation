import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'
import clsx from 'clsx'

import { footerLegalItems, footerNavigationItems } from '@/constants/navigation'

import { Logo } from '@/components/Logo'
import { Social } from '@/components/Social'

const FOOTER_GAP = 'gap-16'
const FOOTER_SECTION_GAP = 'gap-10'

export function Footer() {
  return (
    <footer className={clsx('grid grid-cols-1', FOOTER_GAP)}>
      <div
        className={clsx(
          'grid grid-cols-1 lg:auto-cols-max lg:grid-flow-col',
          FOOTER_GAP,
        )}
      >
        <Logo />
        <nav
          aria-label="Footer navigation"
          className={clsx(
            'grid grid-cols-1 sm:auto-cols-fr sm:grid-flow-col',
            FOOTER_GAP,
          )}
        >
          {Object.entries(footerNavigationItems).map(([title, items]) => (
            <div
              key={title}
              className={clsx('grid content-start', FOOTER_SECTION_GAP)}
            >
              <h3 className="text-base font-bold capitalize">{title}</h3>
              <ul className="grid gap-3">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <InternalTextLink href={href}>{label}</InternalTextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={clsx('grid content-start', FOOTER_SECTION_GAP)}>
            <h3 className="text-base font-bold capitalize">Follow us</h3>
            <Social />
          </div>
        </nav>
      </div>

      <div className="grid gap-8">
        <hr />
        <div className="grid grid-rows-2 gap-5 lg:grid-cols-2 lg:grid-rows-1 lg:items-baseline">
          <ul
            className={clsx(
              'grid auto-cols-max grid-flow-col',
              FOOTER_SECTION_GAP,
            )}
          >
            {footerLegalItems.map(({ label, href }) => (
              <li key={href} className="fit-content">
                <InternalTextLink href={href}>{label}</InternalTextLink>
              </li>
            ))}
          </ul>

          <p className="text-sm lg:text-end">
            &copy; {new Date().getFullYear()} Filecoin Foundation for
            Decentralized Web{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
