import type { SectionProps } from '../../Section/Section'
import type {
  VariantClasses,
  NavigationMenuLinkProps as SharedNavigationMenuLinkProps,
} from '../NavigationMenuLink'

// Should be moved somewhere else maybe
export type TouchTarget = {
  visibleElementSize?: string | number
  touchAreaOffset?: string
  touchAreaPadding: string
}

export type LocalNavigationMenuLinkProps<Variants extends VariantClasses> =
  Omit<SharedNavigationMenuLinkProps<Variants>, 'variants'> & {
    variant?: keyof Variants
  }

export type NavItem = { label: string; href: string }

export type ExpandedNavItem = NavItem & { description: string }

export type NavigationMenuItem = {
  label: string
  items: Array<{
    title: string
    links: Array<ExpandedNavItem>
  }>
}

export type VariantMapping = Record<
  SectionProps['backgroundVariant'],
  'light' | 'dark'
>
