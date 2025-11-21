import { Spinner } from './Spinner'
import { StateCard } from './StateCard'

type LoadingStateCardProps = {
  message: string
}

export function LoadingStateCard({
  message = 'Loading...',
}: LoadingStateCardProps) {
  return (
    <StateCard background="subtle" border="solid">
      <div className="flex min-h-60 w-full items-center justify-center">
        <Spinner message={message} />
      </div>
    </StateCard>
  )
}
