import { Logo } from '@/components/Logo/Logo'

export function FooterLogo() {
  return (
    <>
      <div className="block lg:hidden">
        <Logo height={40} />
      </div>
      <div className="hidden lg:block">
        <Logo height={32} />
      </div>
    </>
  )
}
