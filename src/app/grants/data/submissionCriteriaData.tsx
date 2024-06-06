import { Code, BracketsAngle, Users } from '@phosphor-icons/react/dist/ssr'

import { TextLink } from '@/components/TextLink'

export const submissionCriteriaData = [
  {
    title: 'Open-source',
    description: 'All projects must be open-sourced.',
    icon: Code,
  },
  {
    title: 'MIT and APACHE2',
    description: (
      <>
        All projects must be dual-licensed under{' '}
        <TextLink href="https://opensource.org/license/mit">MIT</TextLink> and{' '}
        <TextLink href="https://opensource.org/licenses/Apache-2.0">
          APACHE2
        </TextLink>{' '}
        licenses.
      </>
    ),
    icon: BracketsAngle,
  },
  {
    title: 'Self-Management',
    description: 'All teams must be self-managed.',
    icon: Users,
  },
]
