import { Spinner } from './Spinner'
import { StateCard } from './StateCard'

type LoadingStateCardProps = {
  message: string
}

export function LoadingStateCard({ message }: LoadingStateCardProps) {
  return (
    <StateCard variant="solid">
      <div className="flex min-h-60 items-center justify-center p-5">
        <Spinner message={message} />
      </div>
    </StateCard>
  )
}
