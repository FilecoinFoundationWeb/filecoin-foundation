import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

type ComparisonProvider = 'filecoin' | 'traditional-cloud'

type ComparisonFeature = {
  [key in ComparisonProvider]: string
}

const comparisonFeatures: Array<ComparisonFeature> = [
  {
    filecoin: 'Resilience through global redundancy',
    'traditional-cloud': 'Single points of failure',
  },
  {
    filecoin: 'Censorship resistance by design',
    'traditional-cloud': 'Susceptible to censorship and takedowns',
  },
  {
    filecoin: 'Open, permissionless participation',
    'traditional-cloud': 'Controlled by corporate gatekeepers',
  },
  {
    filecoin: 'Verifiable storage commitments',
    'traditional-cloud': 'Opaque trust models',
  },
  {
    filecoin: 'Economic incentives for participants',
    'traditional-cloud': 'Profits flow to shareholders',
  },
  {
    filecoin: 'Data outlives institutions',
    'traditional-cloud': 'Data loss if provider fails',
  },
]

export const filecoinVsCloudComparison = [
  {
    logo: IconLogo,
    title: 'Filecoin',
    features: comparisonFeatures.map((item) => item.filecoin),
  },
  {
    title: 'Traditional Cloud',
    features: comparisonFeatures.map((item) => item['traditional-cloud']),
  },
]
