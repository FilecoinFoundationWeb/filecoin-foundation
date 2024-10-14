type ErrorMessageProps = {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  console.error(message)

  return <p>Error: {message}</p>
}
