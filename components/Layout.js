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
      <Container>
        <Head />
        <Header>
          {props.children}
        </Header>
        <Segment.Group  >
          <Responsive as={Segment} {...Responsive.onlyMobile}>
            <HomeMainTitle mobile />
            <HomeCCAbout mobile />
            <Footer />
          </Responsive>
        </Segment.Group>
      </Container>
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        </Head>
        <Segment.Group>
          <Responsive as={Segment} {...Responsive.onlyTablet}>
            <HomeMainTitle mobile />
            <HomeCCAbout mobile />
            <Footer />
          </Responsive>
        </Segment.Group>
      </Container>
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        </Head>
        <Segment.Group>
          <Responsive as={Segment} {...Responsive.onlyComputer}>
            <HomeMainTitle mobile />
            <HomeCCAbout mobile />
            <Footer />
          </Responsive>
        </Segment.Group>
      </Container>
    </Segment>
  )
}