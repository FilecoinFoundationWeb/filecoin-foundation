import LogoAsset from '@/assets/logos/filecoin-logo-icon.svg'

type LogoIconProps = React.SVGProps<SVGSVGElement>

export function LogoIcon({ height = 40 }: LogoIconProps) {
  return <LogoAsset height={height} />
}
