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
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>Our Mission</Header>
            <p style={{ fontSize: '1.33em' }}>
              Are you the type who's lucky to go a year without spilling coffee on your keyboard?
              Crack your phone screen? Drop your camera? Break your charging cable?
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>Think warranty services are overpriced?
</Header>
            <p style={{ fontSize: '1.33em' }}>
              So do we. Enter Crowd Coverage: Coverage on your own terms,
              faster and cheaper than traditional policies.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='/assets/images/wireframe/white-image.png'
            />
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