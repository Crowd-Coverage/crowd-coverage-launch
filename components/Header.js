import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
import LaunchModal from './LaunchModal'

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }} borderless>
      <Link route="/">
        <a className="item">Crowd Coverage</a>
      </Link>
      <Menu.Menu position="right">
        <LaunchModal />
      </Menu.Menu>
    </Menu>
  );
};