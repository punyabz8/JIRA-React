import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import PropTypes from 'prop-types';

import Loading from '../common/Loading/Loading';

const PrivateRouter = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        // eslint-disable-next-line react/display-name
        onRedirecting: () => <Loading />,
      })}
      {...args}
    ></Route>
  );
};

PrivateRouter.propTypes = {
  component: PropTypes.any,
};

export default PrivateRouter;
