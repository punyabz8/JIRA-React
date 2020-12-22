import React from 'react';

import { Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

import Board from '../views/Board';
import Backlog from '../views/Backlog';
import Dashboard from '../views/Dashboard';
import PrivateRouter from '../components/private-routes/Private-routes';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="d-flex">
        <Sidebar />
        <section className="w-100 p-3">
          <Switch>
            <PrivateRouter path="/" component={Dashboard} exact></PrivateRouter>
            <PrivateRouter path="/board" component={Board}></PrivateRouter>
            <PrivateRouter path="/backlog" component={Backlog}></PrivateRouter>
          </Switch>
        </section>
      </section>
    </div>
  );
};

export default Home;
