import type {
  VariantClasses,
  NavigationMenuLinkProps as SharedNavigationMenuLinkProps,
} from '../NavigationMenuLink'

export type LinkItemProps = {
  href: string
  label: string
  description?: string
}

export type LocalNavigationMenuLinkProps<Variants extends VariantClasses> =
  Omit<SharedNavigationMenuLinkProps<Variants>, 'variants' | 'baseDomain'> & {
    variant: keyof Variants
  }
