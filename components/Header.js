import React, { Component } from 'react';
import { Menu, Segment, Visibility, Image, Icon, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import LaunchModal from './LaunchModal'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '2em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  fontFamily: 'helvetica',
  alignContent: 'center'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  fontFamily: 'helvetica',
  alignContent: 'center',
  padding: '5px'
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
          <Link prefetch route={`/home`}><Menu.Item as='a'>Home</Menu.Item></Link>
          <Link route={`/static/cc_whitepaper.pdf`}><Menu.Item as='a'>Whitepaper</Menu.Item></Link>
          <Link route={`/tokeninfo`}><Menu.Item as='a'>Pre-Sale Info</Menu.Item></Link>
          <Menu.Item href='https://medium.com/@CrowdCoverage' as='a' target='_blank'>Blog</Menu.Item>
          <Menu.Menu>
          </Menu.Menu>
        </Menu>
      </Visibility>
    )
  }
}