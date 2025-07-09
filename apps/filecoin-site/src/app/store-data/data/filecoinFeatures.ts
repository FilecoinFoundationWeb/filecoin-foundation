import {
  CertificateIcon,
  LinkBreakIcon,
  LockKeyIcon,
} from '@phosphor-icons/react/dist/ssr'

type FilecoinFeature = {
  title: string
  description: string
  icon: typeof LockKeyIcon | typeof CertificateIcon | typeof LinkBreakIcon
}

export const filecoinFeatures: FilecoinFeature[] = [
  {
    title: 'Encryption & security',
    description:
      'Client-side encryption and content-addressing ensure only you (and those you authorize) can read or alter your files.',
    icon: LockKeyIcon,
  },
  {
    title: 'Compliance-ready',
    description:
      'Providers on the network offer SOC 2, ISO 27001, HIPAA-aligned environments so you can meet industry and regional requirements.',
    icon: CertificateIcon,
  },

  {
    title: 'No vendor lock-in fees',
    description:
      'Storage costs are determined by an open market—no egress penalties, no proprietary APIs. Retrieve or move data whenever you like.',
    icon: LinkBreakIcon,
  },
] as const
