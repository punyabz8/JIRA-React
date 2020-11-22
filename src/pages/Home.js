import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="d-flex">
        <Sidebar></Sidebar>
        <section className="p-3">
          <Switch>
            <Route path="/" component={Dashboard}></Route>
          </Switch>
        </section>
      </section>
    </div>
  );
};

export default Home;
