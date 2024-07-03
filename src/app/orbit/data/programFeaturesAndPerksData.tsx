import {
  CurrencyCircleDollar,
  Gift,
  MegaphoneSimple,
  PenNib,
} from '@phosphor-icons/react/dist/ssr'

import type { IconProps } from '@/components/Icon'

type ProgramFeaturesAndPerksDataProps = {
  icon: IconProps['component']
  title: string
  description: string
}

export const programFeaturesAndPerksData: ProgramFeaturesAndPerksDataProps[] = [
  {
    icon: CurrencyCircleDollar,
    title: 'Funding and Promotion',
    description:
      'Host events in your community with funding and promotion from the Filecoin Foundation.',
  },
  {
    icon: PenNib,
    title: 'Content Creation',
    description:
      'Create tutorials, translate technical documentation and serve as administrators for community communication channels.',
  },
  {
    icon: Gift,
    title: 'Exclusive Rewards',
    description:
      'Earn points through Orbit activities to unlock limited edition swag, travel reimbursements to network events, speaking slots at FIL-city events, spot at invite-only workshops and Hacker Bases.',
  },
  {
    icon: MegaphoneSimple,
    title: 'Ecosystem Recognition',
    description:
      'Cement yourself and your organization as key contributors to the Filecoin Ecosystem!',
  },
]
