import React from 'react'
import { Button, Icon, Container, Image, Responsive, Segment } from 'semantic-ui-react'
import { Link } from '../routes';
import Head from './Head'

const mainStyleBg = {
  backgroundColor: '#00BFFF',
  background: 'linear-gradient(to right, #1E90FF, #87CEFA)',
  font: 'arial',
  textAlign: 'center'
}

const socialStyle = {
  padding: '20px'
}

export default () => {
  return (
    <Segment basic style={mainStyleBg} inverted>
      <Head />
      <Image src='static/Crowd-Coverage-Logo-white.png' centered size='medium' />
      <h2>We are excited to announce that we will be partnering with our friends at <strong>StartEngine</strong> to conduct our pre-sale! Starting on April 20th, we will be selling 107,000 shares of common stock in CrowdCoverage, Inc., for a price of $1 per share. $100 will be the minimum available for purchase.</h2>
      <h2>For more info and to join the pre sale click on the StartEngine link below!</h2>
      <Button>StartEngine</Button>
      <Button>
        <Link route={`/home`} as='a'>Go to our site</Link>
      </Button>
      <div style={socialStyle}>
        <a href='https://www.reddit.com/r/CrowdCoverage/' target='blank' rel="noopener">
          <Icon name="reddit alien" link size='huge' inverted />
        </a>
        <a href='https://www.facebook.com/Crowd-Coverage-586946688316792/' target='blank' rel="noopener">
          <Icon name="facebook" link size='huge' inverted />
        </a>
        <a href='https://twitter.com/CrowdCoverage' target='blank' rel="noopener">
          <Icon name="twitter" link size='huge' inverted />
        </a>
        <a href='http://t.me/crowdcoverage' target='blank' rel="noopener">
          <Icon name="telegram" link size='huge' inverted />
        </a>
      </div>
    </Segment>
  )
}