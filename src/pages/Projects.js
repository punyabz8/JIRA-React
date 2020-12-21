import React from 'react';

import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar/Navbar';

const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>

      <section>
        <a href="/create-project">
          <Button>Create project</Button>
        </a>
      </section>
    </div>
  );
};

export default Projects;
