import { Heading } from '@/components/Heading'

export function ResourcesList() {
  return (
    <ul>
      <li>
        <a href="https://docs.filecoin.io/">
          <Heading tag="h3" variant="lg">
            Filecoin Documentation
          </Heading>
          <p>
            Filecoin project documentation homepage offers the tools to
            contribute to the network.
          </p>
        </a>
      </li>
      <li>
        <a href="https://github.com/filecoin-project">
          <Heading tag="h3" variant="lg">
            Filecoin GitHub
          </Heading>
          <p>
            Contribute to Filecoin and help improve it by engaging in the
            Filecoin GitHub repository.
          </p>
        </a>
      </li>
      <li>
        <a href="https://liftoff.filecoin.io/">
          <Heading tag="h3" variant="lg">
            Filecoin Mainnet Ignition & Liftoff
          </Heading>
          <p>
            This covers the timeline of the Filecoin Mainnet Ignition & Liftoff.
          </p>
        </a>
      </li>
      <li>
        <a href="https://dashboard.starboard.ventures/dashboard">
          <Heading tag="h3" variant="lg">
            Filecoin Network Status
          </Heading>
          <p>
            This dashboard provides the latest update of the Filecoin Network.
          </p>
        </a>
      </li>
      <li>
        <a href="https://github.com/filecoin-project/community/discussions">
          <Heading tag="h3" variant="lg">
            Filecoin Forums
          </Heading>
          <p>
            Details on the latest events hosted by Filecoin Foundation and a
            full list of community events
          </p>
        </a>
      </li>
      <li>
        <a href="https://github.com/filecoin-project/research">
          <Heading tag="h3" variant="lg">
            Filecoin Research
          </Heading>
          <p>
            Breakthroughs underpinning the Filecoin protocol, as well as future
            areas of exploration.
          </p>
        </a>
      </li>
      <li>
        <a href="https://filecoin.io/2020-engineering-filecoins-economy-en.pdf">
          <Heading tag="h3" variant="lg">
            Cryptoeconomics Overview
          </Heading>
          <p>
            This report describes the components of the Filecoin economy and how
            they interact.
          </p>
        </a>
      </li>
      <li>
        <a href="https://proto.school/">
          <Heading tag="h3" variant="lg">
            Filecoin Tutorials (ProtoSchool)
          </Heading>
          <p>
            This is a self-guided interactive Filecoin tutorial designed to
            introduce decentralized web concepts, protocols, and tools.
          </p>
        </a>
      </li>
    </ul>
  )
}
