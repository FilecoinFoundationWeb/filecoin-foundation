import { NAV_LINKS } from './constants'
import { NavigationLink } from './NavigationLink'

export function DesktopNavigation() {
  return (
    <ul aria-label="Main navigation menu" className="hidden lg:flex lg:gap-6">
      {NAV_LINKS.map((link) => (
        <li key={link.path}>
          <NavigationLink href={link.path} label={link.label} />
        </li>
      ))}
    </ul>
  )
}
