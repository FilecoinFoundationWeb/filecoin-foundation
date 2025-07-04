import { CodeIcon, BracketsAngleIcon, UsersIcon } from '@phosphor-icons/react/dist/ssr'

import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'


export const submissionCriteriaData = [
  {
    title: 'Open-source',
    description: 'All projects must be open-sourced.',
    icon: CodeIcon,
  },
  {
    title: 'MIT and APACHE2',
    description: (
      <>
        All projects must be dual-licensed under{' '}
        <ExternalTextLink href="https://opensource.org/license/mit">
          MIT
        </ExternalTextLink>{' '}
        and{' '}
        <ExternalTextLink href="https://opensource.org/licenses/Apache-2.0">
          APACHE2
        </ExternalTextLink>{' '}
        licenses.
      </>
    ),
    icon: BracketsAngleIcon,
  },
  {
    title: 'Self-Management',
    description: 'All teams must be self-managed.',
    icon: UsersIcon,
  },
]
