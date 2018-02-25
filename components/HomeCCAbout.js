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
  Divider,
  Button,
  Reveal
} from 'semantic-ui-react'
import LaunchModal from './LaunchModal'
import IntroVideo from './IntroVideo'



const HomeCCAbout = ({ mobile }) => {
  return (
    <Segment style={{}} vertical >
      <Container text>
        <IntroVideo />
        <Divider />
        <Image src='static/mission.png' size='small' centered />
        <Header as='h1' textAlign='center'>Mission</Header>
        <p style={{ textAlign: 'center', padding: '10px', marginBottom: '10px' }}>Armed with the power of smart contract technology, our goal at Crowd Coverage is to guarantee faster, more trustworthy insurance at lower costs and in larger volume than could ever be dreamed of in the traditional insurance world.</p>
      </Container>
      <Divider />
      <Container>
        <Reveal animated='fade'>
          <Reveal.Content visible>
            <Header as='h1' textAlign='center'></Header>
            <p style={{ textAlign: 'center', padding: '10px' }}></p>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src='static/network-icon.png' size='small' centered />
            <Header as='h1' textAlign='center'>How Do We Do This?</Header>
            <p style={{ textAlign: 'center', padding: '10px' }}>The Crowd Coverage platform allows the process of purchasing insurance to be as simple and streamlined as shopping on Amazon. Insurance providers are enabled to quickly and efficiently underwrite policies on a sophisticated marketplace, smart contract technology makes the experience cheaper and more secure for all parties. All claims are settled by a decentralized and representative tribunal according to communally agreed-upon protocol, instilling the claims-management process with decentralized-consensus objectivity.</p>
          </Reveal.Content>
        </Reveal>
      </Container>
      <Divider />
      <Container fluid style={{ padding: '30px' }}>
        <Image src='static/platform_logo.png' size='small' centered />
        <Header as='h1' textAlign='center'>The Platform</Header>
        <p style={{ textAlign: 'center', padding: '10px' }}>Crowd Coverage provides a platform that enables users to submit requests for policies. Insurance providers can then bid on said requests, either purchasing the entire policy, or sharing risk with other providers. Policy actions are carried out by mutual smart contracts. Through the use of these autonomous, decentralized contracts, insurance deals occur in lieu of centralized financial and administrative facilitators, thus reducing fees, wait times, and opportunities for deceit. Payment mechanics are rendered transparent and accountable by means of publicly available ledgers; objectivity is lent to the claims management process through a decentralized system of vote consensus, which dictates the result of claims submitted on the platform.</p>
        <Image src='static/CC_Diagram_Polished.png' size='huge' centered />
      </Container>
      <Divider />
      <Container text>
        <Image src='static/compare.png' size='small' centered />
        <Header as='h1' textAlign='center'>Let's Compare</Header>
        <p style={{ textAlign: 'center', padding: '10px' }}>The advantages of applying smart contract technology to the insurance industry are too numerous to count. With a cutting-edge development team working around the clock, an entrepreneurial powerhouse duo at our helm, and a diverse team of crypto-specialized advisors, Crowd Coverage is poised to disrupt insurance across the board. Traditional companies stand no chance, and our fledgling competitors in the cryptosphere will never be able to scale or prevent fraud like we will—most won’t even get off the ground. Don’t believe us? Our cofounders have detailed a more comprehensive analysis of the competitive landscape, and accessible.</p>
        <Image src='static/comparison.png' size='huge' centered />
      </Container>
      <Divider />
      <Container fluid>
        <Image src='static/roadmap.png' size='small' centered />
        <Image src='static/cc_roadmap.jpg' size='large' centered />
      </Container>
      <Divider />
      <Container fluid>
        <Image src='static/token.png' size='small' centered />
        <Image src='static/upd_token_dist.png' size='large' centered />
        <p style={{ textAlign: 'center', padding: '10px' }}>COVR tokens act as incentive-based fuels for the Crowd Coverage insurance ecosystem. They will be available for purchase during our pre-sale and public sale, both of which will be conducted in the manner of a dutch auction: the earlier you purchase, the greater a discount you will receive (see below). For example, the first 12 million tokens sold will be discounted at a rate of 50%, the next 28 million at a rate of 35%, and so on. </p>
      </Container>
      <Divider />
      <Container fluid>
        <Image src='static/discount.png' size='large' centered />
      </Container>
      <Divider />
      <Image src='static/team.png' size='small' centered />
      <Header as='h1' textAlign='center'>Our Team</Header>
      <Grid columns={3} divided stackable>
        <Grid.Row>
          <Grid.Column >
            <Image src='/static/justin.png' centered />
            <Header as='h4' style={{ textAlign: 'center' }}>Justin Bongi | Cofounder</Header>
            <p style={{ textAlign: 'center', padding: '10px' }}>Founder of Cinefeed, Editor at Wilder Voice Press, Developer of News Analytics Platform </p>
          </Grid.Column>
          <Grid.Column>
            <Image src='/static/john.png' centered />
            <Header as='h4' style={{ textAlign: 'center' }}>John Pearson | Cofounder</Header>
            <p style={{ textAlign: 'center' }}>Cofounder at InstinctiveDrives.com, VP Sales at Humantelligence, Inc., VP Product & Technology at Aberdeen Group </p>
          </Grid.Column>
          <Grid.Column>
            <Image src='/static/phil.png' centered />
            <Header as='h4' style={{ textAlign: 'center' }}>Phillip Lorenzo | CTO</Header>
            <p style={{ textAlign: 'center' }}>Software Engineer at Learners Guild and Accel.AI, Oakland Blockchain Developers Member </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src='/static/dondrey.png' centered />
            <Header as='h4' style={{ textAlign: 'center' }}>Dondrey Taylor | Business Development Advisor</Header>
            <p style={{ textAlign: 'center' }}>Co-Founder at Decentralized News Network </p>
          </Grid.Column>
          <Grid.Column>
            <Image src='/static/ryan.png' centered />
            <Header as='h4' style={{ textAlign: 'center' }}>Ryan David Williams | Legal Advisor</Header>
            <p style={{ textAlign: 'center' }}>Founder of Experience Legal, VP Startup Genius, Capital Markets Associate Morrison & Foerster LLP </p>
          </Grid.Column>
          <Grid.Column>
            <Header as='h4' style={{ textAlign: 'center' }}>Lead Developer</Header>
            <p style={{ textAlign: 'center' }}> TBD </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
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