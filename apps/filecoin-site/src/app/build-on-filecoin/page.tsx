import { LogoSection } from '@/components/LogoSection'

export default function BuildOnFilecoin() {
  return (
    <div>
      <LogoSection
        title="Filecoin Partners"
        logos={[
          {
            src: '/assets/filecoin-logo-full.svg',
            alt: 'Filecoin Logo Full',
            href: 'https://filecoin.io',
          },
          {
            src: '/assets/filecoin-logo-icon.svg',
            alt: 'Filecoin Logo',
            height: 36,
            width: 36,
          },
          {
            src: '/assets/filecoin-logo-icon.svg',
            alt: 'Filecoin Logo',
            height: 36,
            width: 36,
          },
          {
            src: '/assets/filecoin-logo-full.svg',
            alt: 'Filecoin Logo Full',
          },
          {
            src: '/assets/filecoin-logo-icon.svg',
            alt: 'Filecoin Logo',
            height: 36,
            width: 36,
          },
          {
            src: '/assets/filecoin-logo-icon.svg',
            alt: 'Filecoin Logo',
            height: 36,
            width: 36,
          },
          {
            src: '/assets/filecoin-logo-full.svg',
            alt: 'Filecoin Logo Full',
          },
        ]}
      />
    </div>
  )
}
