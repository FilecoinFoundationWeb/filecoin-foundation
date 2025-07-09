type SectionDividerProps = {
  variant: keyof typeof styles
}

const styles = {
  light: 'border-zinc-200',
  subtle: 'border-zinc-400/10',
  dark: 'border-zinc-950/10',
}

export function SectionDivider({ variant }: SectionDividerProps) {
  return <hr className={styles[variant]} />
}
