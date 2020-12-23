import React from 'react';
import PropTypes from 'prop-types';
import TaskCardInline from '../Task-Card/TaskCardInline';

import { isArrayEmpty } from '../../utils/array';

const BacklogComponent = ({ title = 'Default title', tasks, category }) => {
  return (
    <div className="backlog-container">
      <div className="font-weight-bold">{title}</div>
      <section className="list-wrapper">
        {!isArrayEmpty(tasks || []) ? (
          tasks.map((task) => (
            <TaskCardInline
              key={task.id}
              title={task.title}
              image={(task.user && task.user.image) || ''}
              priority={task.priority}
              type={task.type}
              ticket={task.ticket}
              status={category}
              id={task.id}
            />
          ))
        ) : (
          <div>No task</div>
        )}
      </section>
    </div>
  );
};

BacklogComponent.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  tasks: PropTypes.array,
};

export default BacklogComponent;
