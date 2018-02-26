import React from 'react'
import {
  Container,
  Grid,
  Responsive,
  Segment,
  Header,
  Image,
  Icon,
  Divider,
  Button
} from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'
import IntroVideo from './IntroVideo'



const FAQ = () => {
  return (
    <Segment>
      <Container textAlign='center'>
        <Header as='h1'>
          <Image src='static/platform_logo.png' size='mini' centered />
          Platform
    </Header>
        <h3>What is the Crowd Coverage Platform?</h3>
        <h3>What makes it better than any other insurance website?</h3>
        <h3>What sort of items can be insured on the platform?</h3>
        <h3>When can I use it?</h3>
        <h3>How are claims handled?</h3>
        <h3>How decentralized is it, really?</h3>
        <h3>Is there any room for fraud?</h3>
      </Container>
      <Container textAlign='center'>
        <Header as='h1'>
          <Image src='static/token.png' size='mini' centered />
          Token
    </Header>
        <h3>What purpose do COVR tokens serve?</h3>
        <h3>Does your ICO really need a token?</h3>
        <h3>When can I buy COVR tokens?</h3>
        <h3>How much will COVR tokens cost in the pre-sale?</h3>
      </Container>
      <Container textAlign='center'>
        <Header as='h1'>
          <Image src='static/mission.png' size='mini' centered />
          Miscellaneous
    </Header>
      </Container>
      <Container textAlign='center'>
        <LaunchModal />
      </Container>
    </Segment>
  )
}

export default FAQ