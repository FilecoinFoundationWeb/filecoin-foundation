export function BreakpointDebugger() {
  return (
    <div className="fixed bottom-2 left-2 z-50 rounded bg-zinc-800 px-1 font-mono text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
