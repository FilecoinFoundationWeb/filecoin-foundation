export function NewsletterForm() {
  return (
    <form className="flex min-w-[100px] flex-col gap-2 text-white">
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
          <i className="bx bx-arrow-right-stroke bx-sm gradient-text"></i>
        </button>
      </div>
    </form>
  )
}
