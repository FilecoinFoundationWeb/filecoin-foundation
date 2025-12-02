import { formatDateTime } from '../../utils/dateUtils'
import { ExternalTextLink } from '../TextLink/ExternalTextLink'

type SoftwareVersionProps = {
  info: string
  githubUrl: string
}

export function SoftwareVersion({ info, githubUrl }: SoftwareVersionProps) {
  const match = parseVersionString(info)

  if (!match) {
    return <p>The software version could not be parsed.</p>
  }

  const { version, network, commit, date } = match
  const formattedDate = date ? formatDateTime(date) : null

  return (
    <div className="space-y-0.5 text-sm text-gray-600">
      {version && network && <p>{`${version} (${network})`}</p>}
      {commit && (
        <p>
          commit{' '}
          <ExternalTextLink href={`${githubUrl}${commit}`}>
            {commit}
          </ExternalTextLink>
        </p>
      )}
      {formattedDate && <p>{formattedDate}</p>}
    </div>
  )
}

export function parseVersionString(input: string) {
  const regex = /^(\d+\.\d+\.\d+)\+([a-z]+)\+(git_[a-f0-9]+)_(.+)$/
  const match = input.match(regex)

  if (!match) {
    return
  }

  return {
    version: match[1],
    network: match[2],
    commit: match[3].replace('git_', ''),
    date: match[4],
  }
}
