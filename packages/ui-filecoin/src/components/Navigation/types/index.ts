export type NavItem = { label: string; href: string }
export type ExpandedNavItem = NavItem & { description: string }

export type NavigationMenuItem = {
  label: string
  items: Array<{
    title: string
    links: Array<ExpandedNavItem>
  }>
}
