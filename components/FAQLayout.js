import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import FAQ from './FAQ'

export default props => {
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Header>
        {props.children}
      </Header>
      <FAQ />
      <Footer />
    </Container>
  )
}