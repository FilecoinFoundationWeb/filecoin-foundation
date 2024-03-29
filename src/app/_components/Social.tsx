import { socialIcons, socialLinks, SocialIconKey } from '@/utils/socialConfig'

export function Social() {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-4 px-3">
      {Object.entries(socialLinks).map(([key, { label, href }]) => {
        const IconComponent = socialIcons[key as SocialIconKey]

        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-white hover:text-brand-300 focus:outline-2"
              aria-label={`${label} (opens in new window)`}
            >
              {IconComponent && <IconComponent size={24} aria-hidden="true" />}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
