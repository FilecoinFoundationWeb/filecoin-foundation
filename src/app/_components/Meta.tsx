import { Fragment } from 'react'

import clsx from 'clsx'

type MetaProps = {
  metaData: MetaDataType
}

export type MetaDataType = Array<string | null | undefined>

export function Meta({ metaData }: MetaProps) {
  if (metaData.length === 0) {
    return null
  }

  return (
    <div className="flex gap-3 text-brand-300">
      {metaData.filter(Boolean).map((data, index) => {
        const isNotLastItem = index < metaData.length - 1
        const isNotFirstItem = index > 0

        return (
          <Fragment key={index}>
            <span className={clsx({ capitalize: isNotFirstItem })}>{data}</span>
            {isNotLastItem && <span> | </span>}
          </Fragment>
        )
      })}
    </div>
  )
}
