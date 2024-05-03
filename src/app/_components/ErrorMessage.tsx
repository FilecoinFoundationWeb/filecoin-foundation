type ErrorMessageProps = {
  statusCode: '404' | '500'
  title: string
  children: React.ReactNode
}

export default function ErrorMessage({
  statusCode,
  title,
  children,
}: ErrorMessageProps) {
  return (
    <div className="m-auto flex max-w-xs flex-col gap-6 py-32 sm:items-center sm:text-center">
      <span className="text-7xl">{statusCode}</span>
      <h2 className="text-3xl">{title}</h2>
      {children}
    </div>
  )
}
