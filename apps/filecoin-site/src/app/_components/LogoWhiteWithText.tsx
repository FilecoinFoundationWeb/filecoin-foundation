import LogoAsset from '@/assets/filecoin-logo-white-with-text.svg'

type LogoWhiteWithTextProps = React.SVGProps<SVGSVGElement>

export function LogoWhiteWithText({ height = 40 }: LogoWhiteWithTextProps) {
  return <LogoAsset height={height} />
}
