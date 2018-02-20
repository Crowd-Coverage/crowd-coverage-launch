import React from 'react'
import {
  Container,
  Grid,
  Responsive,
  Segment,
  Header,
  Image,
  Button
} from 'semantic-ui-react'


const HomeCCAbout = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
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

        <Grid.Row>
          <Grid.Column>
            <Image src='/assets/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Join The Pre-Sale</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default HomeCCAbout