import React, { Component } from 'react';
import { Menu, Segment, Visibility, Image } from 'semantic-ui-react';
import { Link } from '../routes';
import LaunchModal from './LaunchModal'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class Header extends Component {
  state = {
    menuFixed: false
  }

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })


  render() {
    const { menuFixed } = this.state

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu fixed={menuFixed && 'top'} style={menuFixed ? fixedMenuStyle : menuStyle} borderless>
          <Menu.Menu>
            <Link route="/">
              <Image src='static/crowd_coverage_logo_mini.png' />
            </Link>
          </Menu.Menu>
          <Menu.Menu position="right">
            <LaunchModal />
          </Menu.Menu>
        </Menu>
      </Visibility>
    )
  }
}