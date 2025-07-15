import type { SimpleCardProps } from '@/components/SimpleCard'

export type FilecoinEarningsInsight = Pick<
  SimpleCardProps,
  'title' | 'description' | 'cta'
>

export const filecoinEarningsInsights: FilecoinEarningsInsight[] = [
  {
    title: 'Earning filecoin and fiat',
    description:
      'Storage providers earn filecoin and fiat by storing data for clients, and computing cryptographic proofs to verify storage across time.',
    cta: {
      href: '/',
      text: 'Learn more',
    },
  },
  {
    title: 'Block rewards',
    description:
      'The probability of earning the block rewards and transaction fees is proportional to the amount of storage the provider contributes to the network, and not hashing power.',
    cta: {
      href: '/',
      text: 'Learn more',
    },
  },
] as const
