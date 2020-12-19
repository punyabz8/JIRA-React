import React, { useState } from 'react';

import { task as MockTask } from '../mocks/task';
import SwimLine from '../components/Swimline/Swim-line';
import { convertObjectIntoArray } from '../utils/array';

import '../assets/scss/board.scss';

const Board = () => {
  // TODO: remove this after integration.

  const [task, setTask] = useState(MockTask);

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

  return (
    <div className="board-page-wrapper">
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
          />
        ))}
      </section>
    </div>
  );
};

export default Board;
