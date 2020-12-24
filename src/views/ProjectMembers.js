import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { getUsers, addProjectMembers } from '../services/user';
import ModalDialog from '../components/common/Modal/Modal';
import { Form } from 'react-bootstrap';
import Input from '../components/common/Input/Input';
import DropdownSelect from '../components/common/DropdownSelect/DropdownSelect';

const ProjectMembers = (props) => {
    const { user } = useAuth0();
    const [data, setData] = useState({
        users: []
    })

    useEffect(() => {
        const fetchUsers = async () => {
            const { users } = await getUsers(user)
            console.log(users)
            setData({
                ...data,
                users: [{ id: 0, given_name: '--', family_name: '--' }, ...users],
            });
        }

        fetchUsers();
    }, [])

    const addUserMember = async (e) => {
        const res = await addProjectMembers(props.match.url.split("/")[2], {"user_id": data.user_id}, user)
    } 

    const handleChange = (name, value) => {
        setData({
        ...data,
        [name]: value,
        });
    };

    return (
        <div>
            <h1>Project Members</h1>
            <ModalDialog
                show={true}
                onSave={addUserMember}
                header="Add members"
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

export default ProjectMembers;
