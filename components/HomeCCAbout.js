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

const lightContainerStyle = {
  backgroundImage: `url("static/mission-container.png")`,
}

const platformContainerStyle = {
  backgroundImage: `url("static/platform-bg.png")`
}

const howContainerStyle = {
  backgroundImage: `url("static/left-sprite-graphic-upd.png")`
}

const roadMapContainerStyle = {
  backgroundImage: `url("static/roadmap-bg-1.png")`
}

const analysisContainerStyle = {
  backgroundColor: '#E0FFFF'
}

const HomeCCAbout = ({ mobile }) => {
  return (
    <div>
      <Segment basic style={lightContainerStyle}>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <IntroVideo />
        </ScrollAnimation>
      </Segment>
      <Segment basic >
        <Image src='static/mission.png' size='small' centered />
        <Header as='h1' textAlign='center'>Mission</Header>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <p style={{ textAlign: 'center', padding: '10px', marginBottom: '10px', fontSize: '18px' }}>Armed with the power of smart contract technology, our goal at CrowdCoverage is to guarantee faster, more trustworthy insurance at lower costs and in larger volume than could ever be dreamed of in the traditional insurance world.</p>
        </ScrollAnimation>
      </Segment>
      <Segment basic style={howContainerStyle}>
        <Image src='static/network-icon.png' size='small' floated='right' />
        <Header as='h1' textAlign='left'>How Do We Do This?</Header>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <p style={{ textAlign: 'left', padding: '5px', fontSize: '18px' }}>The CrowdCoverage platform allows the process of purchasing insurance to be as <strong>simple and streamlined</strong> as shopping on Amazon.</p>
          <p style={{ textAlign: 'left', padding: '5px', fontSize: '18px' }}>Insurance providers are <strong>enabled to quickly and efficiently underwrite policies</strong> on a sophisticated marketplace, and smart contract technology makes the experience cheaper and more secure for all parties.</p>
          <p style={{ textAlign: 'left', padding: '5px', fontSize: '18px' }}>All claims are settled by a representative tribunal according to communally agreed-upon protocol, instilling the claims-management process with <strong>decentralized-consensus objectivity.</strong></p>
        </ScrollAnimation>
      </Segment>
      <Segment basic style={platformContainerStyle}>
        <Image src='static/platform_white.png' size='small' floated='left' />
        <Header as='h1' textAlign='right' inverted>The Platform</Header>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <p style={{ textAlign: 'right', padding: '5px', color: 'white', fontSize: '18px' }}>CrowdCoverage provides a platform that enables <strong>users to submit requests for policies.</strong> Insurance providers can then bid on said requests, either purchasing the entire policy, or sharing risk with other providers. Policy actions are carried out by mutual smart contracts.</p>
          <p style={{ textAlign: 'right', padding: '5px', color: 'white', fontSize: '18px' }}><strong>Through the use of these autonomous, decentralized contracts, insurance deals occur in lieu of centralized financial and administrative facilitators, thus reducing fees, wait times, and opportunities for deceit.</strong></p>
          <p style={{ textAlign: 'right', padding: '5px', color: 'white', fontSize: '18px' }}>Payment mechanics are <strong>rendered transparent and accountable by means of publicly available ledgers</strong>; objectivity is lent to the claims management process through a decentralized system of vote consensus, which dictates the result of claims submitted on the platform. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <Image src='static/CC_Diagram_Polished_transparent_white.png' size='huge' centered />
        </ScrollAnimation>
      </Segment >
      <Segment basic style={analysisContainerStyle}>
        <Image src='static/compare.png' size='small' floated='right' />
        <Header as='h1' textAlign='left'>Competitive Analysis</Header>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <p style={{ textAlign: 'left', padding: '5px', fontSize: '18px' }}>The advantages of applying smart contract technology to the insurance industry are too numerous to count. </p>
          <p style={{ textAlign: 'left', padding: '5px', fontSize: '18px' }}>With a cutting-edge development team working around the clock, an entrepreneurial powerhouse duo at our helm, and a <strong>diverse team of crypto-specialized advisors</strong>, CrowdCoverage is poised to disrupt insurance across the board.</p>
          <p style={{ textAlign: 'left', padding: '5px', fontSize: '18px' }}>Traditional companies stand no chance, and our fledgling competitors in the cryptosphere will never be able to scale or prevent fraud like we will—most won’t even get off the ground. Don’t believe us? Our cofounders have detailed a more comprehensive analysis of the competitive landscape in our whitepaper.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <Image src='static/comp-analysis-transparent.png' size='huge' centered />
        </ScrollAnimation>
      </Segment>
      <Segment basic style={roadMapContainerStyle}>
        <Image src='static/roadmap.png' size='small' centered />
        <Header as='h1' textAlign='center'>Roadmap</Header>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <Image src='static/roadmap-v2-transparent.png' size='large' centered />
        </ScrollAnimation>
      </Segment>
      <Segment basic>
        <Image src='static/token.png' size='small' centered />
        <Header as='h1' textAlign='center'>The COVR Token</Header>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <Image src='static/token-distribution-v2-transparent.png' size='huge' centered />
          <p style={{ textAlign: 'center', padding: '10px', fontSize: '18px' }}><strong>COVR tokens</strong> act as incentive-based fuels for the CrowdCoverage insurance ecosystem. They will be available for purchase during our pre-sale and public sale, both of which will be conducted in the manner of a dutch auction: </p>
        </ScrollAnimation>
      </Segment>
      <Segment basic>
        <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
          <Image src='static/COVR-Bonus-transparent.png' size='huge' centered />
        </ScrollAnimation>
      </Segment>
      <Divider />
      <Image src='static/team.png' size='small' centered />
      <Header as='h1' textAlign='center'>Our Team</Header>
      <Grid columns={3} divided stackable>
        <Grid.Row>
          <Grid.Column >
            <ScrollAnimation animateIn='bounceInRight' duration={3} animateOnce={true}>
              <Image src='/static/justin.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>Justin Bongi | Co-Founder</Header>
              <p style={{ textAlign: 'center', padding: '10px' }}>Founder of Cinefeed, Editor at Wilder Voice Press, Developer of News Analytics Platform </p>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column>
            <ScrollAnimation animateIn='bounceInRight' duration={3} animateOnce={true}>
              <Image src='/static/john.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>John Pearson | Co-Founder</Header>
              <p style={{ textAlign: 'center' }}>Cofounder at InstinctiveDrives.com, VP Sales at Humantelligence, Inc., VP Product & Technology at Aberdeen Group </p>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column>
            <ScrollAnimation animateIn='bounceInRight' duration={3} animateOnce={true}>
              <Image src='/static/phil.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>Phillip Lorenzo | CTO</Header>
              <p style={{ textAlign: 'center' }}>Software Engineer at Learners Guild and Accel.AI, Oakland Blockchain Developers Member </p>
            </ScrollAnimation>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={4} divided stackable>
        <Grid.Row>
          <Grid.Column>
            <ScrollAnimation animateIn='bounceInLeft' duration={3} animateOnce={true}>
              <Image src='/static/dondrey.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>Dondrey Taylor | Business Development Advisor</Header>
              <p style={{ textAlign: 'center' }}>Co-Founder at Decentralized News Network, Network Security Consultant at Elizabeth Pharmacy, CTO at Minichat Inc</p>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column>
            <ScrollAnimation animateIn='bounceInLeft' duration={3} animateOnce={true}>
              <Image src='/static/ryan.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>Ryan David Williams | Legal Advisor</Header>
              <p style={{ textAlign: 'center' }}>Founder of Experience Legal, VP Startup Genius, Capital Markets Associate Morrison & Foerster LLP </p>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column>
            <ScrollAnimation animateIn='bounceInLeft' duration={3} animateOnce={true}>
              <Image src='/static/rahul.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>Rahul Sethuram | Tech Advisor</Header>
              <p style={{ textAlign: 'center' }}>CTO at ConnextAPI, Co-Founder at Tip’d Off, Senior Test Engineer at Tesla Motors</p>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column>
            <ScrollAnimation animateIn='bounceInLeft' duration={3} animateOnce={true}>
              <Image src='/static/bob.png' centered />
              <Header as='h4' style={{ textAlign: 'center' }}>Bob Penny | Insurance Advisor</Header>
              <p style={{ textAlign: 'center' }}>Senior Vice President at Protected Self Insurance Program Managers, SVP at Global Intermediaries, SVP at AIG Specialty Excess, Vice President at C.V. Starr & Co.</p>
            </ScrollAnimation>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      <Segment basic textAlign='center'>
        <LaunchModal />
      </Segment>
    </div >
  )
}

HomeCCAbout.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeCCAbout