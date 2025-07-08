import LogoAsset from '@/assets/filecoin-foundation-logo.svg'

type FilecoinFoundationLogoProps = React.SVGProps<SVGSVGElement>

export function FilecoinFoundationLogo({
  height = 24,
}: FilecoinFoundationLogoProps) {
  return <LogoAsset height={height} />
}
