import PropTypes from 'prop-types'
import React from 'react'
import { Container, Header, Button, Icon, Responsive } from 'semantic-ui-react'

const HomeMainTitle = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as='h1'
        content='Crowd Coverage'
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Property Protection Redfined.'
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Button primary size='huge'>
        Read The Whitepaper
      <Icon name='right arrow' />
      </Button>
    </Container>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle