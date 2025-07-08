import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui/Icon'

export function NewsletterForm() {
  return (
    <form className="flex flex-col gap-2 text-white">
      <label htmlFor="newsletter-email" className="text-sm font-medium">
        Sign up for Filecoin updates
      </label>
      <div className="relative flex items-center gap-4">
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email"
          className="h-13 w-full border-0 border-b border-white bg-transparent placeholder-zinc-400 placeholder:text-sm focus:border-white focus:ring-0"
          autoComplete="email"
        />
        <button
          type="submit"
          className="absolute right-0 -mr-3 flex h-12 w-12 cursor-pointer items-center justify-center"
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                content: '',
                background: 'var(--gradient-brand)',
                mixBlendMode: 'multiply',
              }}
            />
            <Icon component={ArrowRightIcon} weight="bold" size={24} />
          </div>
        </button>
      </div>
    </form>
  )
}
