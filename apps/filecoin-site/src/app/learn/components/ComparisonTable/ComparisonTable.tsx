import {
  filecoinFeatures,
  traditionalCloudFeatures,
} from '../../data/filecoinVsCloudComparison'

import { Column, type ColumnProps } from './Column'

const columns: Array<ColumnProps> = [
  {
    title: 'Filecoin',
    features: filecoinFeatures,
    theme: 'dark',
  },
  {
    title: 'Traditional Cloud',
    features: traditionalCloudFeatures,
    theme: 'light',
  },
]

export function ComparisonTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {columns.map(({ title, features, theme }) => (
        <Column key={title} title={title} features={features} theme={theme} />
      ))}
    </div>
  )
}
