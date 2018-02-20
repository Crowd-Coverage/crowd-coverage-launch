import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Grid,
  Responsive,
  Segment,
  Header,
  Image,
  Icon,
  Button
} from 'semantic-ui-react'
import LaunchModal from './LaunchModal'


const HomeCCAbout = ({ mobile }) => {
  return (
    <Segment style={{}} vertical >
      <Container text>
        <Header as='h1' textAlign='center'>Mission</Header>
        <p style={{ textAlign: 'center', padding: '10px', marginBottom: '10px' }}>Armed with the power of smart contract technology, our goal at Crowd Coverage is to guarantee faster, more trustworthy insurance at lower costs and in larger volume than could ever be dreamed of in the traditional insurance world</p>
      </Container>
      <Container text>
        <Header as='h1' textAlign='center'>How Do We Do This?</Header>
        <p style={{ textAlign: 'center', padding: '10px' }}>The Crowd Coverage platform is an interface wherein the process of purchasing insurance is as simple and streamlined as shopping for an item on Amazon, where insurance providers are enabled to quickly and efficiently underwrite policies on a sophisticated marketplace, and where smart contract technology makes the experience cheaper on both ends.  On the Crowd Coverage platform, claims are settled by a decentralized and representative tribunal according to communally agreed-upon protocol, instilling the claims-management process with decentralized-consensus objectivity</p>
      </Container>
      <Container fluid style={{ padding: '30px' }}>
        <Header as='h1' textAlign='center'>The Platform</Header>
        <Image src='static/platform.png' size='large' centered />
      </Container>
      <Container fluid>
        <Image src='static/cc_roadmap.jpg' size='large' centered />
      </Container>
      <Container fluid>
        <Image src='static/token_distribution.png' size='large' centered />
      </Container>
      <Container textAlign='center'>
        <LaunchModal />
      </Container>
    </Segment>
  )
}

HomeCCAbout.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeCCAbout