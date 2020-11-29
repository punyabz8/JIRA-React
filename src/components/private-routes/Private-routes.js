import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import PropTypes from 'prop-types';

const PrivateRouter = ({ component, ...args }) => {
  return (
    <Route component={withAuthenticationRequired(component)} {...args}></Route>
  );
};

PrivateRouter.propTypes = {
  component: PropTypes.any,
};

export default PrivateRouter;
