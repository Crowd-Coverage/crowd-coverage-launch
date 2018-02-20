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
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' style={{
              fontSize: mobile ? '1em' : '3em',
              fontWeight: 'bold',
              marginBottom: 0,
              marginTop: mobile ? '1.5em' : '3em',
            }}>Our Mission</Header>
            <p style={{ fontSize: '1.33em' }}>
              To disrupt the insurance industry through the development of a decentralized insurance service.
            </p>
            <Image src='/static/comparison.png' />
          </Grid.Column>
          <Grid.Column>
            <Header
              as='h3'
              style={{
                fontSize: mobile ? '1em' : '3em',
                fontWeight: 'bold',
                marginBottom: 0,
                marginTop: mobile ? '1em' : '2em',
              }}
            >
              Think warranty services are overpriced?
            </Header>
            <p style={{ fontSize: '1em' }}>
              So do we. Enter Crowd Coverage: Coverage on your own terms,
              faster and cheaper than traditional policies.
            </p>
            <Image src='/static/youngguycell.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column style={{
            fontSize: mobile ? '1em' : '3em',
            fontWeight: 'bold',
            marginBottom: 0,
            marginTop: mobile ? '1em' : '2em',
          }}>
            <Header icon='users' content='Peer to Peer'>
            </Header>
            <p>Property Funding on Ethereum Smart Contracts</p>
          </Grid.Column>
          <Grid.Column style={{
            fontSize: mobile ? '1em' : '3em',
            fontWeight: 'bold',
            marginBottom: 0,
            marginTop: mobile ? '1em' : '2em',
          }}>
            <Header icon='user circle' content='An Open Platform'>
            </Header>
            <p>For all types of users to help fund a policy</p>
          </Grid.Column>
          <Grid.Column style={{
            fontSize: mobile ? '1em' : '3em',
            fontWeight: 'bold',
            marginBottom: 0,
            marginTop: mobile ? '1em' : '2em',
          }}>
            <Header icon='rocket' content='Get ready for our launch'>
            </Header>
            <p>The presale is coming, do not miss it! Sign up for updates</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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