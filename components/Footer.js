import React from 'react';
import { List, Grid, Header, Container, Segment, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 2em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <List link inverted>
                <List.Item as='a'>Token Pre-Sale Info</List.Item>
                <List.Item as='a'>Whitepaper</List.Item>
                <Link prefetch route={`/faq`}><List.Item as='a'>FAQ</List.Item></Link>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Crowd Coverage</Header>
              <p>Join the pre sale and help change the insurance industry</p>
              <a href='https://www.reddit.com/r/CrowdCoverage/' target='blank'>
                <Icon name="reddit alien" link size='large' />
              </a>
              <a href='https://www.facebook.com/Crowd-Coverage-586946688316792/' target='blank'>
                <Icon name="facebook" link size='large' />
              </a>
              <a href='https://twitter.com/CrowdCoverage' target='blank'>
                <Icon name="twitter" link size='large' />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};