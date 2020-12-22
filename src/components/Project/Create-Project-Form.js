import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import Input from '../common/Input/Input';

import addProject from '../../services/project';

import '../../assets/scss/createProject.scss';

const CreateProjectForm = () => {
  const [data, setData] = useState({ projectName: '', key: '' });
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    const newProject = await addProject(data, token);
    // console.log(newProject)
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="create-project-wrapper">
      <Form onSubmit={handleSubmit}>
        <Input
          label="Project Name"
          handleChange={handleChange}
          name="projectName"
          placeholder="ex. PROJECT XYZ"
        />

        <Input label="Key" handleChange={handleChange} name="key" />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
