import CustomLink from '@/components/CustomLink'

export default function GetInvolvedList() {
  return (
    <ul>
      <li>
        <CustomLink href="http://hub.fil.org/events">
          <h3>Attend an event</h3>
          <p>Join or watch a Filecoin ecosystem event</p>
        </CustomLink>
      </li>
      <li>
        <CustomLink href="https://www.meetup.com/Filecoin-San-Francisco">
          <h3>Join a meetup group</h3>
          <p>Find a group of people in your area who connect regularly</p>
        </CustomLink>
      </li>
      <li>
        <CustomLink href="https://docs.filecoin.io/about-filecoin/ways-to-contribute/">
          <h3>Contribute to the Filecoin project</h3>
          <p>
            Shape the future by contributing to Filecoin’s code, research, or
            docs
          </p>
        </CustomLink>
      </li>
      <li>
        <CustomLink href="https://filecoin.io/slack">
          <h3>Participate online</h3>
          <p>
            Participate in one of the many online forums about Filecoin, events,
            or the Filecoin Slack channel
          </p>
        </CustomLink>
      </li>
      <li>
        <CustomLink href="https://sp.filecoin.io/">
          <h3>Become a storage provider or builder</h3>
          <p>Dive right in and become an essential part of the ecosystem</p>
        </CustomLink>
      </li>
      <li>
        <CustomLink href="https://proto.school/">
          <h3>Learn more on ProtoSchool</h3>
          <p>
            Understand how it all works with interactive tutorials from
            ProtoSchool
          </p>
        </CustomLink>
      </li>
    </ul>
  )
}
