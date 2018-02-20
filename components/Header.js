import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }} borderless>
      <Link route="/">
        <a className="item">Crowd Coverage</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Sign Up For The Pre Sale</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};