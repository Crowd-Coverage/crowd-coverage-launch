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
  background: 'linear-gradient(to right, #1E90FF, #87CEFA)'
}

const HomeMainTitle = ({ mobile }) => {
  return (
    <Segment basic textAlign='center' style={mainStyleBg}>
      <Image src='static/crowd_coverage_logo_300_square.png' centered size='medium' />
      <Header
        as='h1'
        inverted
        content='Revolutionizing the Insurance Industry'
      />
      <LaunchModal />
      <div style={{ padding: '5px' }}>
        <Button style={{ background: 'linear-gradient(to right, #87CEFA, #FFFFE0)', color: 'white' }}>
          <a href='http://t.me/crowdcoverage' target='blank'>
            <Icon name="telegram" link size='huge' />
            Talk to us on Telegram
          </a>
        </Button>
      </div>
    </Segment>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle