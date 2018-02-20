import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
  Button,
  Icon,
  Responsive,
  Image,
  Modal,
  Checkbox,
  Form
} from 'semantic-ui-react'
import LaunchModal from './LaunchModal'

const HomeMainTitle = ({ mobile }) => {
  return (
    <Container fluid textAlign='center'>
      <div className="ui fluid image" style={{ alignContent: 'center' }}>
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
          <LaunchModal />
        </div>
      </div>
    </Container>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle