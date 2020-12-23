import React from 'react';
import CreateProjectForm from '../components/Project/Create-Project-Form';

import '../assets/scss/createProject.scss';

const CreateProjectPage = () => {
  return (
    <div className="create-project-page">
      <CreateProjectForm />
    </div>
  );
};

export default CreateProjectPage;
