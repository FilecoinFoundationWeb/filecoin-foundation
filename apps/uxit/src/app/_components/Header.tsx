export function Header() {
  return (
    <header className="flex flex-col items-center gap-5 text-center">
      <span className="font-semibold text-indigo-800">UXIT</span>
      <h1 className="sm:text-6x flex flex-col items-center gap-2 text-4xl font-bold tracking-tight text-slate-900">
        User-Focused Solutions for the
        <br />
        <span className="text-indigo-700">Future of Filecoin</span>
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-slate-600">
        The Filecoin Foundation User Experience Improvement Team (UXIT) is
        dedicated to creating thoughtful, user-centered solutions that drive the
        evolution of the Filecoin ecosystem.
      </p>
    </header>
  )
}
