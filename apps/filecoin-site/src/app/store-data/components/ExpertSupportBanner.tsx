import { Button } from '@/components/Button'

export function ExpertSupportBanner() {
  return (
    <div
      className="flex items-baseline gap-6 bg-zinc-100 px-9 py-6"
      role="banner"
    >
      <p>Not sure what storage solution to choose?</p>

      <Button href="" variant="primary">
        Talk to an expert
      </Button>
    </div>
  )
}
