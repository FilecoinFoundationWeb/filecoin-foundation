import LogoAsset from '@/assets/logos/filecoin-foundation-logo.svg'

type FilecoinFoundationLogoProps = React.SVGProps<SVGSVGElement>

export function FilecoinFoundationLogo({
  height = 24,
}: FilecoinFoundationLogoProps) {
  return <LogoAsset height={height} />
}
