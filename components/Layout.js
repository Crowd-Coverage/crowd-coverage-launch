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
        <Responsive {...Responsive.onlyMobile}>
          <HomeMainTitle mobile />
          <HomeCCAbout mobile />
          <Footer />
        </Responsive>
      </Segment.Group>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Segment.Group>
        <Responsive  {...Responsive.onlyTablet}>
          <HomeMainTitle mobile />
          <HomeCCAbout mobile />
          <Footer />
        </Responsive>
      </Segment.Group>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Segment.Group>
        <Responsive  {...Responsive.onlyComputer}>
          <HomeMainTitle mobile />
          <HomeCCAbout mobile />
          <Footer />
        </Responsive>
      </Segment.Group>
    </Segment>
  )
}