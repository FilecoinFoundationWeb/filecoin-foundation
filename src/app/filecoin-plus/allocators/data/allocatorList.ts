type AllocatorType = 'Automatic' | 'Manual' | 'Market-Based'

type AllocatorListData = {
  organizationName: string
  type: AllocatorType
  region: string
  requiredReplicas: string
  requiredSPs: string
  apply: string
}

export const allocatorListData: Array<AllocatorListData> = [
  {
    organizationName: 'Knernlogic',
    type: 'Automatic',
    region: 'North America',
    requiredReplicas: '2+',
    requiredSPs: '2+',
    apply: '#',
  },
]
