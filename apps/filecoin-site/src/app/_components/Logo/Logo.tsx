import LogoAsset from '@/assets/filecoin-logo-full.svg'

type LogoProps = React.SVGProps<SVGSVGElement>

export function Logo({ height = 40 }: LogoProps) {
  return <LogoAsset height={height} />
}
