import React from 'react'
import { Container, Image, Responsive, Segment } from 'semantic-ui-react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import TokenInfo from './TokenInfo'

export default props => {
  return (
    <Segment basic>
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        </Head>
        <Header>
          {props.children}
        </Header>
        <TokenInfo />
        <Footer />
      </Container>
    </Segment>
  )
}