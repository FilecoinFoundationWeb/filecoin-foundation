import {
  GlobeIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  LinkSimpleIcon,
  ScalesIcon,
} from '@phosphor-icons/react/dist/ssr'

type FilecoinValue = {
  title: string
  description: string
  icon: typeof GlobeIcon
}

export const filecoinValues: FilecoinValue[] = [
  {
    title: 'Openness',
    description:
      'Anyone can store, build, or contribute — no gatekeepers, just open participation.',
    icon: GlobeIcon,
  },
  {
    title: 'Resilience',
    description:
      'Data remains safe and available, even in the face of failures, outages, or censorship.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Empowerment',
    description:
      'Tools and incentives to give users control over data and developers freedom to innovate.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Verifiability',
    description:
      'Proof, not promises — data storage is backed by cryptographic guarantees.',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'Interoperability',
    description:
      'Designed to integrate with other blockchains and protocols for a connected future.',
    icon: LinkSimpleIcon,
  },
  {
    title: 'Equity',
    description:
      'A fairer infrastructure that rewards useful contributions and levels the playing field.',
    icon: ScalesIcon,
  },
] as const
