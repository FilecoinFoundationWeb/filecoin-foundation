import { baseButtonStyles, variantButtonStyles } from '@/components/Button'
import { CustomLink } from '@/components/CustomLink'

export default function NotFound() {
  return (
    <div className="xs:items-center xs:justify-center flex flex-col gap-6">
      <div className="h-[102px]"></div>
      <span className="text-8xl">404</span>
      <h2 className="text-3xl">Page Not Found</h2>
      <p className="xs:max-w-[35ch] xs:text-center">
        We&apos;re sorry, but the page you were looking for could not be found
      </p>
      <CustomLink
        href="/"
        className={`${baseButtonStyles} ${variantButtonStyles.primary}`}
      >
        Go to Home Page
      </CustomLink>
      <div className="h-[102px]"></div>
    </div>
  )
}
