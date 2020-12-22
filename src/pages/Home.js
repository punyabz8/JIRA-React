import React from 'react';

import { Switch, useRouteMatch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

import Board from '../views/Board';
import PrivateRouter from '../components/private-routes/Private-routes';

const Home = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <Navbar />
      <section className="d-flex">
        <Sidebar />
        <section className="p-3">
          <Switch>
            {/* <PrivateRouter
              path={`${url}/dashboard`}
              component={Dashboard}
            ></PrivateRouter> */}
            <PrivateRouter
              path={`${url}/board`}
              component={Board}
            ></PrivateRouter>
          </Switch>
        </section>
      </section>
    </div>
  );
};

export default Home;
