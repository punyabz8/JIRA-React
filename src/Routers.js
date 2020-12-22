import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import CreateProjectPage from './pages/Create-New-Project';
import PrivateRouter from './components/private-routes/Private-routes';

const Routers = () => {
  return (
    <Switch>
      <PrivateRouter
        path="/create-project"
        component={CreateProjectPage}
      ></PrivateRouter>
      <PrivateRouter path="/project/:id" component={Home}></PrivateRouter>
      <PrivateRouter path="/projects" component={Projects}></PrivateRouter>
      <PrivateRouter
        path="/"
        exact
        component={() => <Redirect to="/projects" />}
      ></PrivateRouter>
    </Switch>
  );
};

export default Routers;
