import type { ExpandedNavItem } from '../constants/navigation'

export function pickNavItem(item: ExpandedNavItem) {
  return { label: item.label, href: item.href }
}
