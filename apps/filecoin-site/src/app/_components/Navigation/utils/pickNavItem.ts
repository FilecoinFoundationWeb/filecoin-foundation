import type { ExpandedNavItem } from '../constants/navigation'

export function pickNavItem({ label, href }: ExpandedNavItem) {
  return { label, href }
}
