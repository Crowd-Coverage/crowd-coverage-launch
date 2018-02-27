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



const TokenInfo = () => {
  return (
    <Segment>
      <Container textAlign='center'>
        <Header as='h1'>
          <Image src='static/token.png' size='mini' centered />
          Token Sale Info
    </Header>
        <h3>All pre-sale customers must undergo an automatic whitelisting process before purchasing by:</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <ol style={{ padding: '15px', textAlign: 'left' }}>
            <ScrollAnimation animateIn='fadeIn' duration='2'>
              <li> Providing a valid Ethereum wallet address</li>
            </ScrollAnimation>
            <Divider />
            <ScrollAnimation animateIn='fadeIn' duration='2'>
              <li>stating the amount of COVR tokens they intend to purchase</li>
            </ScrollAnimation>
            <Divider />
            <ScrollAnimation animateIn='fadeIn' duration='2'>
              <li>reading and returning a signed copy of provided compliance forms and
contracts</li>
            </ScrollAnimation>
            <Divider />
            <ScrollAnimation animateIn='fadeIn' duration='2'>
              <li>reading the entirety of this whitepaper and affirming they understand all
terms, conditions, and stipulations provided herein, and</li>
            </ScrollAnimation>
            <Divider />
            <ScrollAnimation animateIn='fadeIn' duration='2'>
              <li>providing all KYC compliant personal information.</li>
            </ScrollAnimation>
          </ol>
          <Divider />
        </ScrollAnimation>
      </Container>
      <Container textAlign='center' style={{ padding: '10px' }}>
        <ScrollAnimation animateIn='fadeIn' duration='2'>
          <p>
            All purchasers of the COVR token acknowledge that Crowd Coverage itself is NOT an insurance provider and that COVR tokens serve the utility of access to the Crowd Coverage platform; they are not considered solicitations of insurance, nor offerings of securities.
          </p>
          <p>
            <strong>Twenty percent of COVR tokens will be sold in the pre-sale</strong> at rates listed above by early-adopters whitelisted for the pre-sale. The funding from our pre-sale will be utilized to fund the development of the alpha platform and the early operational expenses associated with technology startups, including but not limited to legal counsel, web design, marketing, etc. All pre-sale customers must affirm their agreement with the Crowd Coverage company regarding their willingness to comply with all relevant laws in their jurisdiction, as well as affirm that they understand all risks acknowledged in the ‘Risks’ section of this document.
          </p>
        </ScrollAnimation>
        <ul style={{ padding: '10px', textAlign: 'left' }}>
          <ScrollAnimation animateIn='fadeIn' duration='2'>
            <li>Phase 1 — 50% Pre-Sale Discount 3% of 400 million tokens = 12,000,000 tokens 12,000,000 x 0.0000125 = 150 ETH</li>
            <li>Wherein 1 ETH = 80,000 COVR
Minimum Purchasing Amount: 4 ETH</li>
          </ScrollAnimation>
        </ul>
        <Container textAlign='center' style={{ padding: '5px' }}>
          <ScrollAnimation animateIn='fadeIn' duration='2'>
            <p>
              Our initial funding goal of 150 ETH will primarily be used for startup costs including but not limited to research and development, web design overhauls, operational costs, and marketing for the proceeding sales. More specifics on fund distribution can be reviewed below.
          </p>
          </ScrollAnimation>
        </Container>
      </Container>
      <Container textAlign='center'>
        <LaunchModal />
      </Container>
    </Segment>
  )
}

export default TokenInfo