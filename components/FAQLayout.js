import React from 'react'
import { Container, Image, Responsive, Segment } from 'semantic-ui-react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import FAQ from './FAQ'

export default props => {
  return (
    <Segment basic>
      <Container>
        <Head />
        <Header>
          {props.children}
        </Header>
        <FAQ />
        <Footer />
      </Container>
    </Segment>
  )
}