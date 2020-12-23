import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import SwimLine from '../components/Swimline/Swim-line';
import { convertArrayToObject, convertObjectIntoArray } from '../utils/array';
import { getTasks } from '../services/task';

import '../assets/scss/board.scss';

const Board = () => {
  const { url } = useRouteMatch();
  const { user } = useAuth0();

  const [task, setTask] = useState([]);
  const [currentOverTaskIndex, setCurrentOverTaskIndex] = useState(null);
  const swimlines = ['todo', 'done', 'In Progress', 'QA'];

  useEffect(() => {
    const urlArr = url.split('/');
    const projectId = urlArr[2];
    const boardId = urlArr[4];
    const fetchTasks = async () => {
      const results = await getTasks(projectId, boardId, user);

      setTask(convertArrayToObject(results.issues, swimlines));

      // setTask(results.issues);
    };

    fetchTasks();
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, category) => {
    const id = JSON.parse(e.dataTransfer.getData('id'));
    const draggingItem = task[id.category].find((item) => item.id === id.id);

    if (draggingItem) {
      const filteredTask = task[id.category].filter(
        (item) => item.id !== draggingItem.id
      );

      setTask({
        ...task,
        [id.category]: filteredTask,
        [category]:
          category === id.category
            ? task[category]
            : [...task[category], draggingItem],
      });
    }
  };

  const handleDragEnter = (index) => {
    setCurrentOverTaskIndex(index);
  };

  return (
    <div className="board-page-wrapper" style={{ overflowX: 'auto' }}>
      <section className="board-header">
        <strong>Project Board.</strong>
      </section>

      <section className="board-task-wrapper">
        {convertObjectIntoArray(task).map((item) => (
          <SwimLine
            key={item[0]}
            group={item[0]}
            data={item[1]}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
          />
        ))}
      </section>
    </div>
  );
};

export default Board;
