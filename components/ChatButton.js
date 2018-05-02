import React, { Component } from 'react';
import { Button, Menu, Segment, Visibility, Image, Icon } from 'semantic-ui-react';
import { Link } from '../routes';
import LaunchModal from './LaunchModal'

export default class ChatButton extends Component {

  render() {
    return (
      <Menu secondary compact={true} fixed='bottom' borderless>
        <Menu.Menu position='right'>
          <LaunchModal />
          <Button circular color='linkedin'>
            <a href='http://t.me/crowdcoverage' target='blank' rel="noopener" style={{ color: 'white' }}>
              <Icon name="telegram" link size='huge' />
              Chat
            </a>
          </Button>
        </Menu.Menu>
      </Menu>

    )
  }
}
