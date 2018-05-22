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
  Form,
  Card,
  Feed
} from 'semantic-ui-react'
import { Link } from '../routes';
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'
import Countdown from './Countdown'

const mainStyleBg = {
  backgroundColor: '#00BFFF',
  background: 'linear-gradient(to right, #1E90FF, #87CEFA)',
}

const cardStyle = {
  color: 'white',
  fontSize: '20px',
  backgroundColor: '#00BFFF',
  background: 'linear-gradient(to right, #1E90FF, #87CEFA)'
}

const header = [
  'Pre-sale Now Live!'
].join('')

const description = [
  'Click Here'
].join('')

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
      <Card centered raised href="https://www.startengine.com/crowd-coverage" color='blue'>
        <Image src='static/start_engine.svg' centered size='medium' style={{ backgroundColor: '#1E90FF' }} />
        <Card.Content header={header} description={description} style={cardStyle} />
        <Card.Content extra style={cardStyle}>
          <Countdown />
        </Card.Content>
      </Card>
    </Segment>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle