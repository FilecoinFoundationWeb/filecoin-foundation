export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-auto flex max-w-[1032px] flex-col justify-between bg-brand-800 px-6 pb-6 pt-8 text-brand-100">
        {children}
      </body>
    </html>
  )
}
