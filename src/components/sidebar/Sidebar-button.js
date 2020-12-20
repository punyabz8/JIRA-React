import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import '../../assets/scss/sidebar.scss';

const SidebarButton = ({ children, path }) => {
  return (
    <Button variant="outline-*" className="text-left sidebar-button" block>
      <NavLink
        to={path}
        activeStyle={{
          fontWeight: 'bold',
          color: '#1252b3',
        }}
      >
        <div>{children}</div>
      </NavLink>
    </Button>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
};

export default SidebarButton;
