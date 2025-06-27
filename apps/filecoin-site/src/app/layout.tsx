import '@/styles/globals.css'

export const metadata = {
  title: 'Filecoin.io',
  description: 'The official Filecoin website.',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
