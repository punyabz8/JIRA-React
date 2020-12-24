import React, { useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Input from '../components/common/Input/Input';
import DropdownSelect from '../components/common/DropdownSelect/DropdownSelect';

import { updateProject } from '../services/project';

const ProjectSetting = () => {
  const { url } = useRouteMatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ name: '', key: '', type: '' });
  const { user } = useAuth0();
  const types = [{ name: 'Software' }, { name: 'Research' }];

  const dropdown = useRef(null);

  const handleSubmit = async (e) => {
    const urlArr = url.split('/');

    const projectId = urlArr[2];

    e.preventDefault();
    setIsLoading(true);

    if (!data.type) {
      data.type = types[0].name;
    }

    const result = await updateProject(projectId, data, user);

    setIsLoading(false);
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <section>
        <Input
          label="Project Name"
          handleChange={(e) =>
            handleChange(e.target.name, e.target.value.trim())
          }
          name="name"
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
        <Button onClick={handleSubmit}>Save</Button>
      </section>
    </div>
  );
};

export default ProjectSetting;
