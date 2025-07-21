import LogoAsset from '@/assets/logos/filecoin-logo-icon.svg'

type IconLogoProps = React.SVGProps<SVGSVGElement>

export function IconLogo({ height = 40 }: IconLogoProps) {
  return <LogoAsset height={height} />
}
