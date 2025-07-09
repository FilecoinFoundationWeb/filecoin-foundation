type ComparisonCell = boolean | 'limited'

export type ComparisonRow = {
  feature: string
  filecoin: ComparisonCell
  traditionalCloud: ComparisonCell
}

export const filecoinVsCloudComparison: ComparisonRow[] = [
  {
    feature: 'Open participation',
    filecoin: true,
    traditionalCloud: false,
  },
  {
    feature: 'Censorship resistance',
    filecoin: true,
    traditionalCloud: false,
  },
  {
    feature: 'Verifiable storage proofs',
    filecoin: true,
    traditionalCloud: false,
  },
  {
    feature: 'Programmable infrastructure',
    filecoin: true,
    traditionalCloud: 'limited',
  },
  {
    feature: 'Cost efficiency via markets',
    filecoin: true,
    traditionalCloud: false,
  },
  {
    feature: 'Data retrieval incentives',
    filecoin: true,
    traditionalCloud: false,
  },
] as const
