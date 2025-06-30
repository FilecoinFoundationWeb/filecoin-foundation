import LogoAsset from '@/assets/filecoin-logo-full.svg'

type LogoFullProps = React.SVGProps<SVGSVGElement>

export function LogoFull({ height = 40 }: LogoFullProps) {
  return <LogoAsset height={height} />
}
