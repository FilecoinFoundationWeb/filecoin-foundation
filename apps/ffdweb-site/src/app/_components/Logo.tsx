import LogoAsset from '@/assets/branding/logo.svg'

type LogoProps = React.SVGProps<SVGSVGElement>

export function Logo({ height = 64 }: LogoProps) {
  return <LogoAsset height={height} preserveAspectRatio="xMidYMid meet" />
}
