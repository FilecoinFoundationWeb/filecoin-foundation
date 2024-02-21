import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export function Social() {
  return (
    <ul className="flex list-none gap-4">
      {Object.entries(FILECOIN_FOUNDATION_URLS.social).map(
        ([key, { label, href }]) => (
          <li key={key} className="ml-0">
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        )
      )}
    </ul>
  )
}
