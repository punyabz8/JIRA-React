import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import CreateProjectPage from './pages/Create-New-Project';

const Routers = () => {
  return (
    <Switch>
      <Route path="/create-project" component={CreateProjectPage}></Route>
      <Route path="/project/:projectId" component={Home}></Route>
      <Route path="/projects" component={Projects}></Route>
    </Switch>
  );
};

export default Routers;
