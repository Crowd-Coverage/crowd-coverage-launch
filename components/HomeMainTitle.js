import PropTypes from 'prop-types'
import React from 'react'
import { Container, Header, Button, Icon, Responsive, Image } from 'semantic-ui-react'

const HomeMainTitle = ({ mobile }) => {
  return (
    <div className="ui fluid image">
      <img src={'static/womanholdingcell.png'} />
      <div style={{ position: 'absolute', bottom: 0, width: '100%', height: 'auto', alignContent: 'center' }}>
        <Header
          as='h1'
          content='Crowd Coverage'
          textAlign='center'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          textAlign='center'
          inverted
          content='Property Protection Redefined'
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge' circular>
          Read The Whitepaper
        </Button>
      </div>
    </div>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle