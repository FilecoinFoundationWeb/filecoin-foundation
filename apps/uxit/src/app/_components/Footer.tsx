import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

export function Footer() {
  return (
    <footer className="fixed right-0 bottom-0 left-0 border-t border-gray-200 bg-white py-4 text-center text-sm text-slate-500">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Filecoin Foundation. Content on this
        site is licensed under a{' '}
        <ExternalTextLink href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International license
        </ExternalTextLink>
      </p>
    </footer>
  )
}
