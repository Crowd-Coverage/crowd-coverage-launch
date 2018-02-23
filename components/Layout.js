import React from 'react'
import { Container, Image, Responsive, Segment, Visibility } from 'semantic-ui-react'
import Head from 'next/head'
import Header from './Header'
import HomeMainTitle from './HomeMainTitle'
import HomeCCAbout from './HomeCCAbout'
import Footer from './Footer'

export default props => {
  return (
    <Segment>
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        </Head>
        <Segment.Group>
          <Responsive {...Responsive.onlyMobile}>
            <Header>
              {props.children}
            </Header>
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
          <Responsive {...Responsive.onlyTablet}>
            <Header>
              {props.children}
            </Header>
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
          <Responsive {...Responsive.onlyComputer}>
            <Header>
              {props.children}
            </Header>
            <HomeMainTitle mobile />
            <HomeCCAbout mobile />
            <Footer />
          </Responsive>
        </Segment.Group>
      </Container>
    </Segment>
  )
}