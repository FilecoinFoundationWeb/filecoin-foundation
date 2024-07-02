import { BasicCard } from '@/components/BasicCard'

export type OrbitAmbassadorCardProps = {
  name: string
  location: string | [string, string]
  testimonial: Array<string> | Array<JSX.Element>
}

export function OrbitAmabassadorCard({
  testimonial,
  name,
  location,
}: OrbitAmbassadorCardProps) {
  const locationArray = Array.isArray(location) ? location : [location]

  return (
    <BasicCard>
      <article className="space-y-6">
        {testimonial.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <footer>
          <p className="font-bold">{name}</p>

          {locationArray.map((location, index) => (
            <p key={index} className="text-brand-300">
              — {location}
            </p>
          ))}
        </footer>
      </article>
    </BasicCard>
  )
}
