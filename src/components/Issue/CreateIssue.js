import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import ModalDialog from '../common/Modal/Modal';
import Input from '../common/Input/Input';
import DropdownSelect from '../common/DropdownSelect/DropdownSelect';
import { getProjects } from '../../services/project';
import { getBoards } from '../../services/board';
import { getProjectMembers } from '../../services/user';
import { addTask } from '../../services/task';

const CreateIssue = ({ show, onHide }) => {
  const { user } = useAuth0();

  const [data, setData] = useState({ title: '', description: '', type: '', projects: [], boards: [], status: "backlog", members: [] });
  useEffect(async () => {
    const {projects} = await getProjects(user);
    setData({
      ...data,
      projects: [{id: 0, name: "---"}, ...projects]
    })
  }, []);

  const selectProject = async (name, project_id) => {
    const {boards} = await getBoards(project_id, user)
    const {members} = await getProjectMembers(project_id, user)
    setData({
      ...data,
      [name]: project_id,
      members: [{id: 0, given_name: "--", family_name: "--"}, ...members],
      boards: [{id: 0, name: "---"}, ...boards]
    })
  }

  const createTask = async (e) => {
    let {projects, members, boards, project_id, board_id, ...task} = data;
    const res = await addTask(project_id, board_id, task, user)
  }

  const handleProjectChange = async (name, value) => {
    await selectProject(name, value)
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <ModalDialog onSave={createTask} show={show} header="Create Issue" onHide={onHide}>
        <Form>
          <DropdownSelect
            on
            label="Project"
            name="project_id"
            options={[...data.projects.map((project) => {
              return {"name": project.name,
              "value": project.id}
            })]}
            selected={data.project_id}
            handleSelect={handleProjectChange}
          ></DropdownSelect>
          <DropdownSelect
            label="Board"
            name="board_id"
            selected={data.board_id}
            options={[...data.boards.map((board) => {
              return {"name": board.name,
              "value": board.id}
            })]}
            handleSelect={handleChange}
          ></DropdownSelect>
          <DropdownSelect
            label="Issue Type"
            name="type"
            selected={data.type}
            options={[{"name":"BUG", "value": "bug"}, {"name":"STORY", "value":"story"}, {"name":"TASK", "value":"task"} ]}
            handleSelect={handleChange}
          ></DropdownSelect>
          <Input label="Title" name="title" handleChange={(e) =>
            handleChange(e.target.name, e.target.value.trim())
          } />
          <Input label="Label" name="type" handleChange={(e) =>
            handleChange(e.target.name, e.target.value.trim())
          } />
          <Input as="textarea" label="Description" handleChange={(e) =>
            handleChange(e.target.name, e.target.value.trim())
          }
          name="description"
          />
          <DropdownSelect
            label="Assignee"
            name="assignee_id"
            selected={data.assignee_id}
            options={[...data.members.map((member) => {
              return {"name": member.given_name+" "+member.family_name,
              "value": member.user_id}
            })]}
            handleSelect={handleChange}
          ></DropdownSelect>
        </Form>
      </ModalDialog>
    </div>
  );
};

CreateIssue.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default CreateIssue;
