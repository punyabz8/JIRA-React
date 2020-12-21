import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Input from '../common/Input/Input';

import '../../assets/scss/createProject.scss';

const CreateProjectForm = () => {
  const [data, setData] = useState({ projectName: '', key: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
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
