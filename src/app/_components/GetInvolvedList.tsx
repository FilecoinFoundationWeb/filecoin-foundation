import { Heading } from '@/components/Heading'

export function GetInvolvedList() {
  return (
    <ul>
      <li>
        <a href="http://hub.fil.org/events">
          <Heading tag="h3" variant="lg">
            Attend an event
          </Heading>
          <p>Join or watch a Filecoin ecosystem event</p>
        </a>
      </li>
      <li>
        <a href="https://www.meetup.com/Filecoin-San-Francisco">
          <Heading tag="h3" variant="lg">
            Join a meetup group
          </Heading>
          <p>Find a group of people in your area who connect regularly</p>
        </a>
      </li>
      <li>
        <a href="https://docs.filecoin.io/about-filecoin/ways-to-contribute/">
          <Heading tag="h3" variant="lg">
            Contribute to the Filecoin project
          </Heading>
          <p>
            Shape the future by contributing to Filecoin’s code, research, or
            docs
          </p>
        </a>
      </li>
      <li>
        <a href="https://filecoin.io/slack">
          <Heading tag="h3" variant="lg">
            Participate online
          </Heading>
          <p>
            Participate in one of the many online forums about Filecoin, events,
            or the Filecoin Slack channel
          </p>
        </a>
      </li>
      <li>
        <a href="https://sp.filecoin.io/">
          <Heading tag="h3" variant="lg">
            Become a storage provider or builder
          </Heading>
          <p>Dive right in and become an essential part of the ecosystem</p>
        </a>
      </li>
      <li>
        <a href="https://proto.school/">
          <Heading tag="h3" variant="lg">
            Learn more on ProtoSchool
          </Heading>
          <p>
            Understand how it all works with interactive tutorials from
            ProtoSchool
          </p>
        </a>
      </li>
    </ul>
  )
}
