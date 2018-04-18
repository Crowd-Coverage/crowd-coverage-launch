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
  Table,
  Label
} from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'



const TokenInfo = () => {
  return (
    <Segment>
      <Header as='h1'>
        <Image src='static/token.png' size='mini' centered />
        Token Sale Info
    </Header>
      <Container textAlign='center' style={{ padding: '10px', fontSize: '18px' }}>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>
            We are excited to announce that we will be partnering with our friends at <strong>StartEngine</strong> to conduct our pre-sale! Starting on April 20th, we will be selling 107,000 shares of common stock in CrowdCoverage, Inc., for a price of $1 per share. $100 will be the minimum available for purchase.
          </p>
          <p>
            In accordance with the revolutionary SEC-compliant RATE model developed by StartEngine, each purchase of 100 shares will grant the purchaser a bonus of 8000 COVR tokens for use on our platform!
          </p>
          <p>
            This means that for every $0.0125 invested in CrowdCoverage, one token will be granted to the investor within a reasonable timeline following the sale (estimated 60 days).
          </p>
          <p>
            Upon the completion of the sale, all investors will be contacted with more information about redeeming these bonuses. All early participants in this sale will therefore be given exclusive early access to our alpha platform once it launches!
          </p>
          <Table celled textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Amount Invested</Table.HeaderCell>
                <Table.HeaderCell>Bonus Awarded (in COVR Tokens)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>8,000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>$500</Table.Cell>
                <Table.Cell>40,000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>$1,000</Table.Cell>
                <Table.Cell>80,000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>$2,500</Table.Cell>
                <Table.Cell>200,000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>$5,000</Table.Cell>
                <Table.Cell>400,000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>$10,000</Table.Cell>
                <Table.Cell>800,000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <p>
            Investors who purchase common stock now will receive 35% more COVR tokens than if they were to wait until our public sale to purchase. Buy now and get the chance to use our platform right when it’s launched, for a lot cheaper than if you wait!
          </p>
          <p>
            If our funding cap of $107,000 is reached, we plan to extend our pre-sale to a $1.07 million max-cap sale. Bonus rates will remain the same for this extension period. Full terms, conditions, and risks may be read on the StartEngine campaign page.
          </p>
          <p>
            Our public sale will be conducted after the launch of our alpha platform and will have a maximum funding cap of approximately $3 million. COVR tokens for this sale will be distributed at a rate that will begin at about one token bonus per $0.015 invested, maxing out at one token bonus per $0.02 invested.
          </p>
          <p>
            Join our email list or follow us on social media to be notified when further details and dates are released regarding our public sale!
          </p>
        </ScrollAnimation>
      </Container>
      <Container textAlign='center'>
        <LaunchModal />
      </Container>
    </Segment>
  )
}

export default TokenInfo