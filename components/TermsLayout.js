import React from 'react'
import { Container, Image, Responsive, Segment } from 'semantic-ui-react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import Terms from './Terms'

export default props => {
  return (
    <Segment basic>
      <Container>
        <Head />
        <Header>
          {props.children}
        </Header>
        <Terms />
        <Footer />
      </Container>
    </Segment>
  )
}