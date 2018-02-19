import React from 'react';
import { List, Grid, Header, Container, Segment } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 2em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Token Pre-Sale Info</List.Item>
                <List.Item as='a'>Whitepaper</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Team</List.Item>
                <List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>Roadmap</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Crowd Coverage</Header>
              <p>Join the pre sale and help change the insurance industry</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};