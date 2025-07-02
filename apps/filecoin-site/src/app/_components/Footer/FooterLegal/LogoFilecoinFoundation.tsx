import LogoAsset from '@/assets/filecoin-foundation-logo.svg'

type LogoFilecoinFoundationProps = React.SVGProps<SVGSVGElement>

export function LogoFilecoinFoundation({
  height = 24,
}: LogoFilecoinFoundationProps) {
  return <LogoAsset height={height}  />
}
