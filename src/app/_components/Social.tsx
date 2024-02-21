import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

const socialLinks = {
  ...FILECOIN_FOUNDATION_URLS.social,
  ...FILECOIN_URLS.social,
}

export function Social() {
  return (
    <ul className="flex list-none gap-4">
      {Object.entries(socialLinks).map(([key, { label, href }]) => (
        <li key={key} className="ml-0">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
