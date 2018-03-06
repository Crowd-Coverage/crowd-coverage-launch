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
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'

const HomeMainTitle = ({ mobile }) => {
  return (
    <Container fluid textAlign='center'>
      <ScrollAnimation animateIn='fadeIn' duration='2'>

        <Image src='static/crowd_coverage_logo_300_square.png' centered size='large' />
        <Header
          as='h1'
          content='Revolutionizing the Insurance Industry'
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
        <div style={{ padding: '5px' }}>
          <a href='http://t.me/crowdcoverage' target='blank'>
            <Icon name="telegram" link size='huge' />
          </a>
        </div>
        <Divider />
      </ScrollAnimation>
    </Container>
  )
}

HomeMainTitle.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeMainTitle