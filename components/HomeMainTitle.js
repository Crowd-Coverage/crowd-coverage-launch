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
      <Image src='static/cclogo.png' centered />
      <Header
        as='h1'
        content='Decentralized Property Insurance'
        textAlign='center'
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
        content='Get Ready for our token sale!'
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <LaunchModal />
    </Container>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle