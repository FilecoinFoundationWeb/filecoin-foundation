import type {
  VariantClasses,
  ButtonProps as SharedButtonProps,
} from '@filecoin-foundation/ui/Button'

export type LocalButtonProps<Variants extends VariantClasses> = Omit<
  SharedButtonProps<Variants>,
  'baseDomain' | 'variants'
> & {
  variant?: keyof Variants
}
