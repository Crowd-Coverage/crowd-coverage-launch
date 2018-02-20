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


const HomeCCAbout = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical >
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>Our Mission</Header>
            <p style={{ fontSize: '1.33em' }}>
              To disrupt the insurance industry through the development of a decentralized insurance service.
            </p>
            <Image src='/static/comparison.png' />
          </Grid.Column>
          <Grid.Column>
            <Header
              as='h3'
              style={{ fontSize: '2em' }}
            >
              Think warranty services are overpriced?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              So do we. Enter Crowd Coverage: Coverage on your own terms,
              faster and cheaper than traditional policies.
            </p>
            <Image src='/static/youngguycell.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Header icon='users' content='P2P Crowdfunding'>
            </Header>
            <p>Property Funding on Ethereum Smart Contracts</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon='user circle' content='The Platform is Open'>
            </Header>
            <p>For all types of users to help fund a policy</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon='rocket' content='Get ready for our launch'>
            </Header>
            <p>The presale is coming, do not miss it! Sign up for updates</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='left'>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container textAlign='center'>
        <LaunchModal />
      </Container>
    </Segment>
  )
}

export default HomeCCAbout