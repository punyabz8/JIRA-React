import { useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';

import BacklogComponent from '../components/BacklogComponent/BacklogComponent';
import { backlogTask } from '../mocks/task';
import { getTasks, updateTask } from '../services/task';

import { convertArrayToBacklogObject } from '../utils/array';

import '../assets/scss/backlog.scss';

const Backlog = () => {
  const [task, setTask] = useState([]);
  const { url } = useRouteMatch();
  const { user } = useAuth0();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, category) => {
    const urlArr = url.split('/');
    const projectId = urlArr[2];
    const boardId = urlArr[4];
    let status = category;

    if (status !== 'backlog') {
      status = 'active';
    }
    const id = JSON.parse(e.dataTransfer.getData('_id'));

    if (id.category !== 'backlog') {
      id.category = 'active';
    }
    const draggingItem = task[id.category].find((item) => item.id === id.id);

    if (draggingItem) {
      const filteredTask = task[id.category].filter(
        (item) => item.id !== draggingItem.id
      );

      setTask({
        ...task,
        [id.category]: filteredTask,
        [status]:
          status === id.category
            ? task[status]
            : [...task[status], draggingItem],
      });

      await updateTask(
        projectId,
        boardId,
        id.id,
        {
          status: category === 'active' ? 'todo' : 'backlog',
        },
        user
      );
    }
  };

  useEffect(() => {
    const urlArr = url.split('/');
    const projectId = urlArr[2];
    const boardId = urlArr[4];
    const fetchTasks = async () => {
      const results = await getTasks(projectId, boardId, user);

      setTask(convertArrayToBacklogObject(results.issues));
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <div
        className="mb-3"
        onDrop={(e) => handleDrop(e, 'active')}
        onDragOver={handleDragOver}
      >
        <BacklogComponent tasks={task.active} title="Board" category="board" />
      </div>
      <div onDrop={(e) => handleDrop(e, 'backlog')} onDragOver={handleDragOver}>
        <BacklogComponent
          tasks={task.backlog}
          title="Backlog"
          category="backlog"
        />
      </div>
    </div>
  );
};

export default Backlog;
