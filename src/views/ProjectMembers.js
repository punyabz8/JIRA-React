import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getUsers, addProjectMembers } from '../services/user';
import ModalDialog from '../components/common/Modal/Modal';
import Input from '../components/common/Input/Input';
import DropdownSelect from '../components/common/DropdownSelect/DropdownSelect';

const ProjectMembers = (props) => {
  const { url } = useRouteMatch();

  const { user } = useAuth0();
  const [data, setData] = useState({
    users: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const { users } = await getUsers(user);

      setData({
        ...data,
        users: [{ id: 0, given_name: '--', family_name: '--' }, ...users],
      });
    };

    fetchUsers();
  }, []);

  const addUserMember = async (e) => {
    const res = await addProjectMembers(
      url.split('/')[2],
      { user_id: data.user_id },
      user
    );

    props.onHide();
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <ModalDialog
        show={props.show}
        onSave={addUserMember}
        header="Add members"
        onHide={props.onHide}
      >
        <Form>
          <DropdownSelect
            label="Assignee"
            name="user_id"
            selected={data.user_id}
            options={[
              ...data.users.map((member) => {
                return {
                  name: `${member.given_name} ${member.family_name}`,
                  value: member.id,
                };
              }),
            ]}
            handleSelect={handleChange}
          ></DropdownSelect>
        </Form>
      </ModalDialog>
    </div>
  );
};

ProjectMembers.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default ProjectMembers;
