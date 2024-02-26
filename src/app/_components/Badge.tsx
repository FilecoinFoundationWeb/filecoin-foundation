type BadgeProps = {
  featured: boolean
  children?: string
}

export function Badge({ featured, children }: BadgeProps) {
  return (
    <span className="inline-block px-2 py-1 bg-white text-slate-900 uppercase rounded-xl text-sm font-semibold">
      {featured ? 'Featured Project' : children}
    </span>
  )
}
