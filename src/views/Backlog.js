import React, { useState } from 'react';

import SwimLine from '../components/Swimline/Swim-line';
import { convertObjectIntoArray } from '../utils/array';

import '../assets/scss/backlog.scss';
import ListView from '../components/list-view/ListView';
import ListTitle from '../components/list-view/ListTitle';

const Backlog = () => {
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };

  // const handleDrop = (e, category) => {
  //   const id = JSON.parse(e.dataTransfer.getData('id'));
  //   const draggingItem = task[id.category].find((item) => item.id === id.id);

  //   if (draggingItem) {
  //     const filteredTask = task[id.category].filter(
  //       (item) => item.id !== draggingItem.id
  //     );

  //     setTask({
  //       ...task,
  //       [id.category]: filteredTask,
  //       [category]:
  //         category === id.category
  //           ? task[category]
  //           : [...task[category], draggingItem],
  //     });
  //   }
  // };

  const toggleBacklog = (e) => {
    const list = document.getElementById('backlog-list');

    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  };

  return (
    <div className="backlog-page-wrapper">
      <section>
        <strong className="board-header">Backlog</strong>
      </section>

      <div className="container">
        <section className="task-wrapper">
          <ListTitle title="Backlog" onClick={toggleBacklog}></ListTitle>
          <ListView id="backlog-list"></ListView>
        </section>
      </div>
    </div>
  );
};

export default Backlog;
