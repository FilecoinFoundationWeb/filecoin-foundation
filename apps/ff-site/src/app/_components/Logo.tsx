import { LogoWithSnow } from './LogoWithSnow'

type LogoProps = React.SVGProps<SVGSVGElement>

export function Logo(props: LogoProps) {
  return <LogoWithSnow {...props} />
}
