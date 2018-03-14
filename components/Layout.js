import React from 'react'
import { Container, Image, Responsive, Segment } from 'semantic-ui-react'
import Head from './Head'
import Header from './Header'
import HomeMainTitle from './HomeMainTitle'
import HomeCCAbout from './HomeCCAbout'
import Footer from './Footer'

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
          <Footer />
        </Responsive>
      </Segment.Group>
    </Segment>
  )
}