import React, { Component } from 'react'
import Clock from './Clock'
import {
  Card,
  Feed
} from 'semantic-ui-react'

class Countdown extends Component {

  state = {
    deadline: 'July, 20, 2018'
  }

  render() {
    return (
      <div>
        <Clock deadline={this.state.deadline} />
      </div>

    );
  }
}

export default Countdown