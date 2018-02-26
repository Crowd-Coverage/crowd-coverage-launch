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
  Button
} from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'
import IntroVideo from './IntroVideo'



const HomeCCAbout = ({ mobile }) => {
  return (
    <Segment basic vertical >
      <Container text>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <IntroVideo />
        </ScrollAnimation>
        <Divider />
        <Image src='static/mission.png' size='small' centered />
        <Header as='h1' textAlign='center'>Mission</Header>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <p style={{ textAlign: 'center', padding: '10px', marginBottom: '10px' }}>Armed with the power of smart contract technology, our goal at Crowd Coverage is to guarantee faster, more trustworthy insurance at lower costs and in larger volume than could ever be dreamed of in the traditional insurance world.</p>
        </ScrollAnimation>
      </Container>
      <Divider />
      <Container>
        <Image src='static/network-icon.png' size='small' centered />
        <Header as='h1' textAlign='center'>How Do We Do This?</Header>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <p style={{ textAlign: 'center', padding: '5px' }}>The Crowd Coverage platform allows the process of purchasing insurance to be as <strong>simple and streamlined</strong> as shopping on Amazon.</p>
          <p style={{ textAlign: 'center', padding: '5px' }}>Insurance providers are <strong>enabled to quickly and efficiently underwrite policies</strong> on a sophisticated marketplace, smart contract technology makes the experience cheaper and more secure for all parties.</p>
          <p style={{ textAlign: 'center', padding: '5px' }}>All claims are settled by a decentralized and representative tribunal according to communally agreed-upon protocol, instilling the claims-management process with<strong>decentralized-consensus objectivity.</strong></p>
        </ScrollAnimation>
      </Container>
      <Divider />
      <Container fluid style={{ padding: '30px' }}>
        <Image src='static/platform_logo.png' size='small' centered />
        <Header as='h1' textAlign='center'>The Platform</Header>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <p style={{ textAlign: 'center', padding: '5px' }}>Crowd Coverage provides a platform that enables <strong>users to submit requests for policies.</strong></p>
          <p style={{ textAlign: 'center', padding: '5px' }}>Insurance providers can then bid on said requests, either purchasing the entire policy, or sharing risk with other providers. Policy actions are carried out by mutual smart contracts.</p>
          <p style={{ textAlign: 'center', padding: '5px' }}><strong>Through the use of these autonomous, decentralized contracts, insurance deals occur in lieu of centralized financial and administrative facilitators, thus reducing fees, wait times, and opportunities for deceit.</strong></p>
          <p style={{ textAlign: 'center', padding: '5px' }}>Payment mechanics are <strong>rendered transparent and accountable by means of publicly available ledgers</strong>; objectivity is lent to the claims management process through a decentralized system of vote consensus, which dictates the result of claims submitted on the platform. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <Image src='static/CC_Diagram_Polished.png' size='huge' centered />
        </ScrollAnimation>
      </Container>
      <Divider />
      <Container text>
        <Image src='static/compare.png' size='small' centered />
        <Header as='h1' textAlign='center'>Let's Compare</Header>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <p style={{ textAlign: 'center', padding: '5px' }}>The advantages of applying smart contract technology to the insurance industry are too numerous to count. </p>
          <p style={{ textAlign: 'center', padding: '5px' }}>With a cutting-edge development team working around the clock, an entrepreneurial powerhouse duo at our helm, and a <strong>diverse team of crypto-specialized advisors</strong>, Crowd Coverage is poised to disrupt insurance across the board.</p>
          <p style={{ textAlign: 'center', padding: '5px' }}>Traditional companies stand no chance, and our fledgling competitors in the cryptosphere will never be able to scale or prevent fraud like we will—most won’t even get off the ground. Don’t believe us? Our cofounders have detailed a more comprehensive analysis of the competitive landscape, and accessible.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <Image src='static/comparison.png' size='huge' centered />
        </ScrollAnimation>
      </Container>
      <Divider />
      <Container fluid>
        <Image src='static/roadmap.png' size='small' centered />
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <Image src='static/cc_roadmap.jpg' size='large' centered />
        </ScrollAnimation>
      </Container>
      <Divider />
      <Container fluid>
        <Image src='static/token.png' size='small' centered />
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <Image src='static/upd_token_dist.png' size='large' centered />
          <p style={{ textAlign: 'center', padding: '10px' }}><strong>COVR tokens</strong> act as incentive-based fuels for the Crowd Coverage insurance ecosystem. They will be available for purchase during our pre-sale and public sale, both of which will be conducted in the manner of a dutch auction: </p>
          <p style={{ textAlign: 'center', padding: '10px' }}>The earlier you purchase, <strong>the greater a discount you will receive (see below).</strong> For example, the first 12 million tokens sold will be discounted at a rate of 50%, the next 28 million at a rate of 35%, and so on. </p>
        </ScrollAnimation>
      </Container>
      <Divider />
      <Container fluid>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <Image src='static/discount.png' size='large' centered />
        </ScrollAnimation>
      </Container>
      <Divider />
      <Image src='static/team.png' size='small' centered />
      <Header as='h1' textAlign='center'>Our Team</Header>
      <ScrollAnimation animateIn='fadeIn' duration='2'>
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
      </ScrollAnimation>
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