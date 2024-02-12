import { Thing, WithContext } from 'schema-dts'

type StructuredDataScriptProps = {
  structuredData: WithContext<Thing>
}

export default function StructuredDataScript({
  structuredData,
}: StructuredDataScriptProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
      type="application/ld+json"
    />
  )
}
