import React, { Component } from 'react'

export default class ChatBot extends Component {

  state = {
    answers: '',
    open: false
  }

  render() {
    return (
      <Portal>
        <h1>This is where the chat bot UI will trigger the logic.</h1>
      </Portal>
    )
  }
}