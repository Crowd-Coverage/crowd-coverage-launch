import React from 'react'
import { Button, Icon, Container, Image, Responsive, Segment } from 'semantic-ui-react'
import Head from './Head'
import Header from './Header'
import HomeMainTitle from './HomeMainTitle'
import HomeCCAbout from './HomeCCAbout'
import Footer from './Footer'
import ChatButton from './ChatButton'

export default props => {
  return (
    <Segment basic>
      <Head />
      <Header>
        {props.children}
      </Header>
      <Segment.Group >
        <Responsive>
          <HomeMainTitle mobile />
          <HomeCCAbout mobile />
          <ChatButton>
            {props.children}
          </ChatButton>
          <Footer />
        </Responsive>
      </Segment.Group>
    </Segment>
  )
}