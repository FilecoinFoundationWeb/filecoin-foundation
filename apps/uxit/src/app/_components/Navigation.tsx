import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-xl font-bold">
        UXIT
      </Link>
      <div className="flex space-x-4">
        <Link href="/" className="hover:text-gray-600">
          Home
        </Link>
      </div>
    </nav>
  )
}
