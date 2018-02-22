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
  Divider,
  Form
} from 'semantic-ui-react'
import LaunchModal from './LaunchModal'

const HomeMainTitle = ({ mobile }) => {
  return (
    <Container fluid textAlign='center'>
      <Image src='static/cclogo.png' centered />
      <Header
        as='h1'
        content='Decentralized Property Insurance'
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Get Ready for our token sale!'
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <LaunchModal />
      <Divider />
      <div>
        <a href='http://t.me/crowdcoverage' target='blank'>
          <Icon name="telegram" link size='large' />
          <p>Take a Look at our telegram</p>
        </a>
      </div>
    </Container>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle