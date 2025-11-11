import { ExternalTextLink } from '../TextLink/ExternalTextLink'

type SoftwareVersionProps = {
  info: string
  githubUrl: string
}

export function SoftwareVersion({ info, githubUrl }: SoftwareVersionProps) {
  const { version, network, commit, date } = parseVersionString(info)

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
      {date && <p>{date}</p>}
    </div>
  )
}

function parseVersionString(input: string) {
  const regex = /^(\d+\.\d+\.\d+)\+([a-z]+)\+(git_[a-f0-9]+)_(.+)$/
  const match = input.match(regex)

  if (!match) {
    return {
      version: undefined,
      network: undefined,
      commit: undefined,
      date: undefined,
    }
  }

  return {
    version: match[1],
    network: match[2],
    commit: match[3].replace('git_', ''),
    date: match[4],
  }
}
