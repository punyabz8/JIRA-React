import React from 'react';

import { Switch, useRouteMatch } from 'react-router-dom';

import Board from '../views/Board';
import Backlog from '../views/Backlog';
import Dashboard from '../views/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import ProjectSetting from '../views/ProjectSetting';
import ChartDisplay from '../components/Charts/Chart';
import PrivateRouter from '../components/private-routes/Private-routes';

const Home = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <Navbar />
      <section className="d-flex">
        <Sidebar />
        <section className="w-100 p-3">
          <Switch>
            {/* <PrivateRouter
              path={`${url}/dashboard`}
              component={Dashboard}
            ></PrivateRouter> */}
            <PrivateRouter
              path={`${url}/board`}
              component={Board}
            ></PrivateRouter>
            <PrivateRouter
              path={`${url}/backlog`}
              component={Backlog}
            ></PrivateRouter>
            <PrivateRouter
              path={`${url}/setting`}
              component={ProjectSetting}
            ></PrivateRouter>
            <PrivateRouter
              path={`${url}/chart`}
              component={ChartDisplay}
            ></PrivateRouter>
          </Switch>
        </section>
      </section>
    </div>
  );
};

export default Home;
