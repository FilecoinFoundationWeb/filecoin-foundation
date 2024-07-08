import { CurrencyCircleDollar } from '@phosphor-icons/react/dist/ssr'

import type { IconProps } from '@/components/Icon'

// ! change naming
type DataProps = {
  icon: IconProps['component']
  title: string
  description: string
}

// ! change naming
export const data: DataProps[] = [
  {
    icon: CurrencyCircleDollar,
    title: '',
    description: '',
  },
]
