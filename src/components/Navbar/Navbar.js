import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

import RoundAvatar from '../common/RoundAvatar/RoundAvatar';

import '../../assets/scss/navbar.scss';
import image from '../../assets/images/jira.png';

const Navbar = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="navbar-container">
      <section>
        <ul>
          <li>
            <div className="logo-wrapper">
              <img src={image} alt="logo"></img>
            </div>
          </li>
          <li>Your work</li>
          <li>Filter</li>
          <li>Dashboard</li>
          <li>
            <Button>Create</Button>
          </li>
        </ul>
      </section>

      <section className="d-flex">
        <Button variant="light" onClick={logout}>
          logout
        </Button>
        <ul>
          {user ? (
            <li>
              <RoundAvatar image={user.picture}></RoundAvatar>
            </li>
          ) : null}
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
