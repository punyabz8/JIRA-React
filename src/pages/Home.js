import React from 'react';

import { Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

import Dashboard from '../views/Dashboard';
import Board from '../views/Board';
import PrivateRouter from '../components/private-routes/Private-routes';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="d-flex">
        <Sidebar />
        <section className="p-3">
          <Switch>
            <PrivateRouter
              path="/dashboard"
              component={Dashboard}
            ></PrivateRouter>
            <PrivateRouter path="/board" component={Board}></PrivateRouter>
          </Switch>
        </section>
      </section>
    </div>
  );
};

export default Home;
