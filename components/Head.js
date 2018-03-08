import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Router from 'next/router'

const gaTrackingId = 'UA-115469214-1'

Router.onRouteChangeComplete = () => {
  ReactGA.initialize(gaTrackingId)
  ReactGA.pageview(window.location.pathname)
}

export default () => {
  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || []
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '${gaTrackingId}')
        `}} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon"></link>
    </Head>
  )
}