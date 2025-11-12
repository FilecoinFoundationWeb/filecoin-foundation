import { isValidUrl } from '../../utils/linkUtils'
import { ExternalTextLink } from '../TextLink/ExternalTextLink'

type ProviderTableOverviewProps = {
  name: string
  description: string
  address: string
  serviceUrl: string
  explorerUrl: string
}

export function ProviderTableOverview({
  name,
  description,
  address,
  serviceUrl,
  explorerUrl,
}: ProviderTableOverviewProps) {
  const providerUrl = `${explorerUrl}${address}`

  const isProviderUrlValid = isValidUrl(providerUrl)
  const isServiceUrlValid = isValidUrl(serviceUrl)

  return (
    <div className="py-4">
      {isProviderUrlValid ? (
        <ExternalTextLink
          href={`${explorerUrl}${address}`}
          aria-label={`View provider ${name} on PDP Scan`}
        >
          <span className="font-medium">{name}</span>
        </ExternalTextLink>
      ) : (
        <span className="font-medium">{name}</span>
      )}

      <p className="truncate pt-1 text-sm text-gray-600">{description}</p>
      {isServiceUrlValid ? (
        <ExternalTextLink
          href={serviceUrl}
          aria-label={`Visit service URL for provider ${name}`}
        >
          <span className="text-sm">{serviceUrl}</span>
        </ExternalTextLink>
      ) : (
        <span className="text-sm">{serviceUrl}</span>
      )}
    </div>
  )
}
