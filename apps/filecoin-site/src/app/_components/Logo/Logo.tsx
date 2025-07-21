import LogoAsset from '@/assets/logos/filecoin-logo-full.svg'

type LogoProps = React.SVGProps<SVGSVGElement>

export function Logo({ height = 40, color = 'white' }: LogoProps) {
  return <LogoAsset height={height} color={color} />
}
