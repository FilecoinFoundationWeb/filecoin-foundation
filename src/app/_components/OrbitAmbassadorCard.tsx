import { BasicCard } from '@/components/BasicCard'

export type OrbitAmbassadorCardProps = {
  name: string
  location: string
  testimonial: Array<string> | Array<JSX.Element>
}

export function OrbitAmbassadorCard({
  testimonial,
  name,
  location,
}: OrbitAmbassadorCardProps) {
  return (
    <BasicCard>
      <article className="space-y-6">
        {testimonial.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <footer>
          <p className="font-bold">{name}</p>
          <p className="text-brand-300">— {location}</p>
        </footer>
      </article>
    </BasicCard>
  )
}
