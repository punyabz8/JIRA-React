import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

const Routers = () => {
  return (
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
};

export default Routers;
