import { Button } from '@/components/Button'

export function ExpertSupportBanner() {
  return (
    <div
      className="flex flex-wrap items-baseline justify-center gap-6 bg-zinc-100 px-9 py-6 sm:justify-between"
      role="banner"
    >
      <p className="text-center sm:text-left">
        Not sure what storage solution to choose?
      </p>

      <Button href="" variant="primary">
        Talk to an expert
      </Button>
    </div>
  )
}
