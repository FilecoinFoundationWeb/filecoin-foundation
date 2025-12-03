import {
  CubeIcon,
  RocketLaunchIcon,
  UserPlusIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

export const gettingStartedWithPDP = [
  {
    title: 'Lowest hardware costs',
    description:
      'Warm storage requires minimal infrastructure, making it affordable to start offering storage with just basic compute and disk.',
    icon: CubeIcon,
  },
  {
    title: 'Fastest path to becoming a SP',
    description:
      'Get online quickly with a simple setup and no sealing hardware — perfect for testing, learning, and onboarding your first clients.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Ideal for new operators and small teams',
    description:
      'Operate a reliable, permissionless storage service without managing complex pipelines or large-scale hardware.',
    icon: UserPlusIcon,
  },
] as const satisfies Array<CardData>
