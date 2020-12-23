import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Input from '../common/Input/Input';

import { addProject } from '../../services/project';

import '../../assets/scss/createProject.scss';
import DropdownSelect from '../common/DropdownSelect/DropdownSelect';

const CreateProjectForm = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ name: '', key: '', type: '' });
  const { user } = useAuth0();
  const types = [{ name: 'Software' }, { name: 'Research' }];

  const dropdown = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!data.type) {
      data.type = types[0].name;
    }

    const result = await addProject(data, user);

    setIsLoading(false);

    if (result && !result.messages) {
      history.push(`/project/${result.projects[0].id}/board`);
    }
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="create-project-wrapper">
      <Form onSubmit={handleSubmit}>
        <Input
          label="Project Name"
          handleChange={(e) =>
            handleChange(e.target.name, e.target.value.trim())
          }
          name="name"
          placeholder="ex. PROJECT XYZ"
        />

        <Input
          label="Key"
          handleChange={(e) =>
            handleChange(e.target.name, e.target.value.trim())
          }
          name="key"
        />

        <DropdownSelect
          options={types}
          label="Project type"
          name="type"
          handleSelect={handleChange}
          reference={dropdown}
        />

        <div className="mt-3">
          <Button type="submit ">
            {isLoading ? 'loading..' : <div>Save</div>}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
