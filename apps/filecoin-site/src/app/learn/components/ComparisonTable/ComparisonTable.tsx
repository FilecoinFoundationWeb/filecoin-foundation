import { filecoinVsCloudComparison } from '../../data/filecoinVsCloudComparison'

import { Column } from './Column'

export function ComparisonTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {filecoinVsCloudComparison.map(({ title, features, logo }, index) => (
        <Column
          key={title}
          title={title}
          features={features}
          columnIndex={index === 0 ? 1 : 2}
          logo={logo}
        />
      ))}
    </div>
  )
}
