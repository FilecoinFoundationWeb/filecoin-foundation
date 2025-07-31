import { NAV_LINKS } from './constants'
import { NavigationLink } from './NavigationLink'

export function DesktopNavigation() {
  return (
    <ul aria-label="Main navigation menu" className="hidden lg:flex lg:gap-9">
      {NAV_LINKS.map(({ path, label }) => (
        <li key={path}>
          <NavigationLink on="desktop" href={path} label={label} />
        </li>
      ))}
    </ul>
  )
}
