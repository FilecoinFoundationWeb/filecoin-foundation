import LogoAsset from '@/assets/filecoin-logo-blue.svg'

type LogoBlueProps = React.SVGProps<SVGSVGElement>

export function LogoBlue({ height = 40 }: LogoBlueProps) {
  return <LogoAsset height={height} />
}
