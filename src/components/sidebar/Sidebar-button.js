import React from 'react';

import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import '../../assets/scss/sidebar.scss';

const SidebarButton = ({ children }) => {
  return (
    <Button variant="outline-*" className="text-left sidebar-button" block>
      <div>{children}</div>
    </Button>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.any,
};

export default SidebarButton;
