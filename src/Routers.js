import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRouter from './components/private-routes/Private-routes';

import Home from './pages/Home';

const Routers = () => {
  return (
    <Switch>
      <PrivateRouter path="/" component={Home}></PrivateRouter>
    </Switch>
  );
};

export default Routers;
