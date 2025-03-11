import BackpackIcon from '@/assets/icons/backpack.svg'
import CodeIcon from '@/assets/icons/code.svg'
import CommunityIcon from '@/assets/icons/community.svg'

export const priorities = [
  {
    icon: BackpackIcon,
    title: 'Education',
    description:
      'Helping individuals and communities learn about the transformative power of decentralized, open technologies.',
  },
  {
    icon: CodeIcon,
    title: 'Development',
    description:
      'Accelerating the adoption of decentralized technologies through innovation and research.',
  },
  {
    icon: CommunityIcon,
    title: 'Community Support',
    description:
      'Fostering a network of advocates and builders across the decentralized web community.',
  },
] as const
