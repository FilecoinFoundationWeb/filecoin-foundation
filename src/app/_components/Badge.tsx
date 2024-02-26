type BadgeProps = {
  featured: boolean
  children?: string
}

export function Badge({ featured, children }: BadgeProps) {
  return (
    <span className="inline-block px-2 py-1 bg-white text-brand-800 uppercase rounded-xl text-sm font-semibold">
      {featured ? 'Featured Project' : children}
    </span>
  )
}
