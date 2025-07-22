type ComparisonItem = {
  filecoin: string
  traditional: string
}

const filecoinVsCloudComparison: Array<ComparisonItem> = [
  {
    filecoin: 'Resilience through global redundancy',
    traditional: 'Single points of failure',
  },
  {
    filecoin: 'Censorship resistance by design',
    traditional: 'Susceptible to censorship and takedowns',
  },
  {
    filecoin: 'Open, permissionless participation',
    traditional: 'Controlled by corporate gatekeepers',
  },
  {
    filecoin: 'Verifiable storage commitments',
    traditional: 'Opaque trust models',
  },
  {
    filecoin: 'Economic incentives for participants',
    traditional: 'Profits flow to shareholders',
  },
  {
    filecoin: 'Data outlives institutions',
    traditional: 'Data loss if provider fails',
  },
]

export const filecoinFeatures = filecoinVsCloudComparison.map(
  (item) => item.filecoin,
)

export const traditionalCloudFeatures = filecoinVsCloudComparison.map(
  (item) => item.traditional,
)
