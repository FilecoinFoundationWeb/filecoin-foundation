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
    <div className="space-y-6 rounded-lg border border-brand-500 p-4">
      {testimonial.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      <div>
        <p className="mb-1 font-bold">{name}</p>

        {locationArray.map((location, index) => (
          <p key={index} className="text-brand-300">
            {location}
          </p>
        ))}
      </div>
    </div>
  )
}
