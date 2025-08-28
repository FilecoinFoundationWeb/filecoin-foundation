import type { ExpandedNavItem } from '../constants/navigation'

export function keepNavItem(item: ExpandedNavItem) {
  return { label: item.label, href: item.href }
}
