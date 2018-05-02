import PropTypes from 'prop-types'
import React from 'react'
import {
  Segment,
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
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'

const mainStyleBg = {
  backgroundColor: '#00BFFF',
  background: 'linear-gradient(to right, #1E90FF, #87CEFA)',
}

const HomeMainTitle = ({ mobile }) => {
  return (
    <Segment basic textAlign='center' style={mainStyleBg}>
      <Image src='static/Crowd-Coverage-Logo-white.png' centered size='medium' />
      <Header
        as='h1'
        inverted
        content='Revolutionizing the Insurance Industry'
        style={{ fontFamily: 'helvetica' }}
      />
    </Segment>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle